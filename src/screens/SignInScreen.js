import React, { useState } from "react";
import {
    StyleSheet,
    TouchableOpacity,
    View,
    ScrollView,
    KeyboardAvoidingView,
    Dimensions,
    Text,
    TextInput,
    BackHandler
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";

const HEIGHT_SCREEN = Dimensions.get("window").height;

export default function SignInScreen(props) {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const onPressRightButton = () => {
        props.navigation.navigate("HomeScreen");
    }

    const onPressLeftButton = () => {
        //this.props.navigation.navigate("LogUp");
    }

    return (
        <ScrollView
            contentContainerStyle={{ flex: 1 }}
            keyboardShouldPersistTaps="handled"
        >
            <View style={styles.background} >
                <KeyboardAvoidingView
                    behavior={'padding'}
                    keyboardVerticalOffset={20}
                    style={{ flex: 1, alignItems: 'center', marginTop: 150 }}
                >
                    {/* <InputForm
                        leftButtonLabel={"Đăng ký"}
                        rightButtonLabel={"Đăng nhập"}
                        placeholderAddressInput={"Nhập số điện thoại hoặc email"}
                        placeholderPasswordInput={"Nhập mật khẩu của bạn"}
                        onPressRightButton={onPressRightButton}
                        onPressLeftButton={onPressLeftButton}
                    /> */}
                    <View style={{ width: '100%', alignItems: 'center' }} >
                        <View style={styles.textInputContainer} >
                            <Icon name="user" size={33.39} color = {'white'}/>
                            <TextInput
                                style={styles.inputStyle}

                                keyboardType='visible-password'
                                placeholder={"Nhập số điện thoại hoặc email"}
                            //onChangeText={onChangeTextAddress}
                            />
                        </View>

                        <View style={styles.textInputContainer} >
                            <Icon name="lock" size={33.39} color = {'white'}/>
                            <TextInput
                                style={styles.inputStyle}
                                secureTextEntry={true}
                                placeholder={"Nhập mật khẩu"}
                            // onChangeText={onChangeTextPassword}
                            />
                        </View>

                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={[
                                    styles.buttonStyle,
                                    {
                                        backgroundColor: 'rgba(51,75,76,0.75)'
                                    }
                                ]}
                                activeOpacity={0.7}
                            //onPress={onPressLeftButton}
                            >
                                <Text style={{ fontSize: 18, color: 'white' }} >Đăng ký</Text>
                            </TouchableOpacity>

                            <View style={{ width: '6%' }} ></View>

                            <TouchableOpacity
                                style={[
                                    styles.buttonStyle,
                                    {
                                        backgroundColor: 'rgba(0,230,132,0.75)'
                                    }
                                ]}
                                activeOpacity={0.7}
                            //onPress={checkValidValue}
                            >
                                <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }} >Đăng nhập</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </View >
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    background: {
        height: HEIGHT_SCREEN,
        alignItems: 'center',
        flexDirection: 'column-reverse',
        paddingBottom: 25,
    },
    socialNetworkButton: {
        width: '85%',
        height: 40,
        marginVertical: "2%",
    },
    socialNetworkLinear: {
        flex: 1,
        borderRadius: 100,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10,
    },
    iconContainer: {
        width: 35,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    socialNetworkText: {
        textAlign: 'center',
        fontSize: 18,
        color: 'white',
        marginLeft: "5%",
    },
    forgotPassword: {
        marginBottom: 30,
        fontStyle: "italic",
        fontSize: 18,
        color: "rgba(149,176,177,0.7)",
        textDecorationLine: "underline"
    },
    buttonContainer: {
        flexDirection: 'row',
        marginVertical: 15,
        width: '85%',
        height: 40,
    },
    buttonStyle: {
        height: '100%',
        width: '47%',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#95D1D3',
        borderRadius: 100,
        borderWidth: 2,
    },
    textInputContainer: {
        height: 50,
        width: '85%',
        borderRadius: 10,
        borderColor: "#005C6E",
        borderWidth: 1,
        backgroundColor: 'rgba(149,176,177,0.7)',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 13,
    },
    inputStyle: {
        fontSize: 17,
        color: '#324B4C',
        flex: 1,
        marginLeft: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginBottom: 15,
        marginTop: 5,
        width: '85%',
        height: 40,
        alignItems: 'center',
    },
    buttonStyle: {
        height: '100%',
        width: '47%',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#95D1D3',
        borderRadius: 100,
        borderWidth: 2,
    },
    textInputContainer: {
        height: 50,
        marginBottom: 10,
        width: '85%',
        borderRadius: 10,
        borderColor: "#005C6E",
        borderWidth: 1,
        backgroundColor: 'rgba(149,176,177,0.7)',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 13,
    },
    inputStyle: {
        fontSize: 17,
        color: '#324B4C',
        flex: 1,
        marginLeft: 10,
    },
})