import React, { useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { color } from 'react-native-reanimated'
import { moderateScale, scale } from 'react-native-size-matters'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { formatTime } from '../../helpers'

export default function MiniCard({ item, ...props }) {


    const { itineraries, price, travelerPricings } = item
    return (
        <View style={styles.container}>
            <Text style={styles.title}>London Airport</Text>
            <View style={styles.topContainer}>
                <View style={styles.topContainerInner}>
                    <View style={styles.destinationBox}>
                        <Text style={styles.greyText}>{itineraries[0].segments[0].departure.iataCode}</Text>
                        <Text style={styles.greyText}>{formatTime(itineraries[0].segments[0].departure.at)}</Text>
                        <Text style={styles.price}>{price.currency + " " + price.total}</Text>
                    </View>
                    <View style={styles.traceLine}>
                        <Icon name="radio-button-checked" color={"#e5e5e5e5"} />
                        <Text
                            style={styles.traceLineText}
                            numberOfLines={1}
                            ellipsizeMode="clip"
                        >———————</Text>
                        <Icon name="circle" color={"#FC647C"} />
                    </View>
                    <View style={styles.destinationBox}>
                        <Text style={styles.greyText}>{itineraries[0].segments[0].arrival.iataCode}</Text>
                        <Text style={styles.greyText}>{formatTime(itineraries[0].segments[0].arrival.at)}</Text>
                        <Text style={styles.remaining}>14 Remains</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.imageContainer}>
                    <Image
                        resizeMode="contain"
                        style={styles.image}
                        source={require("../assets/images/british_airways.png")}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.bottomContainer}>
                <Text style={styles.cabinText}>
                    {travelerPricings[0].fareDetailsBySegment[0].cabin}
                </Text>
                <Text style={styles.greyText}>2Hours 18 minutes</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={{ fontFamily: "Inter-600", color: "white" }}>Book</Text>
                </TouchableOpacity>
            </View>
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
    topContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%"
    },
    topContainerInner: {
        flexDirection: "row",
        maxWidth: "80%"
    },
    title: {
        fontFamily: "Inter-600",
        fontSize: moderateScale(15.5),
    },
    destinationBox: {
        marginVertical: 10
    },
    greyText: {
        fontSize: moderateScale(12),
        lineHeight: moderateScale(15),
        fontFamily: "Inter-700",
        color: "grey",
        marginVertical: 2
    },
    traceLine: {
        flexDirection: "row",
        minWidth: moderateScale(70),
        transform: [{ translateY: -moderateScale(25) }],
        justifyContent: "space-between",
        marginRight: scale(5),
        alignItems: "center",
    },
    price: {
        fontSize: moderateScale(14),
        fontFamily: "Inter-700",
        marginVertical: moderateScale(15)
    },
    traceLineText: {
        letterSpacing: 10,
        fontSize: moderateScale(10),
        maxWidth: moderateScale(65),
        color: "#e5e5e5e5",
        fontFamily: "Inter-600",
        marginTop: -2
    },
    remaining: {
        fontFamily: "Inter-600",
        fontSize: moderateScale(13),
        marginVertical: moderateScale(12),
        color: "#FC647C"
    },
    imageContainer: {
        // marginLeft: "auto",
        height: moderateScale(90),
        backgroundColor: "white",
        borderRadius: 10,
        shadowColor: "#ffffff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 2,
    },
    cabinText: {
        fontFamily: "Inter-600",
        color: "#FC647C",
        fontSize: moderateScale(13),
        textTransform: "capitalize"
    },
    image: {
        height: moderateScale(90),
        width: moderateScale(60),
        borderRadius: 10,
    },
    bottomContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: moderateScale(5)
    },
    button: {
        height: moderateScale(25),
        backgroundColor: "#FC647C",
        width: moderateScale(70),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 7
    }
})
