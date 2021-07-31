import React from 'react'
import { View, Text, Image, Dimensions, StyleSheet, SafeAreaView } from 'react-native'

const { height, width } = Dimensions.get("screen")
export default function LoadingScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={require('../assets/images/splash.png')}
                style={styles.image}
            />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        height: height,
        width: width,
        alignItems: "center",
        justifyContent: "center",
    },
})