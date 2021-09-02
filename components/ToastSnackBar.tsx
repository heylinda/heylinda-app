import React from 'react'
import { Snackbar } from 'react-native-paper'
import { Text, useThemeColor } from '../components/Themed'

interface Props {
  message: string
  show: boolean
  changeShow: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ToastBar({ message, show, changeShow }: Props) {
  const onDismissSnackBar = () => changeShow(false)
  return (
    <Snackbar
      visible={show}
      duration={2000}
      onDismiss={onDismissSnackBar}
      wrapperStyle={{ backgroundColor: useThemeColor({}, 'black') }}
    >
      <Text style={{ color: useThemeColor({}, 'white') }}>{message}</Text>
    </Snackbar>
  )
}
