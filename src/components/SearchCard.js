import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import CustomButton from './CustomButton'

export default function SearchCard() {
    const [passenggerNumber, setPassenggerNumber] = useState(2)


    const handleCounterChange = (arg) => {
        arg === "increment" && setPassenggerNumber(passenggerNumber + 1)
        arg === "decrement" && setPassenggerNumber(passenggerNumber - 1)
    }
    return (
        <View style={styles.container}>
            <View style={styles.rowContainer}>
                <View style={{ alignItems: "flex-start" }}>
                    <Text style={styles.titleText}>From</Text>
                    <Text style={styles.detailText}>LON</Text>
                    <Text style={styles.titleText}>London Airport</Text>
                </View>
                <View style={{ alignItems: "flex-end" }}>
                    <Text style={styles.titleText}>To</Text>
                    <Text style={styles.detailText}>DXB</Text>
                    <Text style={styles.titleText}>Dubai Airport</Text>
                </View>
            </View>
            <View style={styles.line}>
                <Icon name="airplane" style={styles.airplane} />
            </View>
            <View style={styles.rowContainer}>
                <View style={{ alignItems: "flex-start" }}>
                    <Text style={styles.titleText}>Date of departure</Text>
                    <Text style={styles.detailText}>Thu, 18 Oct 2021</Text>
                </View>
                <View style={{ alignItems: "flex-end" }}>
                    <Text style={styles.titleText}>Passengger</Text>
                    <View style={styles.passengerNumber}>
                        <Text
                            style={{ ...styles.detailText, fontSize: moderateScale(26) }}
                            onPress={() => handleCounterChange("decrement")}
                        >-</Text>
                        <Text style={{ ...styles.detailText }}>{passenggerNumber}</Text>
                        <Text
                            style={{ ...styles.detailText, fontSize: moderateScale(24), marginTop: moderateScale(-.5) }}
                            onPress={() => handleCounterChange("increment")}
                        >+</Text>
                    </View>
                </View>
            </View>
            <CustomButton label="Seeach Flight" />
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "white",
        borderRadius: 10,
        shadowColor: "#ffffff",
        marginVertical: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 2,
        padding: 15
    },
    titleText: {
        fontSize: moderateScale(13),
        lineHeight: moderateScale(15),
        fontFamily: "Inter-700",
        color: "grey"
    },
    detailText: {
        fontSize: moderateScale(16),
        fontFamily: "Inter-700",
        letterSpacing: moderateScale(0.3),
        marginVertical: moderateScale(3)
    },
    rowContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    line: {
        height: moderateScale(1),
        position: "relative",
        width: "100%",
        backgroundColor: "#e5e5e5e5",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: moderateScale(40)
    },
    airplane: {
        transform: [{ rotateZ: "90deg" }],
        color: "#FC647C",
        position: "relative",
        bottom: 0,
        fontSize: moderateScale(45),
        width: moderateScale(45),
    },
    passengerNumber: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: moderateScale(70),
    }
})