import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import { Analytics } from '@vercel/analytics/react'

import '../src/styles/tailwind.css'
import { Header } from '../src/components/Header'
import { Footer } from '../src/components/Footer'

export const metadata: Metadata = {
  title: 'Vitalii - Software engineer, builder, and amateur runner.',
  description:
    'I’m Vitalii, a software engineer  based in Porto, Portugal. I occasinally build new stuff and share my learnings here.',
  icons: {
    icon: [
      { url: '/static/favicon.ico', sizes: 'any' },
      { url: '/static/icon.png', type: 'image/png', sizes: '192x192' },
    ],
    apple: '/static/apple-touch-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-zinc-50 dark:bg-black">
        <Analytics />
        <div className="flex min-h-full flex-col">
          <div className="fixed inset-0 flex justify-center">
            <div className="flex w-full max-w-7xl">
              <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
            </div>
          </div>
          <div className="relative">
            <Header />
            <main>{children}</main>
          </div>
        </div>
        <Footer />
      </body>
    </html>
  )
}
