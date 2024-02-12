import * as React from 'react'
import { AppRegistry } from 'react-native'
import App from './src/App'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { PaperProvider } from 'react-native-paper'
export default function Main (): JSX.Element {
  return (
    <PaperProvider>
        <SafeAreaProvider>
          <App />
        </SafeAreaProvider>
    </PaperProvider>
  )
}

AppRegistry.registerComponent('mobile', () => Main)
