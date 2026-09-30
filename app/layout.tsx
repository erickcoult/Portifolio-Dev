import { Inter, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'
import { Header } from './components/header'
import { ContactForm } from './components/contact-form'
import { Footer } from './components/footer'
import { BackToTop } from './components/back-to-top'
import { Toaster } from './components/toaster'

export const metadata = {
  title: {
    default: 'Erick Coutinho | Software Developer',
    template: '%s | Erick Coutinho',
  },
  description:
    'Junior software developer focused on web development with JavaScript, React, Node.js and MongoDB.',
  icons: [
    {
      url: '/favicon.svg', // favicon
    },
  ],
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-NZ" className={`${inter.variable} ${plexMono.variable}`}>
      <body>
        <Toaster />
        <Header></Header>
        {children}
        <ContactForm />
        <Footer />
        <BackToTop />
      </body>
    </html>
  )
}
