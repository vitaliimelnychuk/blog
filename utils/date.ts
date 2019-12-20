const shortMonthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const getMonthName = (date: Date) => shortMonthNames[date.getMonth()]

export const getFormattedDate = (date: Date): string =>
  `${date.getDate()} ${getMonthName(date)} ${date.getFullYear()}`
