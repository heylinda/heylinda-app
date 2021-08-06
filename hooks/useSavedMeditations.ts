import { meditations } from '../data/meditations'
import { store } from '../redux/store'

export const useSavedMeditations = () => {
  // Find saved meditations by track #
  let savedTracks = store.getState().meditation.favorites

  const arr = Object.values(meditations).flat()

  let data = arr.filter((meditation) => savedTracks.includes(String(meditation.track)))

  return data
}
