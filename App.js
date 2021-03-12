/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StatusBar,
} from 'react-native';
import { Provider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import RootNavigation from './src/Navigations';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider
      store={store} >
      <StatusBar barStyle="default" />
      <PaperProvider>
        <RootNavigation />
      </PaperProvider>
    </Provider>
  );
};


export default App;
