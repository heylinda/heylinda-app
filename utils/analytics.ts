import * as Amplitude from 'expo-analytics-amplitude'

export const initializeAnalytics = async () => {
  await Amplitude.initializeAsync('c53c4e54414340dc1e6feeb7fd95293c')
}

export const logEvent = async (eventName: string) => {
  await Amplitude.logEventAsync(eventName)
}
