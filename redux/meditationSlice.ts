import { createSlice } from '@reduxjs/toolkit'

export interface Activity {
  // in miliseconds
  duration: number
}
export interface MeditationState {
  activity: {
    [key: string]: Activity
  }
}

const initialState: MeditationState = {
  activity: {},
}

const meditationSlice = createSlice({
  name: 'meditation',
  initialState,
  reducers: {
    completed(state) {
      state.activity[Date.now()] = {
        duration: 60000,
      }
    },
    reset: () => initialState,
  },
})

export const { completed, reset } = meditationSlice.actions
export default meditationSlice.reducer
