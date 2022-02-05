import { openURL as expoOpenURL } from 'expo-linking'

export const openURL = async (url: string) => {
  try {
    await expoOpenURL(url)
  } catch (error) {
    console.error(error)
  }
}
