import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { moderateScale } from 'react-native-size-matters';
// import Spinner from "native-base"


/* Usage: <CustomButton 
     buttonStyles // styles to be applied to the button
     label // label to be displayed on the button
     icon // icon to be displayed on the button
     iconName // icon name to be displayed on the button
     loading // boolean to indicate if the button should be loading (will display a spinner and turn grey)
     onPress // function to be called when the button is pressed
     disabled // boolean to indicate if the button should be disabled
 /> */

export default function CustomButton(props) {
    return (
        <TouchableOpacity
            style={{
                ...styles.customButton,
                backgroundColor: props.loading
                    ? "grey"
                    : props.disabled
                        ? "grey"
                        : "#FC647C",
                ...props.buttonStyles,
            }}
            onPress={props.onPress && !props.disabled ? props.onPress : () => { }}
        >
            <Text
                style={{
                    color: props.textColor ? props.textColor : "white",
                    fontSize: 18,
                    fontFamily: "Inter-600",
                    ...props.labelStyles,
                }}
            >
                {props.label}
            </Text>
            {/* {props.loading && (
                <Spinner
                    style={{
                        marginLeft: 5,
                        marginTop: 3,
                    }}
                    size="small"
                    color={props.loadingIconColor ? props.loadingIconColor : "white"}
                />
            )}  I'm not installing native base in this project yet */}
            {props.iconName && (
                <Icon
                    style={{ color: "white", marginLeft: 10, ...props.iconStyles, }}
                    name={props.iconName}
                />
            )}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    customButton: {
        height: 50,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        marginTop: moderateScale(15),
        flexDirection: "row",
    },
});
