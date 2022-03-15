import * as Amplitude from 'expo-analytics-amplitude'
import { Platform } from 'react-native'
import { UA } from 'react-native-dotenv'

export const initializeAnalytics = async () => {
  if (Platform.OS !== 'web') {
    await Amplitude.initializeAsync(UA)
  }
}

export const logEvent = async (eventName: string) => {
  if (Platform.OS !== 'web') {
    await Amplitude.logEventAsync(eventName)
  }
}
