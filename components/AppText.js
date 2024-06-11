import * as React from 'react'
import { Text, StyleSheet } from 'react-native'
import brandColour from '@brand/colour'

import PropTypes from 'prop-types'

export const AppText = (props) => {
  const styles = StyleSheet.create({
    jammedText: {
      fontFamily: 'Balboa-Condensed',
      fontSize: 19,
      color: brandColour.text
    }
  })

  return (
    <Text style={{ ...styles.jammedText, ...props.styles }}>{props.children}</Text>
  )
}

export const AppTitleText = (props) => {
  const styles = StyleSheet.create({
    jammedText: {
      fontFamily: 'Moret-Extrabold',
      fontSize: 36,
      color: brandColour.text
    }
  })

  return (
    <Text style={{ ...styles.jammedText, ...props.styles }}>{props.children}</Text>
  )
}

export const AppSubtitleText = (props) => {
  const styles = StyleSheet.create({
    jammedText: {
      fontFamily: 'Moret-Extrabold',
      fontSize: 28,
      color: brandColour.text
    }
  })

  return (
    <Text style={{ ...styles.jammedText, ...props.styles }}>{props.children}</Text>
  )
}

export const AppSuperText = (props) => {
  const styles = StyleSheet.create({
    jammedText: {
      fontFamily: 'Balboa-Condensed',
      fontSize: 16,
      color: brandColour.text
    }
  })

  return (
    <Text style={{ ...styles.jammedText, ...props.styles }}>{props.children}</Text>
  )
}

export const AppOverImageText = (props) => {
  const styles = StyleSheet.create({
    jammedText: {
      fontFamily: 'Balboa-Condensed',
      fontSize: 22,
      color: brandColour.white,
      textShadowColor: brandColour.black,
      textShadowRadius: 5
    }
  })

  return (
    <Text style={{ ...styles.jammedText, ...props.styles }}>{props.children}</Text>
  )
}

export const AppOverImageTitle = (props) => {
  const styles = StyleSheet.create({
    jammedText: {
      fontFamily: 'Moret-Extrabold',
      fontSize: 28,
      color: brandColour.white,
      textShadowColor: brandColour.black,
      textShadowRadius: 5
    }
  })

  return (
    <Text style={{ ...styles.jammedText, ...props.styles }}>{props.children}</Text>
  )
}

export const AppNavText = (props) => {
  const styles = StyleSheet.create({
    jammedText: {
      fontFamily: 'Moret-Extrabold',
      fontSize: 20,
      color: brandColour.black
    }
  })

  return (
    <Text style={{ ...styles.jammedText, ...props.styles }}>{props.children}</Text>
  )
}

AppText.propTypes = {
  styles: PropTypes.object,
  children: PropTypes.any
}
AppTitleText.propTypes = {
  styles: PropTypes.object,
  children: PropTypes.any
}
AppSubtitleText.propTypes = {
  styles: PropTypes.object,
  children: PropTypes.any
}
AppSuperText.propTypes = {
  styles: PropTypes.object,
  children: PropTypes.any
}
AppOverImageText.propTypes = {
  styles: PropTypes.object,
  children: PropTypes.any
}
AppOverImageTitle.propTypes = {
  styles: PropTypes.object,
  children: PropTypes.any
}
AppNavText.propTypes = {
  styles: PropTypes.object,
  children: PropTypes.any
}
