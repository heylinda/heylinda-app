function formatToString(n: number) {
  return n < 10 ? `0${n}` : n;
}

export default function useMsToTime(s: number) {
  const ms = s % 1000;
  s = (s - ms) / 1000;
  const secs = s % 60;
  s = (s - secs) / 60;
  const mins = s % 60;
  const minsString = formatToString(mins);
  const secsString = formatToString(secs);

  return minsString + ":" + secsString;
}
