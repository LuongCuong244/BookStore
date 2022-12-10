import React, { useRef, useState } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Animated,
    Modal,
    Text
} from 'react-native';

export default Menu = (props) => {

    const stickAboveRotateAnim = useRef(new Animated.Value(0)).current;
    const stickBellowRotateAnim = useRef(new Animated.Value(0)).current;
    const stickOpacity = useRef(new Animated.Value(1)).current;

    const menuTrans = useRef(new Animated.Value(-160)).current;

    const [isOpenMenu, setOpenMenu] = useState(false);

    const openingMenu = () => {
        Animated.timing(stickAboveRotateAnim, {
            toValue: -45,
            duration: 200,
            useNativeDriver: true,
        }).start();

        Animated.timing(stickBellowRotateAnim, {
            toValue: 45,
            duration: 200,
            useNativeDriver: true,
        }).start();

        Animated.timing(stickOpacity, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
        }).start();

        Animated.timing(menuTrans, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
    }

    const closedMenu = () => {
        Animated.timing(stickAboveRotateAnim, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
        }).start();

        Animated.timing(stickBellowRotateAnim, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
        }).start();

        Animated.timing(stickOpacity, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
        }).start();

        Animated.timing(menuTrans, {
            toValue: -160,
            duration: 200,
            useNativeDriver: true,
        }).start();
    }

    const handleOpenMenu = () => {
        if (isOpenMenu) {
            closedMenu();
            setTimeout(() => {
                setOpenMenu(false);
            }, 200);
        } else {
            setOpenMenu(true);
            openingMenu();
        }
    }

    const handleClosedMenu = () => {
        closedMenu();
        setTimeout(() => {
            setOpenMenu(false);
        }, 200);
    }

    const MenuIcon = () => {
        return (
            <View style={{ width: 45, height: 45, zIndex: 3, }} >
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.menuIconButtonStyle}
                    onPress={handleOpenMenu}
                >
                    <Animated.View
                        style={[
                            styles.stick,
                            {
                                transform: [
                                    {
                                        rotate: stickAboveRotateAnim.interpolate({
                                            inputRange: [0, 360],
                                            outputRange: ['0deg', '360deg']
                                        })
                                    },
                                    {
                                        translateX: -11,
                                    }
                                ],
                                left: 11,
                            }
                        ]}
                    />

                    <Animated.View
                        style={[
                            styles.stick,
                            {
                                opacity: stickOpacity,
                            }
                        ]}
                    />

                    <Animated.View
                        style={[
                            styles.stick,
                            {
                                transform: [
                                    {
                                        rotate: stickBellowRotateAnim.interpolate({
                                            inputRange: [0, 360],
                                            outputRange: ['0deg', '360deg']
                                        })
                                    },
                                    {
                                        translateX: -11,
                                    }
                                ],
                                left: 11,
                            }
                        ]}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={{ flex: 1 }} >

            <MenuIcon />

            <Modal
                visible={isOpenMenu}
                transparent
                animationType="none"
            >
                <View style={{ flex: 1, }} >
                    <MenuIcon />

                    <Animated.View
                        style={[
                            styles.menuScreenStyle,
                            {
                                transform: [
                                    {
                                        translateX: menuTrans,
                                    }
                                ]
                            }
                        ]}
                    >
                        <TouchableOpacity
                            style={{ width: '100%' }}
                            onPress={() => {
                                props.switchScreenCallBack("HomeScreen", "Trang chủ");
                            }}
                            activeOpacity={0.7}
                        >
                            <View style={styles.buttonItem} >
                                <Text style={[
                                    styles.textItem,
                                    { color: props.currentScreen == "HomeScreen" ? 'yellow' : 'white' }
                                ]} >Trang chủ</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{ width: '100%' }}
                            onPress={() => {
                                props.switchScreenCallBack("IntroduceScreen", "Giới thiệu");
                            }}
                            activeOpacity={0.7}
                        >
                            <View style={styles.buttonItem} >
                                <Text style={[
                                    styles.textItem,
                                    { color: props.currentScreen == "IntroduceScreen" ? 'yellow' : 'white' }
                                ]} >Giới thiệu</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{ width: '100%' }}
                            onPress={() => {
                                props.switchScreenCallBack("ProductScreen", "Sản phẩm");
                            }}
                            activeOpacity={0.7}
                        >
                            <View style={styles.buttonItem} >
                                <Text style={[
                                    styles.textItem,
                                    { color: props.currentScreen == "ProductScreen" ? 'yellow' : 'white' }
                                ]} >Sản phẩm</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{ width: '100%' }}
                            onPress={() => {
                                props.switchScreenCallBack("ContactScreen", "Liên hệ");
                            }}
                            activeOpacity={0.7}
                        >
                            <View style={styles.buttonItem} >
                                <Text style={[
                                    styles.textItem,
                                    { color: props.currentScreen == "ContactScreen" ? 'yellow' : 'white' }
                                ]} >Liên hệ</Text>
                            </View>
                        </TouchableOpacity>
                    </Animated.View>

                    <View
                        style={styles.backgroundModal}
                        onTouchEnd={handleClosedMenu}
                    ></View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    menuIconButtonStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        top: 5,
    },
    stick: {
        width: 24,
        height: 2,
        marginVertical: 2.95,
        backgroundColor: 'white',
    },
    menuScreenStyle: {
        position: 'absolute',
        height: '100%',
        width: 160,
        backgroundColor: '#5BC0C7',
        borderTopRightRadius: 35,
        borderBottomRightRadius: 35,
        paddingTop: 70,
        zIndex: 2,
    },
    buttonItem: {
        paddingVertical: 10,
        paddingLeft: 20,
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%'
    },
    backgroundModal: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.001)',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1,
    },
    textItem: {
        fontSize: 18,
        color: 'white',
        marginLeft: 15
    }
})