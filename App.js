/* eslint-disable react-hooks/exhaustive-deps */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   ActivityIndicator,
   StatusBar,
 } from 'react-native';
 import { Provider } from 'react-redux';
 import { Provider as PaperProvider } from 'react-native-paper';
 import store from './src/redux/store';
 import AsyncStorage from '@react-native-async-storage/async-storage';
import { ToastProvider } from 'react-native-fast-toast';
import MainTabNavigator from './src/Navigations';
 console.disableYellowBox = true;

 const App = () => {
   const [token, setToken] = React.useState(null);
   const [isLoggedIn, setIsloggedIn] = React.useState(false);

   React.useEffect(() => {
      getToken();
   }, []);
   React.useEffect(() => {
    if (token)
    {
      setIsloggedIn(!isLoggedIn);
    }
 }, [token]);
   const getToken = async() => {
       try {
         const jsonValue = await AsyncStorage.getItem('data_token');
         return jsonValue != null ? setToken(JSON.parse(jsonValue)) : null;
         } catch (e) {
         // error reading value
         console.log('Get toke App Token Error', e);
         }

         // if (value !== null){
         //   const blocksArray = JSON.parse(value);
         //   setToken(blocksArray);
         //   console.log(blocksArray)
         // }
       };
       console.log(token);

   return (
     <Provider
       store={store} >
       <ToastProvider>
         <PaperProvider>
           <MainTabNavigator
              isLoggedIn={isLoggedIn}
              setIsloggedIn={(bool) => setIsloggedIn(bool)} />
         </PaperProvider>
       </ToastProvider>
     </Provider>
   );
 };


 export default App;
