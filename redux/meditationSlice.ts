import { createSlice } from '@reduxjs/toolkit'

export interface Activity {
  selected: boolean
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
        selected: true,
      }
    },
  },
})

export const { completed } = meditationSlice.actions
export default meditationSlice.reducer
