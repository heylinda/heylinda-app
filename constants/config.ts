import Constants from 'expo-constants'

// Read extras injected at build time via app.config.js / app.json
const extras = (Constants && (Constants as any).expoConfig && (Constants as any).expoConfig.extra) || (Constants && (Constants as any).manifest && (Constants as any).manifest.extra) || {}

export const API_URL = process.env.API_URL || extras.API_URL || 'https://goofy-ritchie-dd0c3d.netlify.app'

export const AMPLITUDE_API_KEY = process.env.AMPLITUDE_API_KEY || extras.AMPLITUDE_API_KEY || 'c53c4e54414340dc1e6feeb7fd95293c'

export default {
  API_URL,
  AMPLITUDE_API_KEY,
}
