import type { Metadata } from 'next'
import { Geist, Exo_2 } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import './globals.css'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Travel Explorer',
  description: 'Home Page of the adventure explorer',
}

const geistSans = Geist({
  variable: '--font-geist-sans',
  display: 'swap',
  subsets: ['latin'],
})

const exo2 = Exo_2({
  weight: '400', // or an array of weights like ['400', '700']
  variable: '--font-exo2',
})

//=====================================================
import Container from '@/components/layout/Container'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import DevButtons from '@/dev/DevButtons'
//=====================================================

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const dark = false
  return (
    <html lang='en'>
      <body
        className={`${exo2.className} antialiased ${
          dark ? 'bg-[#304255] text-white' : ''
        }`}
      > 
        {/* <DevButtons />  */}
        <Nav />
        {/* <Container></Container> */}
        {children}
        <Footer />
      </body>
    </html>
  )
}
