import * as React from 'react'
import { Text, StyleSheet, View, Image, Pressable } from 'react-native'
import brandColour from '@brand/colour'
import PropTypes from 'prop-types'
import { router } from 'expo-router'

export const Header = (props) => {
  const styles = StyleSheet.create({
    view: {
      width: '100%',
      backgroundColor: brandColour.secondary,
      height: 40,
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop: 0
    },
    headerName: {
      fontWeight: 'bold',
      fontFamily: 'Balboa-Condensed',
      fontSize: 26
    },
    subView1: {
      width: '30%',
      flexDirection: 'row',
      alignItems: 'center'
    },
    subView2: {
      width: '40%',
      alignItems: 'center',
      marginTop: -10
    },
    titleText: {
      fontFamily: 'Balboa-Condensed',
      fontSize: 22,
      marginTop: -10
    },
    imageStyle: {
      height: 20,
      width: 20,
      resizeMode: 'contain',
      marginTop: -10
    }
  })
  return (
        <View style={styles.view}>
            <Pressable onPress={() => router.back()} style={styles.subView1}>
                <Image source={require('../assets/icons/left-arrow.png')} style={styles.imageStyle} />
                <Text style={styles.titleText}>Studios</Text>
            </Pressable>
            <View style={styles.subView2}>
                <Text style={styles.headerName}>{props.name}</Text>
            </View>
            <View style={styles.subView1}>
            </View>
        </View>
  )
}

Header.propTypes = {
  name: PropTypes.string.isRequired
}
