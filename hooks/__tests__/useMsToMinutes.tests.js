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

  it('given 3600000 ms, should return 60 minutes', () => {
    const minutes = useMsToMinutes(3600000)
    expect(minutes).toBe(60)
  })

  it('given 4500000 ms, should return 75 minutes', () => {
    const minutes = useMsToMinutes(4500000)
    expect(minutes).toBe(75)
  })
})
