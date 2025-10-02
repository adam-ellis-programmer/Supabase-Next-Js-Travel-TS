import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import './globals.css'
import Nav from '@/components/layout/Nav'
const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Next.js and Supabase Starter Kit',
  description: 'The fastest way to build apps with Next.js and Supabase',
}

const geistSans = Geist({
  variable: '--font-geist-sans',
  display: 'swap',
  subsets: ['latin'],
})
import Container from '@/components/layout/Container'
import Footer from '@/components/layout/Footer'
import DevButtons from '@/dev/DevButtons'
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const dark = false
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${geistSans.className} antialiased ${
          dark ? 'bg-[#304255] text-white' : ''
        }`}
      >
        <DevButtons />
        <Nav />
        {/* <Container></Container> */}
        {children}
        <Footer />
      </body>
    </html>
  )
}
