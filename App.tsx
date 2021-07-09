import 'react-native-gesture-handler'
import 'react-native-get-random-values'
import { Provider } from 'react-redux'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider as PaperProvider } from 'react-native-paper'

import useCachedResources from './hooks/useCachedResources'
import useColorScheme from './hooks/useColorScheme'
import Navigation from './navigation'
import { store, persistor } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'

export default function App() {
  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaProvider>
            <PaperProvider>
              <Navigation colorScheme={colorScheme} />
              <StatusBar />
            </PaperProvider>
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    )
  }
}
