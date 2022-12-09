import React, { useState } from "react";
import {
    View, 
    StyleSheet,
    Text,
    FlatList,
} from 'react-native';

import LinearGradient from "react-native-linear-gradient";
import BookItem from "../components/BookItem";
import SearchBar from "../components/Search";

import { books } from "../data/books";

export default function CartScreen(props) {

    const [data, setData] = useState(books.filter((book) => {
        if(book.isAddedToCart){
            return book;
        }
    }));

    return (
        <LinearGradient
            style={styles.container}
            colors={['#3EB4BD', '#8ACDDA']}
        >
            <View style={styles.contentContainer} >
                <SearchBar onClickSearchButton={(text) => {
                    setData(books.filter((book) => {
                        if(book.name.startsWith(text.trim()) && book.isAddedToCart){
                            return book
                        }
                    }));
                }}/>
                
                <View style = {{width: '100%', marginVertical: 10, paddingLeft: 15}}>
                    <Text style = {{fontSize: 20, fontWeight: '500', color: 'white', }} >{"* Danh sách đã thêm của bạn"}</Text>
                </View>

                <View style = {styles.listViewBackground} >
                    <FlatList
                        data={data}
                        renderItem = {(item) => {

                            const onClick = () => {
                                props.switchScreenCallBack("PayScreen", "Thanh toán", item.item);
                            }
                            
                            return <BookItem item = {item} onClick = {onClick} isPay = {true} />
                        }}
                    />
                </View>
            </View>
        </LinearGradient >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    contentContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
    listViewBackground: {
        flex: 1,
        width: '100%',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingTop: 30,
        backgroundColor: 'rgba(255,255,255,0.6)',
    }
})