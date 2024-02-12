import React from 'react'
import { View } from 'react-native'
import { Avatar, Text } from 'react-native-paper'

export default function Header (): JSX.Element {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10
      }}
    >
      <Text variant="titleLarge" style={{ fontWeight: 'bold' }}>
        Hola, Gil
      </Text>
      <Avatar.Icon
        size={30}
        icon="bell"
        color="gray"
        style={{
          backgroundColor: 'transparent',
          borderColor: 'gray',
          borderWidth: 1
        }}
      />
    </View>
  )
}
