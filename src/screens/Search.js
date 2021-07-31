import React from 'react'
import { View, Text, StyleSheet, StatusBar, FlatList } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import CustomSearchbar from '../components/CustomSearchbar'

export default function Search() {
    return (
        <View style={styles.container}>
            <CustomSearchbar autoFocus={true}/>
            <FlatList  />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: "white",
        paddingTop: StatusBar.currentHeight / 2,
        paddingHorizontal: moderateScale(15)
    }
})
