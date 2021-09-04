import { combineReducers } from '@reduxjs/toolkit'
import meditationReducer from './meditationSlice'
import favoriteReducer from './favoriteSlice'

const rootReducer = combineReducers({
  meditation: meditationReducer,
  favorite: favoriteReducer,
})

export default rootReducer
