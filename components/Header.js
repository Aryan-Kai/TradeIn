import { ImageBackground, View, StyleSheet } from 'react-native'
import React from 'react';

const Header = () => (
    <ImageBackground source={require('../assets/header.png')} style={{ height: 302 }}>
    </ImageBackground>
)
const styles = StyleSheet.create({
    containerStyle: {
        display: 'flex',
        flexDirection: 'column-reverse',
        flex: 1,
        marginBottom: 23
    }
    // textStyle: {
    //     marginTop: 20,
    //     marginBottom: 30,
    //     marginHorizontal: 10,
    //     textAlign: "center",
    //     fontSize: 30,
    //     fontFamily: 'SFProText-Regular',
    //     color: Colors.colorWhite,
    // }
})
export default Header;
