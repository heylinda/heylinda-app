import { Platform } from 'react-native'
import { init, logEvent as log } from '@amplitude/analytics-react-native'
import { requestTrackingPermissionsAsync } from 'expo-tracking-transparency'

export const initializeAnalytics = async () => {
  if (Platform.OS === 'ios') {
    const { status } = await requestTrackingPermissionsAsync()
    if (status !== 'granted') {
      return
    }
  }
  if (Platform.OS !== 'web') {
    init('c53c4e54414340dc1e6feeb7fd95293c')
  }
}

export const logEvent = async (eventName: string, properties?: object) => {
  if (Platform.OS === 'ios') {
    const { status } = await requestTrackingPermissionsAsync()
    if (status !== 'granted') {
      return
    }
  }
  if (Platform.OS !== 'web') {
    init('c53c4e54414340dc1e6feeb7fd95293c')
    log(eventName, properties)
    console.log(eventName, properties)
  }
}
