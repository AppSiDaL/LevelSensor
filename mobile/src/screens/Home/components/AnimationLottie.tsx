import React, { useRef, useEffect } from 'react'
import { View } from 'react-native'
import LottieView from 'lottie-react-native'

export default function AnimationLottie (): JSX.Element {
  const animation = useRef(null)
  useEffect(() => {
    // You can control the ref programmatically, rather than using autoPlay
    // animation.current?.play();
  }, [])

  return (
    <View style={{}}>
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 100,
          height: 100
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require('../../../../assets/weather/sunny.json')}
      />
    </View>
  )
}
