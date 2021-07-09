import { createSlice } from '@reduxjs/toolkit'

interface ActivityState {
  activity: {
    [key: string]: {
      // how long was the meditation
      ms: number
    }
  }
}

const initialState: ActivityState = {
  activity: {},
}

const activitySlice = createSlice({
  name: 'activity',
  initialState,
  reducers: {
    create(state) {
      state.activity['02-02-2020'] = {
        ms: 12,
      }
    },
  },
})

export const { create } = activitySlice.actions
export default activitySlice.reducer
