function ChevronRightIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="ml-1 h-4 w-4 stroke-current"
    >
      <path
        d="M6.75 5.75 9.25 8l-2.5 2.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ReadArticle() {
  return (
    <div
      aria-hidden="true"
      className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
    >
      Read article
      <ChevronRightIcon />
    </div>
  )
}

export default ReadArticle
