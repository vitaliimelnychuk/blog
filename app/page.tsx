import { Header } from '../src/components/Header'

export default function App() {
  return (
    <>
      <div className="fixed inset-0 flex justify-center">
        <div className="flex w-full max-w-7xl">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      <div className="relative">
        <Header />
        <main></main>
      </div>
    </>
  )
}
