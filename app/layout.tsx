import '../src/styles/tailwind.css'
import { Header } from '../src/components/Header'
import { Footer } from '../src/components/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Vitalii - Software engineer, builder, and amateur runner.</title>
        <meta
          name="description"
          content="I’m Vitalii, a software engineer  based in Porto, Portugal. I occasinally build new stuff and share my learnings here."
        />
      </head>
      <body>
        <div className="fixed inset-0 flex justify-center">
          <div className="flex w-full max-w-7xl">
            <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
          </div>
        </div>
        <div className="relative">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
