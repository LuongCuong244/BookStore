import React, { useState } from "react";
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    TextInput,
    Alert,
} from 'react-native';

import LinearGradient from "react-native-linear-gradient";

export default function ContactScreen(props) {

    const [name, setName] = useState("");
    const [numberPhone, setNumberPhone] = useState("");
    const [message, setMessage] = useState("");

    return (
        <LinearGradient
            style={styles.container}
            colors={['#3EB4BD', '#8ACDDA']}
        >
            <View style={{ width: '100%', marginVertical: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: '500', color: 'white', }} >{"* Điền form sau để liên hệ với chúng tôi"}</Text>
            </View>

            <Text style={styles.title} >{"Họ tên"}</Text>
            <View style={styles.backgroundInput} >
                <TextInput
                    style={styles.textInput}
                    placeholderTextColor={'gray'}
                    placeholder={"Nhập tên của bạn"}
                    onChangeText = {(text) => {
                        setName(text);
                    }}
                >{name}</TextInput>
            </View>

            <Text style={styles.title} >{"Số điện thoại"}</Text>
            <View style={styles.backgroundInput} >
                <TextInput
                    style={styles.textInput}
                    placeholderTextColor={'gray'}
                    placeholder={"Nhập số điện thoại"}
                    onChangeText = {(text) => {
                        setNumberPhone(text);
                    }}
                >{numberPhone}</TextInput>
            </View>

            <Text style={styles.title} >{"Thông tin muốn liên hệ"}</Text>
            <View style={styles.backgroundInput} >
                <TextInput
                    style={styles.textInput}
                    placeholderTextColor={'gray'}
                    placeholder={"Viết gì đó ở đây"}
                    onChangeText = {(text) => {
                        setMessage(text);
                    }}
                >{message}</TextInput>
            </View>

            <View style = {{width: '100%', alignItems: 'center'}}>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    activeOpacity = {0.7}
                    onPress = {() => {
                        if(!numberPhone || !name || !message){ // 1 trường nào đó bỏ trống
                            return Alert.alert("Lỗi", "Bạn phải điền tất cả các trường!");
                        }
                        setMessage("");
                        Alert.alert("Thành công", "Cảm ơn bạn đã gửi tin nhắn, chúng tôi sẽ sớm liên hệ với bạn!");
                    }}
                >
                    <Text style = {styles.buttonText} >{"Gửi tin nhắn"}</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
    },
    title: {
        fontSize: 18,
        color: 'rgb(20,20,10)',
        marginBottom: 5,
        marginLeft: 5,
        letterSpacing: 0.5,
    },
    backgroundInput: {
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 10,
        height: 50,
        justifyContent: 'center',
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    textInput: {
        flex: 1,
        fontSize: 20,
        color: 'black',
    },
    buttonStyle: {
        backgroundColor: 'blue',
        width: 130,
        height: 45,
        marginTop: 5,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
    }
})