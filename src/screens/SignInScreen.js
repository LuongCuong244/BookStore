import React, { useState } from "react";
import {
    StyleSheet,
    TouchableOpacity,
    View,
    ScrollView,
    Dimensions,
    Text,
    TextInput,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";
import AppBar from "../components/AppBar";

const HEIGHT_SCREEN = Dimensions.get("window").height;

export default function SignInScreen(props) {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const onChangeTextUserName = (text) => {
        setUserName(text);
    }

    const onChangeTextPassword = (text) => {
        setPassword(text);
    }

    const onPressButton = () => {
        if(!userName || !password ){ // 1 trường nào đó bỏ trống
            return Alert.alert("Lỗi", "Bạn phải điền tất cả các trường!");
        }
        props.switchScreenCallBack('HomeScreen', "Trang chủ");
    }

    return (
        <ScrollView
            contentContainerStyle={{ flex: 1 }}
            keyboardShouldPersistTaps="handled"
        >
            <LinearGradient
                style={styles.container}
                colors={['#3EB4BD', '#8ACDDA']}
            >
                <AppBar currentScreen = {props.currentScreen} title={"Đăng nhập"} />
                <View style={styles.contentContainer} >
                    <View style={styles.textInputContainer} >
                        <Icon name="user" size={30} color={'#B6B6B6'} />
                        <TextInput
                            style={styles.inputStyle}
                            keyboardType='visible-password'
                            placeholder={"Nhập số điện thoại hoặc email"}
                            onChangeText={onChangeTextUserName}
                        />
                    </View>

                    <View style={styles.textInputContainer} >
                        <Icon name="lock" size={30} color={'#B6B6B6'} />
                        <TextInput
                            style={styles.inputStyle}
                            secureTextEntry={true}
                            placeholder={"Nhập mật khẩu"}
                            onChangeText={onChangeTextPassword}
                        />
                    </View>

                    <LinearGradient
                        style = {styles.buttonStyle}
                        colors = {['#43E28E', '#37B772']}
                    >
                        <TouchableOpacity
                            style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}
                            activeOpacity={0.7}
                            onPress={onPressButton}
                        >
                            <Text style={styles.textButton} >Đăng nhập</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            </LinearGradient >
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    contentContainer: {
        width: '100%',
        alignItems: 'center',
        marginTop: 150
    },
    textInputContainer: {
        height: 50,
        width: '85%',
        borderRadius: 10,
        borderColor: "rgba(112,112,112,0.45)",
        borderWidth: 1,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 13,
        marginTop: 10
    },
    inputStyle: {
        fontSize: 17,
        color: '#324B4C',
        flex: 1,
        marginLeft: 10,
    },
    buttonStyle: {
        width: 170,
        height: 45,
        borderRadius: 12,
        marginTop: 20,
    },
    textButton: {
        fontSize: 21,
        color: 'white',
        fontWeight: 'bold'
    }
})