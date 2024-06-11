import * as React from 'react'

import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useFonts } from 'expo-font'
import { Tabs } from 'expo-router/tabs'
import * as Location from 'expo-location'
import { useEffect } from 'react'

import { StyleSheet } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import brandColour from '@brand/colour'
import { useColorScheme } from '@components/useColorScheme'

import jammedStore from '@store/jammedStore'

import { QueryClient, QueryClientProvider } from 'react-query'
import Provider from '../../providers/auth'

const queryClient = new QueryClient()

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary
} from 'expo-router'

// Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync()
// SplashScreen.hideAsync()

export default function RootLayout () {
  let { location } = jammedStore

  const [fontsLoaded, fontError] = useFonts({
    'Balboa-Condensed': require('../../assets/fonts/Balboa-Condensed.otf'),
    'Moret-Extrabold': require('../../assets/fonts/Moret-Extrabold.ttf')
  })

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (fontError) throw fontError
  }, [fontError])

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        jammedStore.setState({ loading: false, locationLoaded: true })
        return
      }

      location = await Location.getLastKnownPositionAsync()
      jammedStore.setState({ location, loading: false, locationLoaded: true })
    })()
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <Provider>
      <QueryClientProvider client={queryClient}>
        <RootLayoutNav />
      </QueryClientProvider>
    </Provider>
  )
}

function RootLayoutNav () {
  const colorScheme = useColorScheme()

  const insets = useSafeAreaInsets()
  const bottomNavHeight = 50 + insets.bottom

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Tabs backBehavior='history' screenOptions={{
        tabBarActiveTintColor: brandColour.black,
        tabBarInactiveTintColor: brandColour.white,
        tabBarLabelStyle: { fontSize: 18, fontFamily: 'Balboa-Condensed' },
        tabBarStyle: { backgroundColor: brandColour.secondary, borderTopWidth: 0, shadowColor: 'transparent', height: bottomNavHeight }

      }}>
          <Tabs.Screen name="studios" options={{
            headerShown: false,
            title: 'Studios',
            tabBarItemStyle: styles.tab,
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
            )
          }} />
          <Tabs.Screen name="bookings" options={{
            headerShown: false,
            title: 'Bookings',
            tabBarItemStyle: styles.tab,
            href: '/bookings',
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
            )
          }} />
          <Tabs.Screen name="faves" options={{
            headerShown: false,
            title: 'Faves',
            tabBarItemStyle: styles.tab,
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="heart" color={color} size={size} />
            )
          }} />
          <Tabs.Screen name="profile/index" options={{
            headerShown: false,
            title: 'Profile',
            tabBarItemStyle: styles.tab,
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="account" color={color} size={size} />
            )
          }} />
          <Tabs.Screen
            name="index"
            options={{
              href: null
            }}/>

      </Tabs>
    </ThemeProvider>
  )
}

const styles = StyleSheet.create({
  tab: {
    backgroundColor: brandColour.secondary
  }
})
