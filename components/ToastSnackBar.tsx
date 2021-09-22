import React from 'react'
import { Snackbar } from 'react-native-paper'
import { Text, useThemeColor } from '../components/Themed'

interface Props {
  message: string
  show: boolean
  setShow: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ToastBar({ message, show, setShow }: Props) {
  const onDismissSnackBar = () => setShow(false)
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
