import { RootState } from './store'

export const selectActivity = (state: RootState) => state.meditation.activity
