import { useMinutesToStatsTime } from '..'

describe('useMinutesToStatsTime unit tests', () => {
  it('given 0 minutes, should return 0 minutes', () => {
    const time = useMinutesToStatsTime(0)
    expect(time).toBe('0 minutes')
  })

  it('given 1 minute, should return 1 minute', () => {
    const time = useMinutesToStatsTime(1)
    expect(time).toBe('1 minute')
  })

  it('given 2 minutes, should return 2 minutes', () => {
    const time = useMinutesToStatsTime(2)
    expect(time).toBe('2 minutes')
  })

  it('given 59 minutes, should return 59 minutes', () => {
    const time = useMinutesToStatsTime(59)
    expect(time).toBe('59 minutes')
  })

  it('given 60 minutes, should return 1 hour', () => {
    const time = useMinutesToStatsTime(60)
    expect(time).toBe('1 hour')
  })

  it('given 120 minutes, should return 2 hours', () => {
    const time = useMinutesToStatsTime(120)
    expect(time).toBe('2 hours')
  })

  it('given 75 minutes, should return 1h 15m', () => {
    const time = useMinutesToStatsTime(75)
    expect(time).toBe('1h 15m')
  })

  it('given 93 minutes, should return 1h 33m', () => {
    const time = useMinutesToStatsTime(93)
    expect(time).toBe('1h 33m')
  })
})
