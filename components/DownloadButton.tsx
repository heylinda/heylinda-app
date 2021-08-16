import React, { useState, useEffect } from 'react'
import { StyleSheet, TextStyle } from 'react-native'
import { AntDesign as Icon } from '@expo/vector-icons'
import * as FileSystem from 'expo-file-system'

import { useMeditation, useAppDispatch } from '../hooks'
import { addFilePath } from '../redux/meditationSlice'
import { useFiles } from '../hooks/useFiles'
import { selectFilePaths } from '../redux/selectors'
import { useAppSelector } from '../hooks'
import { StyleProp } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import { useThemeColor } from './Themed'

interface Props {
  id: string
  style: StyleProp<TextStyle>
}

export default function DownloadButton(props: Props) {
  const { id, style } = props
  const [downloading, setDownloading] = useState(false)
  const meditation = useMeditation(id)
  const files = useFiles('.mp3')
  const uri = meditation?.uri || ''
  const [audioFiles, setAudioFiles] = useState<string[]>([])
  const [downloaded, setDownloaded] = useState(false)
  const dispatch = useAppDispatch()
  const filepaths = useAppSelector(selectFilePaths)
  const primary = useThemeColor({}, 'primary')

  const filename = (path: string) => {
    let _filename = path.split('/').pop()
    if (!_filename) {
      return
    }
    return _filename
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

    setDownloading(true)
    const downloadedFile: FileSystem.FileSystemDownloadResult = await FileSystem.downloadAsync(
      uri,
      path
    )
    setDownloading(false)

    if (downloadedFile.status === 200) {
      dispatch(addFilePath(path))
      setDownloaded(true)
    }
  }

  if (downloading) {
    return <ActivityIndicator color={primary} />
  } else if (downloaded) {
    return <Icon name="checkcircleo" style={[styles.icon, style]} size={15} color={primary} />
  } else {
    return (
      <Icon
        name="download"
        style={[styles.icon, style]}
        size={15}
        color={primary}
        onPress={saveAudioFile}
      />
    )
  }
}

const styles = StyleSheet.create({
  icon: {
    marginTop: 10,
  },
})
