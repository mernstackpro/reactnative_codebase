import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import brandColour from '@brand/colour'

import PropTypes from 'prop-types'

import { AppText } from '@components/AppText'

export const AppButton = (props) => {
  return (
    <View style={{ ...styles.jammedButtonCommon, ...styles.jammedButtonLarge, ...props.styles }}>
      <AppText styles={{ color: brandColour.white }}>{props.children}</AppText>
    </View>
  )
}

export const AppSmallButton = (props) => {
  return (
    <View style={{ ...styles.jammedButtonCommon, ...styles.jammedButtonSmall, ...props.styles }}>
      <AppText styles={{ color: brandColour.white }}>{props.children}</AppText>
    </View>
  )
}

const styles = StyleSheet.create({
  jammedButtonCommon: {
    backgroundColor: brandColour.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 0,
    borderRightColor: brandColour.black,
    borderBottomColor: brandColour.black
  },
  jammedButtonLarge: {
    padding: 10,
    marginVertical: 10,

    borderRightWidth: 8,
    borderBottomWidth: 8,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10
  },
  jammedButtonSmall: {
    padding: 6,
    marginVertical: 6,

    borderRightWidth: 4,
    borderBottomWidth: 4,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5
  }
})

AppButton.propTypes = {
  styles: PropTypes.object,
  children: PropTypes.any
}

AppSmallButton.propTypes = {
  styles: PropTypes.object,
  children: PropTypes.any
}
