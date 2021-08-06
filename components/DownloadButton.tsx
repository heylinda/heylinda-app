import React, { useState, useEffect } from 'react'
import { AntDesign as Icon } from '@expo/vector-icons'
import * as FileSystem from 'expo-file-system'

import { useMeditation, useAppDispatch } from '../hooks'
import { addFilePath } from '../redux/meditationSlice'
import { useFiles } from '../hooks/useFiles'
import { selectFilePaths } from '../redux/selectors'
import { useAppSelector } from '../hooks'

interface Props {
  id: string
}

export default function DownloadButton(props: Props) {
  const id = props.id
  const meditation = useMeditation(id)
  const files = useFiles('.mp3')
  const uri = meditation?.uri || ''
  const [audioFiles, setAudioFiles] = useState<string[]>([])
  const [downloaded, setDownloaded] = useState(false)
  const dispatch = useAppDispatch()
  const filepaths = useAppSelector(selectFilePaths)

  const filename = (path: string) => {
    let filename = path.split('/').pop()
    if (!filename) {
      return
    }
    return filename
  }

  useEffect(() => {
    // If there's any downloaded audio content in filepaths, set downloaded to true and set audioFiles
    if (filepaths.length > 0 && meditation) {
      setAudioFiles(filepaths)

      let name = filename(meditation.uri) || ''
      let isDownloaded = audioFiles.find((a) => filename(a) === name)

      if (isDownloaded) {
        setDownloaded(true)
      }
    }
  }, [audioFiles, files, downloaded, dispatch, meditation, filepaths])

  const saveAudioFile = async () => {
    let base = await FileSystem.documentDirectory
    if (!base || !meditation) {
      return
    }

    const path = base + filename(meditation.uri) || ''

    console.log('Downloading ' + path)

    const downloadedFile: FileSystem.FileSystemDownloadResult = await FileSystem.downloadAsync(
      uri,
      path
    )

    console.log(downloadedFile)

    if (downloadedFile.status === 200) {
      dispatch(addFilePath(path))
      setDownloaded(true)
    }
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
