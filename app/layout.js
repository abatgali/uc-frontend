import './globals.css'
import { Inter } from 'next/font/google'
import { Playfair_Display } from 'next/font/google'

import Nav from './components/nav'
import Banner from './components/banner'
import Footer from './components/footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'UC Cup - United Chin International',
  description: 'Unlock a universe of excitement, camaraderie, and competition with ClubConnect, your all-access pass to clubs, events, and contests. Say hello to limitless opportunities.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Banner/>
        <Nav/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
