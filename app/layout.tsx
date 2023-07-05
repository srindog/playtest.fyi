import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Navbar } from './navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Playtest.fyi | A product testing platform for sports brands',
  description: 'A product testing platform for sports brands',
}

const Logo = () => (
  <header className='text-xl text-white font-semibold'>
    <a href='/'>Playtest.fyi</a>
  </header>
)

const Footer = () => (
  <div className='flex justify-center p-3 bg-lime-500 border-b-2'>
    <header className='text-base text-white font-semibold'>
      <a href='https://www.playtest.fyi'>Playtest.fyi</a>
    </header>
  </div>
)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
