import Link from 'next/link'
import { ReactNode } from 'react'

import { InnerContainer, OuterContainer } from './Container'

function NavLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  )
}
// TODO: make links strict and reusable?
export function Footer() {
  return (
    <footer className="mt-32">
      <OuterContainer>
        <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
          <InnerContainer>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="/">About</NavLink>
                <NavLink href="/articles">Articles</NavLink>
                {/* <NavLink href="/projects">Projects</NavLink> */}
                <NavLink href="/speaking">Speaking</NavLink>
                {/* <NavLink href="/uses">Uses</NavLink> */}
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} Vitalii Melnychuk. All rights
                reserved.
              </p>
            </div>
          </InnerContainer>
        </div>
      </OuterContainer>
    </footer>
  )
}
