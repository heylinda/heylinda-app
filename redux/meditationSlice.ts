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
  favorites: string[]
}

const initialState: MeditationState = {
  activity: {},
  filepaths: [],
  favorites: [],
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
    favorites(state, action) {
      state.favorites.push(action.payload)
    },
    removeFavorite(state, action) {
      state.favorites = state.favorites.filter((e) => e !== action.payload)
    },
    reset: () => initialState,
  },
})

export const { completed, reset, filepaths, favorites, removeFavorite } = meditationSlice.actions
export default meditationSlice.reducer
