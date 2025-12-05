import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'
import { hasEnvVars } from '../utils'

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  })

  if (!hasEnvVars) {
    return supabaseResponse
  }

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_OR_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          )
          supabaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  const publicRoutes = [
    '/',
    '/tours',
    '/booking',
    '/country-landing',
    '/contact',
  ]

  const isPublicRoute = publicRoutes.some(
    (route) =>
      request.nextUrl.pathname === route ||
      request.nextUrl.pathname.startsWith(route + '/')
  )

  const { data } = await supabase.auth.getClaims()
  const user = data?.claims

  console.log(`
    ====================
    Middleware Check
    ====================
    Path: ${request.nextUrl.pathname}
    User ID: ${user?.sub || 'Not logged in'}
  `)

  // ============================================
  // ADMIN ROUTE PROTECTION
  // ============================================
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // No user at all - redirect to login
    if (!user) {
      console.log('❌ No user found - redirecting to login')
      const url = request.nextUrl.clone()
      url.pathname = '/auth/login'
      url.searchParams.set('redirectTo', request.nextUrl.pathname)

      const redirectResponse = NextResponse.redirect(url)

      // ✅ FIXED: Copy cookies properly
      supabaseResponse.cookies.getAll().forEach((cookie) => {
        redirectResponse.cookies.set(cookie)
      })

      return redirectResponse
    }

    // User exists - check if they're an admin
    const userId = user.sub

    console.log(`🔍 Checking admin status for user: ${userId}`)

    const { data: profile, error } = await supabase
      .from('profiles')
      .select('user_role, role_level')
      .eq('id', userId)
      .single()

    // Handle errors
    if (error) {
      console.error('❌ Error fetching profile:', error)
      const url = request.nextUrl.clone()
      url.pathname = '/auth/error'

      const redirectResponse = NextResponse.redirect(url)

      console.log(`
        ====================
        redirect response:
      ${redirectResponse}}
        ====================`)

      // ✅ FIXED: Copy cookies properly
      supabaseResponse.cookies.getAll().forEach((cookie) => {
        redirectResponse.cookies.set(cookie)
      })

      return redirectResponse
    }

    // Not an admin - redirect to unauthorized
    const prev = []
    const prevUrl = request.nextUrl.pathname
    prev.push(prevUrl)
    if (!profile || profile.user_role !== 'admin') {
      console.log('❌ User is not an admin - blocking access')
      const url = request.nextUrl.clone()
      const currentPathname = request.nextUrl.pathname

      // LEARN ABOUT THE NEXT HEADERS!
      // LEARN ABOUT THE NEXT HEADERS!
      // LEARN ABOUT THE NEXT HEADERS!
      // LEARN ABOUT THE NEXT HEADERS!
      // and guard the backend routes / functions too
      // is there a way to send the url with the request (in the body)?

      const requestHeaders = new Headers(request.headers)
      requestHeaders.set('test-url', request.url)
      console.log('requestHeaders', requestHeaders.get('test-url'))
      console.log('prevUrl--->', prev)

      // console.dir(request, { depth: null })

      // Save the page we are trying to access
      const originalPath = request.nextUrl.pathname

      // Set redirect destination
      url.pathname = '/auth/unauthorized'

      // Add query parameter with original path
      url.searchParams.set('page', originalPath)

      const redirectResponse = NextResponse.redirect(url)

      // ✅ FIXED: Copy cookies properly
      supabaseResponse.cookies.getAll().forEach((cookie) => {
        redirectResponse.cookies.set(cookie)
      })

      return redirectResponse
    }

    // User is admin - allow access
    console.log('✅ Admin access granted')
    return supabaseResponse
  }

  // ============================================
  // REGULAR AUTH CHECK (non-admin routes)
  // ============================================
  if (
    !user &&
    !isPublicRoute &&
    !request.nextUrl.pathname.startsWith('/auth')
  ) {
    console.log('❌ Protected route requires login')
    const url = request.nextUrl.clone()
    url.pathname = '/auth/login'

    const redirectResponse = NextResponse.redirect(url)

    // ✅ FIXED: Copy cookies properly
    supabaseResponse.cookies.getAll().forEach((cookie) => {
      redirectResponse.cookies.set(cookie)
    })

    return redirectResponse
  }

  return supabaseResponse
}
