import { createSlice, PayloadAction } from '@reduxjs/toolkit'

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
    completed(state, action: PayloadAction<number>) {
      state.activity[Date.now()] = {
        duration: action.payload,
      }
    },
    reset: () => initialState,
  },
})

export const { completed, reset } = meditationSlice.actions
export default meditationSlice.reducer
