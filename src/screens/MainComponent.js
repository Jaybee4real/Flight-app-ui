import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, StatusBar, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Icon from 'react-native-vector-icons/Feather';

////Import Screens//
import Explore from './Explore';
import Flights from './Flights';
import Hotels from './Hotels';
import Places from './Places';
import Other from './Other';

///Import Custom Components ///
import CustomTabBar from '../components/CustomTabBar';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import CustomSearchbar from '../components/CustomSearchbar';
const TopTabs = createMaterialTopTabNavigator();

const { height, width } = Dimensions.get("screen")
export default function MainComponent({ navigation, ...props }) {





    

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <StatusBar barStyle="light-content" />
            <View style={styles.headingContainer}>
                <View style={styles.locationContainer}>
                    <Icon
                        name="map-pin"
                        light
                        style={styles.locationIcon}
                    />
                    <Text style={styles.location}>London Airport</Text>
                </View>
                <Image source={require('../assets/images/randomuser.jpeg')} style={styles.profileImage} />
            </View>
            <View style={styles.searchContainer}>
                <CustomSearchbar style={{ width: "80%" }} />
                <TouchableOpacity style={styles.filterContainer}>
                    <Icon
                        name="sliders"
                        light
                        style={styles.filterIcon}
                    />
                </TouchableOpacity>
            </View>
            <TopTabs.Navigator
                backBehavior="none"
                initialRouteName="Flights"
                tabBar={(props) => <CustomTabBar {...props} />}
                tabBarOptions={{
                    scrollEnabled: true,
                    indicatorStyle: {
                        backgroundColor: "transparent",
                    },
                }}
            >
                <TopTabs.Screen name="Explore" component={Explore} />
                <TopTabs.Screen name="Flights" component={Flights} />
                <TopTabs.Screen name="Hotels" component={Hotels} />
                <TopTabs.Screen name="Places" component={Places} />
                <TopTabs.Screen name="Other" component={Other} />
            </TopTabs.Navigator>
        </ScrollView>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        flexGrow: 1,
        backgroundColor: "white"
    },
    headingContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: moderateScale(15),
        marginBottom: moderateScale(15)
    },
    locationContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    location: {
        fontSize: moderateScale(16),
        fontFamily: "Inter-600",
    },
    profileImage: {
        height: moderateScale(35),
        width: moderateScale(35),
        borderRadius: moderateScale(35)
    },
    searchContainer: {
        marginHorizontal: moderateScale(20),
        marginVertical: verticalScale(20),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    locationIcon: {
        fontSize: moderateScale(15),
        marginRight: 5,
        color: "#FC647C"
    },
    filterContainer: {
        height: moderateScale(42),
        width: moderateScale(42),
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    filterIcon: {
        fontSize: moderateScale(17),
        color: "grey",
    }
})