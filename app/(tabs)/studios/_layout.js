import * as React from 'react'
import { Stack } from 'expo-router'

import brandColour from '@brand/colour'
import jammedStudioStore from '@store/jammedStudioStore'

export default function StudioLayout (props) {
  const { studio } = jammedStudioStore()

  return (
    <Stack screenOptions={{
      title: studio.name,
      headerShown: false,
      headerStyle: {
        backgroundColor: brandColour.secondary
      },
      headerTintColor: brandColour.black,
      headerTitleStyle: {
        fontWeight: 'bold',
        fontFamily: 'Balboa-Condensed',
        fontSize: 26
      },
      headerBackTitleStyle: {
        fontFamily: 'Balboa-Condensed',
        fontSize: 22
      }
    }} />
  )
}
