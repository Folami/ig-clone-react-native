import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SignupForm from '../components/login/SignupForm'

const INSTAGRAM_LOGO = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/150px-Instagram_logo_2016.svg.png'

const SignupScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={{ uri: INSTAGRAM_LOGO, height:100, width:100 }}  />
            </View>
            <SignupForm />
        </View>
    )
}

export default SignupScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 50,
        paddingHorizontal: 12,
    },

    logoContainer: {
        alignItems: 'center',
        marginTop: 60,
    },
})