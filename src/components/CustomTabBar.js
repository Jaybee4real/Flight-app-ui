import { useTheme } from "@react-navigation/native";
import React, { useRef } from "react";
import { StyleSheet, Text, ScrollView, TouchableOpacity, View } from "react-native";
import { moderateScale } from "react-native-size-matters";

export default function CustomTabBar({
    state,
    descriptors,
    navigation,
    position,
    height,
    width,
    tabBarStyles,
    ...props
}) {
    const tabPicker = useRef();
    const routes = state?.routes;

    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            ref={tabPicker} horizontal
            style={{
                paddingLeft: moderateScale(5),
                maxHeight: 40,
            }}>
            {routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const isFocused = state.index === index;
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;
                ////Handle the tab bar touch events
                const onPress = () => {
                    const event = navigation.emit({
                        type: "tabPress",
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                //Design Tabbar
                return (
                    <TouchableOpacity
                        key={label.toString()}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={() => {
                            onPress();
                            tabPicker.current.scrollTo({
                                x: width * index,
                                animated: true,
                            });
                        }}
                        style={{
                            ...styles.tabStyles,
                            ...tabBarStyles,
                        }}
                    >
                        <Text
                            style={{
                                color: isFocused ? "#FC647C" : "black",
                                fontFamily: "Inter-600",
                                fontSize: moderateScale(15)
                            }}
                        >
                            {label}
                        </Text>
                        {isFocused && <View style={styles.focusedIndicator} />}
                    </TouchableOpacity>
                );
            })}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    tabStyles: {
        fontSize: moderateScale(20),
        marginHorizontal: 15,
        flex: 1,
    },
    focusedIndicator: {
        height: 5,
        width: 5,
        borderRadius: 2.5,
        backgroundColor: "#FC647C",
        alignSelf: "center",
        marginTop: 2
    }
});
