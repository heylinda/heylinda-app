import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Meditation } from '../data/meditations'

export interface Activity {
  // in miliseconds
  duration: number
}
export interface MeditationState {
  // When the user meditated, the key is a date string, and the value is the Activity
  activity: {
    [key: string]: Activity
  }
  // Local file paths to the audio files downloaded from the server
  filepaths: string[]

  favourites: Meditation[]
}

const initialState: MeditationState = {
  activity: {},
  filepaths: [],
  favourites: [],
}

const meditationSlice = createSlice({
  name: 'meditation',
  initialState,
  reducers: {
    completed(state, action: PayloadAction<number>) {
      state.activity[Date.now()] = {
        duration: action.payload,
      }
    },
    manualEntry(
      state,
      action: PayloadAction<{
        timestamp: number
        duration: number
      }>
    ) {
      const { duration, timestamp } = action.payload

      // Delete sessions with 0 duration since a single activity is used for manual
      if (duration === 0) {
        delete state.activity[timestamp]
        return
      }

      state.activity[timestamp] = {
        duration,
      }
    },
    addFilePath(state, action) {
      if (!state.filepaths) {
        state.filepaths = []
      }
      state.filepaths.push(action.payload)
    },
    reset: () => initialState,
    updateFavourite: (state, action) => {
      if (!state.favourites) {
        state.favourites = []
      }
      const meditation = action.payload
      const meditationIndex = state.favourites.findIndex((item) => item.id === meditation.id)
      const meditationAlreadyFavourited = meditationIndex !== -1

      if (meditationAlreadyFavourited) {
        state.favourites.splice(meditationIndex, 1)
      } else {
        state.favourites.push(meditation)
      }
    },
  },
})

export const { completed, manualEntry, reset, addFilePath, updateFavourite } =
  meditationSlice.actions
export default meditationSlice.reducer
