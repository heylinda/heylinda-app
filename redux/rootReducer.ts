import { combineReducers } from '@reduxjs/toolkit'

const rootReducer = combineReducers({})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
