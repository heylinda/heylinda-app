import { createSlice } from '@reduxjs/toolkit'

interface MeditationState {
  activity: {
    [key: string]: {
      selected: boolean
    }
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
