import * as Amplitude from 'expo-analytics-amplitude'
import { Platform } from 'react-native'

export const initializeAnalytics = async () => {
  if (Platform.OS !== 'web') {
    await Amplitude.initializeAsync('c53c4e54414340dc1e6feeb7fd95293c')
  }
}

export const logEvent = async (eventName: string) => {
  if (Platform.OS !== 'web') {
    await Amplitude.logEventAsync(eventName)
  }
}
