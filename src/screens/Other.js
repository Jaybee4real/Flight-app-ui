import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Other() {
    return (
        <View style={styles.container}>
            <Text>Hello from the other screen</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: 'white',
    }   
})
