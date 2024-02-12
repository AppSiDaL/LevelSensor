import { View, Text } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper'
import AnimationLottie from './AnimationLottie'

export default function ConfortCard (): JSX.Element {
  const date = new Date().toDateString()
  return (
    <Card style={{ margin: 10, padding: 10, backgroundColor: '#333333' }}>
      <View>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>
          Confort
        </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>
              24°C
            </Text>
            <Text style={{ color: 'gray' }}>{date}</Text>
          </View>
          <View>
            <AnimationLottie />
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <Text style={{ color: 'white' }}>Humidity</Text>
            <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>
              50%
            </Text>
          </View>
          <View>
            <Text style={{ color: 'white' }}>Temperature</Text>
            <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>
              24°C
            </Text>
          </View>
          <View>
            <Text style={{ color: 'white' }}>Pressure</Text>
            <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>
              1013 hPa
            </Text>
          </View>
        </View>
      </View>
    </Card>
  )
}
