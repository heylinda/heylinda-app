export function useMinutesToStatsTime(minutes: number) {
  const h = Math.floor(minutes / 60)
  const m = minutes % 60

  if (h && m) {
    return `${h}h ${m}m`
  } else if (h) {
    return `${h} hour${h === 1 ? '' : 's'}`
  } else {
    return `${m} minute${m === 1 ? '' : 's'}`
  }
}
