import { useMsToTime } from '..'

describe('useMsToTime unit tests', () => {
  it('given 0 ms, should return 00:00', () => {
    const minutes = useMsToTime(0)
    expect(minutes).toBe('00:00')
  })

  it('given 60000 ms, should return 01:00', () => {
    const minutes = useMsToTime(60000)
    expect(minutes).toBe('01:00')
  })

  it('given 210000 ms, should return 03:30', () => {
    const minutes = useMsToTime(210000)
    expect(minutes).toBe('03:30')
  })

  it('given 225000 ms, should return 03:45', () => {
    const minutes = useMsToTime(225000)
    expect(minutes).toBe('03:45')
  })

  it('given 1335000 ms, should return 22:15', () => {
    const minutes = useMsToTime(1335000)
    expect(minutes).toBe('22:15')
  })
})
