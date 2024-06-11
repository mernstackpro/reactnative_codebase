import * as React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import { Stack } from 'expo-router'
import { Studios } from '@components/studios/Studios'

export default function StudiosScreen () {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          title: 'Studios',
          headerShown: false
        }}
      />
      <Studios />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
