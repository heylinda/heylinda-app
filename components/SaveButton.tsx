import React, { useState, useEffect } from 'react'
import { AntDesign as Icon } from '@expo/vector-icons'

import { useMeditation, useAppDispatch } from '../hooks'
import { favorites, removeFavorite } from '../redux/meditationSlice'
import { store } from '../redux/store'

export default function SaveButton(props: any) {
  const id = props.id
  const meditation = useMeditation(id)
  const [saved, setSaved] = useState(false)
  const dispatch = useAppDispatch()

  useEffect(() => {
    // Load from state
    let saved = store.getState().meditation.favorites
    let track = meditation?.track

    if (saved.length > 0 && saved.includes(String(track))) {
      setSaved(true)
    }
  }, [setSaved, meditation])

  const saveItem = () => {
    dispatch(favorites(meditation?.track))
    setSaved(true)
  }

  const removeItem = () => {
    dispatch(removeFavorite(meditation?.track))
    setSaved(false)
  }

  if (saved) {
    return (
      <Icon name="heart" style={{ marginTop: 10 }} size={15} color="black" onPress={removeItem} />
    )
  } else {
    return (
      <Icon name="hearto" style={{ marginTop: 10 }} size={15} color="black" onPress={saveItem} />
    )
  }
}
