import React, { useState, useEffect } from 'react'
import { AntDesign as Icon } from '@expo/vector-icons'
import * as FileSystem from 'expo-file-system'

import { useMeditation, useAppDispatch } from '../hooks'
import { filepaths } from '../redux/meditationSlice'
import { store } from '../redux/store'
import { useFiles } from '../hooks/useFiles'

export default function DownloadButton(props: any) {
  const id = props.id
  const meditation = useMeditation(id)
  const files = useFiles('.mp3')
  const uri = meditation?.uri || ''
  const [audioFiles, setAudioFiles] = useState<string[]>([])
  const [downloaded, setDownloaded] = useState(false)
  const dispatch = useAppDispatch()

  const filename = (path: string) => {
    let filename = path.split('/').pop()
    if (!filename) {
      return
    }
    return filename
  }

  useEffect(() => {
    if (audioFiles.length === 0) {
      // Fill redux state .mp3 filepaths on device
      files.then((paths) => {
        dispatch(filepaths(paths))
        let storedFiles = store.getState().meditation.filepaths
        setAudioFiles(storedFiles)
      })
    }

    if (!downloaded) {
      if (meditation && audioFiles) {
        let name = filename(meditation.uri) ?? ''
        setDownloaded(audioFiles.includes(name))
      }
    }
  }, [audioFiles, files, downloaded, dispatch, meditation])

  const saveAudioFile = async () => {
    let base = await FileSystem.documentDirectory
    if (!base || !meditation) {
      return
    }

    const path = base + filename(meditation.uri)

    FileSystem.downloadAsync(uri, path).then((res) => {
      if (res.status === 200) {
        dispatch(filepaths(path))
        setDownloaded(true)
      }
    })
  }

  if (downloaded) {
    return <Icon name="checkcircleo" style={{ marginTop: 10 }} size={15} color="black" />
  } else {
    return (
      <Icon
        name="download"
        style={{ marginTop: 10 }}
        size={15}
        color="black"
        onPress={saveAudioFile}
      />
    )
  }
}
