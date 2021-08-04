import React, { useState } from 'react'
import { AntDesign as Icon } from '@expo/vector-icons'
import { useMeditation } from '../hooks'
import * as FileSystem from 'expo-file-system'

export default function DownloadButton(props: any) {
  const id = props.id
  const meditation = useMeditation(id)
  const uri = meditation?.uri || ''
  const [downloaded, setDownloaded] = useState(false)

  const filename = () => {
    let filename = uri.split('/').pop()
    if (!filename) {
      return
    }
    return filename
  }

  const removeAudioFile = async () => {
    let base = await FileSystem.documentDirectory
    if (!base) {
      return
    }

    FileSystem.deleteAsync(base + filename()).then(() => {
      setDownloaded(false)
      // Remove .mp3 from filesystem and the filepath from redux-persist
    })
  }

  const saveAudioFile = async () => {
    let base = await FileSystem.documentDirectory
    if (!base) {
      return
    }

    FileSystem.downloadAsync(uri, base + filename()).then((res) => {
      if (res.status == 200) {
        setDownloaded(true)
        // Store the device filepath to the mp3 in redux-persist
      }
    })
  }

  if (downloaded) {
    return (
      <Icon
        name="checkcircleo"
        style={{ marginTop: 10 }}
        size={25}
        color="black"
        onPress={removeAudioFile}
      />
    )
  } else {
    return (
      <Icon
        name="download"
        style={{ marginTop: 10 }}
        size={25}
        color="black"
        onPress={saveAudioFile}
      />
    )
  }
}
