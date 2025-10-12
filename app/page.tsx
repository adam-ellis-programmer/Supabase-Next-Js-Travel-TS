import { DeployButton } from '@/components/deploy-button'
import { EnvVarWarning } from '@/components/env-var-warning'
import { AuthButton } from '@/components/auth-button'
import Hero from '@/components/Hero'
import { ThemeSwitcher } from '@/components/theme-switcher'
import { ConnectSupabaseSteps } from '@/components/tutorial/connect-supabase-steps'
import { SignUpUserSteps } from '@/components/tutorial/sign-up-user-steps'
import { hasEnvVars } from '@/lib/utils'
import Link from 'next/link'
import { SignUpForm } from '@/components/sign-up-form'
import Container from '@/components/layout/Container'
import TopSellers from '@/components/TopSellers'
import PopularDest from '@/components/PopularDest'
import Activities from '@/components/Activities'
import Reviews from '@/components/Reviews'
import { HomePage } from '@/lib/supabase/services/site/home-page-service'

export default async function Home() {
  const showcase = await HomePage.getShowCase()
  const popular = await HomePage.getPopular()
  const activities = await HomePage.getActivities()
  console.log(activities)

  return (
    <main className=''>
      <Hero />
      <Container>
        <TopSellers />
      </Container>
      <PopularDest />
      <Activities />
      <Reviews />
    </main>
  )
}
