import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import Navbar from '@/components/Navbar';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Learn Words',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
