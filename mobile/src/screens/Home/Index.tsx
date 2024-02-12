import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from './components/Header'
import ConfortCard from './components/ConfortCard'

export default function Index (): JSX.Element {
  return (
    <SafeAreaView>
        <Header/>
        <ConfortCard />
    </SafeAreaView>
  )
}
