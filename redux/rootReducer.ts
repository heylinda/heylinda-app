import { combineReducers } from '@reduxjs/toolkit'
import activityReducer from './activitySlice'

const rootReducer = combineReducers({
  activity: activityReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
