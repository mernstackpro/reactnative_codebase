import * as React from 'react'
import { router } from 'expo-router'
import { Dimensions } from 'react-native'
import LottieView from 'lottie-react-native'
import * as SplashScreen from 'expo-splash-screen'

SplashScreen.hideAsync()

const Index = () => {
  const { height, width } = Dimensions.get('window')

  return (
      <LottieView onAnimationFinish={() => router.navigate('(tabs)/studios') } source={require('../assets/splash-animation.json')} style={{ height: height, width: width }} autoPlay loop={false}/>
  )
}
export default Index
