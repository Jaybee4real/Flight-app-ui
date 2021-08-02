import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Dimensions, StatusBar, FlatList, ActivityIndicator } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import MiniCard from '../components/MiniCard'
import SearchCard from "../components/SearchCard"


const { height, width } = Dimensions.get("screen")
export default function Flights() {
    const [loading, setLoading] = useState(false)
    const [acessToken, setAccessToken] = useState("")
    const [flights, setFlights] = useState([])

    const getFlights = (token) => {
        setLoading(true)
        fetch("https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=SYD&destinationLocationCode=BKK&departureDate=2021-11-01&adults=1&nonStop=false&max=250", {
            method: 'GET',
            headers: {
                "Authorization": "Bearer " + token
            },
            redirect: 'follow'
        })
            .then(response => response.json())
            .then(result => setFlights(result.data))
            .catch(error => console.log('error', error))
            .finally(() => setLoading(false));
    }

    const fetchToken = async () => {
        setLoading(true)
        var details = {
            'client_id': '2N6vop40MWsnTMgVqQFQI5Uqt1mlokm5',
            'client_secret': '7yUIWXW7ptUTJKbg',
            'grant_type': 'client_credentials'
        };
        var formBody = [];
        for (var property in details) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
        await fetch("https://test.api.amadeus.com/v1/security/oauth2/token", {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: formBody,
            redirect: 'follow'
        }).then(response => response.json())
            .then(result => {
                // console.log(result.data[0])
                getFlights(result.access_token)
            })
            .catch(error => {
                console.log('error', error)
                setLoading(false)
            })
    }

    useEffect(() => {
        fetchToken()
    }, [])

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="dark-content"
                backgroundColor="white"
            />
            <SearchCard />
            <FlatList
                data={flights}
                style={{ flex: 1, flexGrow: 1, height }}
                nestedScrollEnabled
                ListEmptyComponent={() => loading ?
                    <ActivityIndicator size="large" color="#FC647C" />
                    : <Text style={styles.errorText}>Something Went Wrong Fetching Flights</Text>
                }
                renderItem={({ item, index }) => <MiniCard key={flights[0].offerId} item={item} flight={flights[0]} />}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        height,
        paddingHorizontal: moderateScale(20),
        backgroundColor: "white"
    },
    errorText: {
        fontFamily: "Inter-600",
        fontSize: moderateScale(15),
        textAlign: "center",
        paddingHorizontal: moderateScale(20)
    }
})
