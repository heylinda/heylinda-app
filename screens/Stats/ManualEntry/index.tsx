import * as React from 'react'
import { StyleSheet } from 'react-native'
import { Button, Paragraph, Dialog, Portal, Provider, TextInput } from 'react-native-paper'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { manualEntry } from '../../../redux/meditationSlice'
import { selectActivity } from '../../../redux/selectors'

interface Props {
  timestamp?: number
  onDismiss: () => void
}

const ManualEntry = ({ timestamp, onDismiss }: Props) => {
  const visible = Boolean(timestamp)
  const dispatch = useAppDispatch()
  const activity = useAppSelector(selectActivity)
  const [duration, setDuration] = React.useState(-1)
  const [defaultValue, setDefaultValue] = React.useState('')

  React.useEffect(() => {
    if (!timestamp) {
      return
    }

    const newDuration = activity[timestamp]?.duration || -1
    setDuration(newDuration)
    setDefaultValue(newDuration === -1 ? '' : newDuration.toString())
  }, [activity, timestamp])

  const onChangeText = (text: string) => {
    const value = Number(text)

    if (text === '' || Number.isNaN(value)) {
      setDuration(-1)
      return
    }

    setDuration(value)
  }

  const onSubmit = () => {
    if (duration < 0) {
      return
    }

    dispatch(
      manualEntry({
        timestamp: timestamp!,
        duration,
      })
    )
    onDismiss()
  }

  return (
    <Provider>
      <Portal>
        <Dialog visible={visible} onDismiss={onDismiss}>
          <Dialog.Title>Manual Entry</Dialog.Title>
          <Dialog.Content>
            <Paragraph>Enter how long you meditated for</Paragraph>
            <TextInput
              testID="input"
              key={defaultValue}
              autoFocus
              defaultValue={defaultValue}
              keyboardType="number-pad"
              label="Time in minutes"
              maxLength={3}
              onChangeText={onChangeText}
              onSubmitEditing={onSubmit}
              style={styles.textInput}
            />
          </Dialog.Content>
          <Dialog.Actions>
            <Button testID="cancel-btn" onPress={onDismiss}>
              Cancel
            </Button>
            <Button testID="submit-btn" disabled={duration < 0} onPress={onSubmit}>
              Submit
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </Provider>
  )
}

const styles = StyleSheet.create({
  textInput: { marginTop: 10 },
})

export default ManualEntry
