import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Activity {
  // in miliseconds
  duration: number
}
export interface MeditationState {
  activity: {
    [key: string]: Activity
  }
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
    filepaths(state, action) {
      state.filepaths.push(action.payload)
    },
    reset: () => initialState,
  },
})

export const { completed, reset, filepaths } = meditationSlice.actions
export default meditationSlice.reducer
