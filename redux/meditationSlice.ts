import { createSlice, PayloadAction } from '@reduxjs/toolkit'

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
}

const initialState: MeditationState = {
  activity: {},
  filepaths: [],
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
  },
})

export const { completed, manualEntry, reset, addFilePath } = meditationSlice.actions
export default meditationSlice.reducer
