import Image from 'next/image'
import { BriefcaseIcon } from '@heroicons/react/24/solid'

import logoFreelance from '../images/logos/freelance.svg'
import farfetchLogo from '../images/logos/farfetch.svg'
import logoReflaunt from '../images/logos/reflaunt.png'
import logoYaware from '../images/logos/yaware.png'
import logoWise from '../images/logos/wise.jpeg'

function Resume() {
  const resume = [
    {
      company: 'Reflaunt',
      title: 'Engineering Manager',
      logo: logoReflaunt,
      start: '2022',
      end: null,
    },
    {
      company: 'Freelance',
      title: 'Software Engineer / Consultant',
      logo: logoFreelance,
      start: '2019',
      end: null,
    },
    {
      company: 'Farfetch',
      title: 'Software Engineer - Performance',
      logo: farfetchLogo,
      start: '2020',
      end: '2022',
    },
    {
      company: 'Wise Engineering',
      title: 'Senior Software Engineer / Mentor',
      logo: logoWise,
      start: '2017',
      end: '2020',
    },
    {
      company: 'Yaware',
      title: 'Tech Lead',
      logo: logoYaware,
      start: '2014',
      end: '2017',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={role.logo}
                alt=""
                className="h-8 w-8 rounded-full"
                unoptimized
              />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start} until ${role.end}`}
              >
                <time dateTime={role.start}>{role.start}</time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end || 'Present'}>
                  {role.end || 'Present'}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default Resume
