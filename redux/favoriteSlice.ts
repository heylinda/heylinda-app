import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface FavoriteState {
  favorites: string[]
}

const initialState: FavoriteState = {
  favorites: [],
}

// TODO: Name "favoriteSlice" is temporary, will be renamed to SavedSlice or something similar as the feature is further developed
const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    markAsFavorite: (state, action: PayloadAction<string>) => {
      state.favorites.push(action.payload)
    },
    removeFromFavorites: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter((id) => id !== action.payload)
    },
  },
})

export const { markAsFavorite, removeFromFavorites } = favoriteSlice.actions

export default favoriteSlice.reducer
