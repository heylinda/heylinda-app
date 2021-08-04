import * as React from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function DownloadButton() {
  // Pass an 'id' prop to view that item's redux state

  const audioDownloaded = () => {
    // return true if meditation is downloaded - use props.id and see if the item filepath exists in redux-persist
    return false
  }

  const removeAudioFile = () => {
    // Remove .mp3 from filesystem and the filepath from redux-persist
  }

  const saveAudioFile = () => {
    // Save .mp3 to filesystem using react-native-fs. Store the filepath using redux-persist
  }

  if (audioDownloaded()) {
    return (
      <Ionicons
        name="md-checkmark-circle"
        style={{ marginTop: 8 }}
        size={32}
        color="black"
        onPress={() => {
          removeAudioFile()
        }}
      />
    )
  } else {
    return (
      <Ionicons
        name="md-add"
        style={{ marginTop: 8 }}
        size={32}
        color="black"
        onPress={() => {
          saveAudioFile()
        }}
      />
    )
  }
}
