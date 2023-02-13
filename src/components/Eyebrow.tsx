import { formatDate } from '../lib/date'

function Eyebrow({ date, border = true }: { date: Date; border?: boolean }) {
  return (
    <time className="relative z-10 order-first mb-3 flex items-center pl-3.5 text-sm text-zinc-400 dark:text-zinc-500">
      <span
        className="absolute inset-y-0 left-0 flex items-center"
        aria-hidden="true"
      >
        {border ? (
          <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
        ) : null}
      </span>
      {formatDate(date)}
    </time>
  )
}

export default Eyebrow
