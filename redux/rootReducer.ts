import { combineReducers } from '@reduxjs/toolkit'
import meditationReducer from './meditationSlice'

const rootReducer = combineReducers({
  meditation: meditationReducer,
})

export default rootReducer
