import React from "react";
import {
    View,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity,
} from 'react-native';

import LinearGradient from "react-native-linear-gradient";
import { formatNumberToString } from "../converter";

export default function BookItem({ item: {item, index}, onClick , isPay = false}){
    return (
        <View style = {styles.container} >
            <View style = {styles.divider} />
            <View style = {styles.content} >
                <Image style = {styles.image} resizeMode = 'center' source = {{uri: item.cover}}/>
                <View style = {styles.detail} >
                    <View style = {styles.bookDetail} >
                        <View style = {styles.row} >
                            <Text style = {styles.bookNameTitle} >{"Tên sách: "}</Text>
                            <Text style = {styles.bookNameStyle} >{item.name}</Text>
                        </View>
                        <View style = {styles.row} >
                            <Text style = {styles.bookAuthorTitle} >{"Tác giả: "}</Text>
                            <Text style = {styles.bookAuthorStyle} >{item.author}</Text>
                        </View>
                    </View>
                    <View style = {styles.bottomContainer} >
                        <View style = {styles.row}>
                            <Text style = {styles.bookPriceTitle} >{"Giá: "}</Text>
                            <Text style = {styles.bookPriceStyle} >{`${formatNumberToString(item.price)} đ`}</Text>
                        </View>
                        <LinearGradient
                            style = {styles.buttonStyle}
                            colors={item.isAddedToCart ? ['#00D98A', '#01BF00'] : ['#BDBDBD', '#939393']}
                        >
                            <TouchableOpacity 
                                onPress={onClick}
                                style = {{justifyContent: 'center', alignItems: 'center', flex: 1}}
                                activeOpacity = {0.7}
                            >
                                <Text style = {styles.textButton} >{item.isAddedToCart ? isPay ? "Thanh toán" : "Bỏ thêm" : "Thêm"}</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 10,
        flexDirection: 'column',
    },
    divider: {
        backgroundColor: 'white',
        width: '100%',
        height: 0.5,
    },
    content: {
        width: '100%',
        flexDirection: 'row',
        marginVertical: 15,
    },
    detail: {
        flex: 1,
        height: 100 * 1.36,
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    image: {
        width: 100,
        height: 100 * 1.36,
    },
    bookDetail: {
        flex: 1,
        flexDirection: 'column',
    },
    row: {
        flexDirection: 'row',
        marginTop: 5,
    },
    bookNameTitle: {
        fontSize: 20,
        color: '#5C5C5C',
        fontWeight: 'bold',
    },
    bookNameStyle: {
        flex: 1,
        fontSize: 20,
        color: '#000000',
    },
    bookAuthorTitle: {
        fontSize: 18,
        color: '#5C5C5C',
    },
    bookAuthorStyle: {
        flex: 1,
        fontSize: 18,
        color: '#000000',
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    bookPriceTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#00516E',
    },
    bookPriceStyle: {
        fontSize: 22,
        color: '#00516E',
    },
    buttonStyle: {
        height: 35,
        width: 85,
        borderRadius: 10,
    },
    textButton: {
        color: 'white',
        fontSize: 14,
        fontWeight: '600'
    },
});