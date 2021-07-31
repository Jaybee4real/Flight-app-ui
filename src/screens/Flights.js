import React from 'react'
import { View, Text, StyleSheet, Dimensions, StatusBar } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import SearchCard from "../components/SearchCard"


const { height, width } = Dimensions.get("screen")
export default function Flights() {
    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="dark-content"
                backgroundColor="white"
            />
            <SearchCard />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        height,
        paddingHorizontal: moderateScale(20),
        backgroundColor: "white"
    }
})
