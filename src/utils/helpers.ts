export function isLastUpdateOneDayLong (date: string): boolean {
  const now = new Date()
  const lastUpdate = new Date(date)
  const diff = now.getTime() - lastUpdate.getTime()
  const hours = Math.floor(diff / 1000 / 60 / 60)
  return hours < 24
}

export function dateParser (date: string): string {
  const dateObj = new Date(date)
  const month = dateObj.getMonth() + 1
  const day = dateObj.getDate()
  const year = dateObj.getFullYear()
  const monthStr = MONTHS[Object.keys(MONTHS)[month - 1] as keyof typeof MONTHS]
  return `${monthStr} ${day}, ${year}`
}

const MONTHS = {
  Jan: 'Jan',
  Feb: 'Feb',
  Mar: 'Mar',
  Apr: 'Apr',
  May: 'May',
  Jun: 'Jun',
  Jul: 'Jul',
  Aug: 'Aug',
  Sep: 'Sep',
  Oct: 'Oct',
  Nov: 'Nov',
  Dec: 'Dec'
}

export function durationParser (duration: number): string {
  const hours = Math.floor(duration / 1000 / 60 / 60)
  const minutes = Math.floor(duration / 1000 / 60) % 60
  return `${hours} hr ${minutes} min`
}

export function parseDescription (description: string): string {
  const paragraphs = description.split('\n')
  return paragraphs
    .map((paragraph, index) => {
      return `<p key=${index}>${paragraph}</p>`
    })
    .join('')
}

export function shortenString (str: string) {
  if (str.length > 200) {
    return str.slice(0, 197) + '...'
  } else {
    return str
  }
}
