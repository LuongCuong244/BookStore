import React, { useState } from "react";
import {
    View, 
    StyleSheet,
    Image,
    FlatList,
    Text
} from 'react-native';

import LinearGradient from "react-native-linear-gradient";
import BookItem from "../components/BookItem";
import SearchBar from "../components/Search";

import { books } from "../data/books";

export default function ProductScreen(props) {

    const [data, setData] = useState(books);

    return (
        <LinearGradient
            style={styles.container}
            colors={['#3EB4BD', '#8ACDDA']}
        >
            <View style={styles.contentContainer} >
                <SearchBar onClickSearchButton={(text) => {
                    setData(books.filter((book) => {
                        return book.name.normalize().startsWith(text.trim().normalize());
                    }));
                }}/>
                <Image 
                    source={{uri: 'https://bizweb.dktcdn.net/100/386/441/themes/869880/assets/slider_1.jpg?1658716179964'}} 
                    style = {{width: '95%', height: 100, marginVertical: 10}}
                    resizeMode = {"cover"}
                />
                <Text style = {{fontSize: 20, marginVertical: 5, color: 'white', fontWeight: 'bold', letterSpacing: 0.5}} >{"Tất cả sản phẩm"}</Text>
                <View style = {styles.listViewBackground} >
                    <FlatList
                        data={data}
                        renderItem = {(item) => {

                            const onClick = () => {
                                item.item.isAddedToCart = !item.item.isAddedToCart;
                                setData([...data])
                            }
                            
                            return <BookItem item = {item} onClick = {onClick} />
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