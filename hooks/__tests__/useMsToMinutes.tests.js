import { useMsToMinutes } from '..'

describe('useMsToMinutes unit tests', () => {
  it('given 0 ms, should return 0 minutes', () => {
    const minutes = useMsToMinutes(0)
    expect(minutes).toBe(0)
  })

  it('given 60000 ms, should return 1 minute', () => {
    const minutes = useMsToMinutes(60000)
    expect(minutes).toBe(1)
  })

  it('given 180000 ms, should return 3 minutes', () => {
    const minutes = useMsToMinutes(180000)
    expect(minutes).toBe(3)
  })
})
