function formatToString(n: number) {
  return n < 10 ? `0${n}` : n
}

export function useMsToTime(s: number) {
  const ms = s % 1000
  s = (s - ms) / 1000
  const secs = s % 60
  s = (s - secs) / 60
  const mins = s % 60
  s = (s - mins) / 60
  const hour = s
  const hourString = formatToString(hour)
  const minsString = formatToString(mins)
  const secsString = formatToString(secs)

  if (s === 0) {
    return minsString + ':' + secsString
  } else {
    return hourString + ':' + minsString + ':' + secsString
  }
}
