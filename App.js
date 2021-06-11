/* eslint-disable react-hooks/exhaustive-deps */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import { I18nManager } from 'react-native';
 import { Provider } from 'react-redux';
 import { Provider as PaperProvider } from 'react-native-paper';
 import store from './src/redux/store';
 import AsyncStorage from '@react-native-async-storage/async-storage';
 import { ToastProvider } from 'react-native-fast-toast';
 import MainTabNavigator from './src/Navigations';
 import RNRestart from 'react-native-restart';
 import SplashScreen from  'react-native-splash-screen';

 const App = () => {
   const [token, setToken] = React.useState(null);
   const [isLoggedIn, setIsloggedIn] = React.useState(false);
  //Hide Splash screen on app load.
    React.useEffect(() => {
      SplashScreen.hide();
    });
   React.useEffect(() => {
      if (!I18nManager.isRTL){
          I18nManager.forceRTL(true);
          RNRestart.Restart();
      }
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
