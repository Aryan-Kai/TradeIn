import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import API from '../network/API';
import CurrencyLayout from '../components/CurrencyLayout.js';
import Header from '../components/Header';
import NetInfo from '@react-native-community/netinfo';
import Toast from 'react-native-simple-toast';
const HomeScreen = () => {

  const [isConnected,setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();
  const getData = () => {
    API.getAllCoins().then(json => {
      setData(json);
      setIsLoading(false);
    });
  };
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });
    setIsLoading(true);
    setInterval(()=>{getData()
    },5000);

    return () =>{
      unsubscribe();
    };
  }, []);
  return (
    <View style={{flex:1,display:'flex'}}>
      {isConnected?null:Toast.show('No internet connection',Toast.LONG)}
        <Header/>
      <FlatList
      style={{marginTop:10}}
          data={data}
        showsVerticalScrollIndicator={true}
        snapToAlignment="start"
        keyExtractor={({id}) => id.toString()}
          renderItem={({item}) => <CurrencyLayout item={item} />}
        />
    </View>
  );
};
export default HomeScreen;
