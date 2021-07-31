import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Hotels() {
    return (
        <View style={styles.container}>
            <Text>Hello from the hotels screen</Text>
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
