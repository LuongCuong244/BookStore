import React, { useState } from "react";
import {
    View, 
    StyleSheet,
    TouchableOpacity,
    TextInput,
} from 'react-native';

import LinearGradient from "react-native-linear-gradient";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function SearchBar({onClickSearchButton}) {

    const [text, setText] = useState("");

    const onChangeText = (text) => {
        setText(text);
    }

    return (
        <View style = {styles.container} >
            <View style = {styles.searchBar} >
                <Ionicons name="search" size={25} color = {'#A7A7A7'}/>
                <TextInput
                    style = {styles.inputStyle}
                    placeholderTextColor={'#A7A7A7'}
                    placeholder= {"Tìm kiếm"}
                    onChangeText = {onChangeText}
                />
            </View>
            <LinearGradient
                style = {styles.buttonStyle}
                colors = {['rgba(81,255,128,0.7)', '#0096A0']}
                start={{x: 0, y: 0}}
                end = {{x: 1, y: 1}}
            >
                <TouchableOpacity
                    style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}
                    onPress = {() => onClickSearchButton(text)}
                    activeOpacity = {0.5}
                >
                    <Ionicons name="search" size={22} color = {'white'}/>
                </TouchableOpacity>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 40,
        paddingHorizontal: 15,
        marginTop: 15,
        flexDirection: 'row'
    },
    searchBar: {
        flex: 1,
        height: '100%',
        paddingHorizontal: 10,
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.7)',
        flexDirection: 'row',
        borderRadius: 10,
    },
    buttonStyle: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginLeft: 15,
    },
    inputStyle: {
        flex: 1,
        color: 'black',
        fontSize: 18,
        textDecorationLine: 'none',
        top: 3,
    }
})