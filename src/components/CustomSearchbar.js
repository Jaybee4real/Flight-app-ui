import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import Icon from 'react-native-vector-icons/FontAwesome5'

export default function CustomSearchbar({ inputStyles, style, onFocus, autoFocus, ...props }) {
    const navigation = useNavigation()
    return (
        <TouchableOpacity style={{ ...styles.container, ...style }} onPress={() => navigation.push("Search")}>
            <TextInput autoFocus={autoFocus === true ? true : false} onFocus={() => onFocus?.()} labe="Label" style={{ ...styles.input, ...inputStyles }} />
            <Icon style={styles.icon} name="search" />
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        position: "relative",
        flexDirection: "row",
        alignItems: "center",
    },
    icon: {
        position: "absolute",
        right: 15,
        color: "#a9a9a9",
        fontSize: moderateScale(15)
    },
    input: {
        height: moderateScale(42),
        backgroundColor: '#f5f5f5',
        borderRadius: 15,
        width: "100%",
        paddingVertical: 10,
        paddingHorizontal: 20
    }
})