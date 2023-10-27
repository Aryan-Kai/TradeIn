import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'

const CurrencyLayout = (props) => (
    <View style={styles.container} key={props.item.id}>
        <View style={{ flexDirection: 'row', alignItems: 'center', display: 'flex' }}>
            <View style={styles.tinyLogo}>
                <Image
                style={{width:"100%",height:"100%"}}
                source={{uri: props.item.image}}
                />
      </View>
      <View style={{flexDirection: 'column', flex: 1}}>
        <Text
          style={{
            fontFamily: 'SFProText-Regular',
            fontSize: 18,
            textTransform:'capitalize'
          }}>
          {props.item.symbol}
        </Text>
        <Text
                    style={{
            fontFamily: 'SFProText-Regular',
            fontSize: 18,
          }}>
          {props.item.current_price} USD
        </Text>
      </View>
      {props.item.price_change_percentage_24h > 0 ? <Image
      source={require('../assets/increase.png')}
      style={styles.icon}
      /> : <Image
      source={require('../assets/decrease.png')}
      style={styles.icon}
      />}
      <Text
      style={styles.textStyle,
        props.item.price_change_percentage_24h > 0 
        ?
        {color:'green',fontSize:18,
        marginRight:10}
        :
        {color:'red',fontSize:18,
        marginRight:10}
        }>
          {props.item.price_change_percentage_24h}
          </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 14,
    marginBottom: 14,
        elevation: 2,
        shadowColor: 'black',
        shadowRadius: 2,
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 0 },
    },
    tinyLogo: {
        width: 60,
        height: 60,
        marginRight: 12,
        padding:5,
        overflow: 'hidden'
    },
    icon:{
      width:20,
      height:20,
      marginRight:5
    }
})

export default CurrencyLayout;
