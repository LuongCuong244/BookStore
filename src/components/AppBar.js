import React from "react";
import {
    StyleSheet, Text, TouchableOpacity, View
} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Feather";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Menu from "./Menu";

export default function AppBar({ currentScreen, title, hasLeading = false, hasBackButton = false, switchScreenCallBack }) {
    return (
        <LinearGradient
            style={styles.appBarStyle}
            colors={['#00FFAA', '#44B6BF']}
        >
            <Text style={styles.textStyle}>{title}</Text>
            {
                currentScreen != "SignInScreen" && (
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity
                            style={styles.buttonIconStyle}
                            activeOpacity={0.7}
                            onPress={() => { }}
                        >
                            <Menu currentScreen={currentScreen} switchScreenCallBack={switchScreenCallBack} />
                        </TouchableOpacity>
                        {
                            currentScreen != "CartScreen" && (
                                <TouchableOpacity
                                    style={styles.buttonIconStyle}
                                    activeOpacity={0.7}
                                    onPress={() => {
                                        switchScreenCallBack("CartScreen", "Giỏ hàng");
                                    }}
                                >
                                    <Icon name="shopping-cart" size={30} color={'white'} />
                                </TouchableOpacity>
                            )
                        }
                    </View>
                )
            }
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    appBarStyle: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 5,
        paddingRight: 10,
    },
    textStyle: {
        flex: 1,
        height: '100%',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 22,
        color: '#00656C',
        paddingTop: 10,
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
    },
    buttonsContainer: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    buttonIconStyle: {
        marginHorizontal: 8,
    },
    backButtonStyle: {
        width: 40,
        height: 40,
    }
})