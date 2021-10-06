export function useMsToMinutes(ms: number) {
  const minutes = Math.floor(ms / 60000)

  return minutes
}
