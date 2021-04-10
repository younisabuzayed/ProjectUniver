/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

//Styles and Icons

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

//Screens
import { Access, Login, Onboarding,
         Signup, ForgotPasssword, VerifyMobile, CommercialRegister, OrdersBuyer, AddProduct} from '../screens';
//Custom Component
import { DrawerContent} from '../components';
import MainTabBottom from './TabNavigation';
import ChangePassword from '../screens/Auth/ChangePassword';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();



const rootDrawer = () =>
{
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      drawerStyle={{
        marginVertical: 20,
        backgroundColor:'transparent',
      }} >
      <Drawer.Screen name={'mainTabBottom'} component={MainTabBottom} />
    </Drawer.Navigator>
  );
};
const rootNavigation = () =>
{
  const opacityTransition =
  {
    gestureDirection: 'horizontal',
    transitionSpec: {
        open: {
            animation: 'timing',
        },
        close: {
            animation: 'timing',
            config: {
                duration: 300,
            },
        },
    },
    cardStyleInterpolator: ({ current }) => ({
        cardStyle: {
            opacity: current.progress,
        },
    }),
  };
    return (
        <NavigationContainer >
          <Stack.Navigator
           initialRouteName="Main"
           screenOptions={opacityTransition} >
            <Stack.Screen
              name="Main"
              component={rootDrawer}
              options={{
                headerShown: false,
              }}  />
            <Stack.Screen
              name="CommercialRegister"
              component={CommercialRegister}
              options={({navigation}) => ({
                title:'',
                headerLeft: () => {
                    return (
                      <TouchableOpacity
                        onPress={() => navigation.goBack()} >
                         <MaterialIcons name="arrow-forward" size={25} color={'#AFAFAF'} style={{}} />
                      </TouchableOpacity>
                    );
                },
              headerTransparent: true,
              headerLeftContainerStyle:{
                  paddingLeft: 15,
                },
              })} />
              <Stack.Screen
              name="OrdersBuyer"
              component={AddProduct}
              options={({navigation}) => ({
                title:'',
                headerLeft: () => {
                    return (
                      <TouchableOpacity
                        onPress={() => navigation.goBack()} >
                         <MaterialIcons name="arrow-forward" size={25} color={'#AFAFAF'} style={{}} />
                      </TouchableOpacity>
                    );
                },
              headerTransparent: true,
              headerLeftContainerStyle:{
                  paddingLeft: 15,
                },
              })} />
          </Stack.Navigator>
        </NavigationContainer>
    );
};

export const NoneTokenNavigation = () =>
{
  const opacityTransition =
  {
    gestureDirection: 'horizontal',
    transitionSpec: {
        open: {
            animation: 'timing',
        },
        close: {
            animation: 'timing',
            config: {
                duration: 300,
            },
        },
    },
    cardStyleInterpolator: ({ current }) => ({
        cardStyle: {
            opacity: current.progress,
        },
    }),
  };
    return (
        <NavigationContainer >
          <Stack.Navigator
           initialRouteName="Onboarding"
           screenOptions={opacityTransition} >
            <Stack.Screen
              name="Onboarding"
              component={Onboarding}
              options={{
                headerShown: false,
              }} />
            <Stack.Screen
              name="Login"
              component={Login}
              options={({navigation}) => ({
                title:'',
                headerLeft: () => {
                    return (
                      <TouchableOpacity
                        onPress={() => navigation.goBack()} >
                         <MaterialIcons name="arrow-forward" size={25} color={'#AFAFAF'} style={{}} />
                      </TouchableOpacity>
                    );
                },
              headerTransparent: true,
              headerLeftContainerStyle:{
                  paddingLeft: 15,
                },
              })} />
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={({navigation}) => ({
                title:'',
                headerLeft: () => {
                    return (
                      <TouchableOpacity
                        onPress={() => navigation.goBack()} >
                         <MaterialIcons name="arrow-forward" size={25} color={'#AFAFAF'} style={{}} />
                      </TouchableOpacity>
                    );
                },
              headerTransparent: true,
              headerLeftContainerStyle:{
                  paddingLeft: 15,
                },
              })} />
            <Stack.Screen
              name="ForgotPasssword"
              component={ForgotPasssword}
              options={({navigation}) => ({
                title:'',
                headerLeft: () => {
                    return (
                      <TouchableOpacity
                        onPress={() => navigation.goBack()} >
                         <MaterialIcons name="arrow-forward" size={25} color={'#AFAFAF'} style={{}} />
                      </TouchableOpacity>
                    );
                },
              headerTransparent: true,
              headerLeftContainerStyle:{
                  paddingLeft: 15,
                },
              })} />
            <Stack.Screen
              name="VerifyMobile"
              component={VerifyMobile}
              options={({navigation}) => ({
                title:'',
                headerLeft: () => {
                    return (
                      <TouchableOpacity
                        onPress={() => navigation.goBack()} >
                         <MaterialIcons name="arrow-forward" size={25} color={'#AFAFAF'} style={{}} />
                      </TouchableOpacity>
                    );
                },
              headerTransparent: true,
              headerLeftContainerStyle:{
                  paddingLeft: 15,
                },
              })} />
            <Stack.Screen
              name="ChangePassword"
              component={ChangePassword}
              options={({navigation}) => ({
                title:'',
                headerLeft: () => {
                    return (
                      <TouchableOpacity
                        onPress={() => navigation.goBack()} >
                         <MaterialIcons name="arrow-forward" size={25} color={'#AFAFAF'} style={{}} />
                      </TouchableOpacity>
                    );
                },
              headerTransparent: true,
              headerLeftContainerStyle:{
                  paddingLeft: 15,
                },
              })} />
            <Stack.Screen
              name="Main"
              component={rootDrawer}
              options={{
                headerShown: false,
              }}  />
            <Stack.Screen
              name="Access"
              component={Access}
              options={{
                headerShown: false,
              }}  />
            <Stack.Screen
              name="CommercialRegister"
              component={CommercialRegister}
              options={({navigation}) => ({
                title:'',
                headerLeft: () => {
                    return (
                      <TouchableOpacity
                        onPress={() => navigation.goBack()} >
                         <MaterialIcons name="arrow-forward" size={25} color={'#AFAFAF'} style={{}} />
                      </TouchableOpacity>
                    );
                },
              headerTransparent: true,
              headerLeftContainerStyle:{
                  paddingLeft: 15,
                },
              })} />
              <Stack.Screen
              name="OrdersBuyer"
              component={AddProduct}
              options={({navigation}) => ({
                title:'',
                headerLeft: () => {
                    return (
                      <TouchableOpacity
                        onPress={() => navigation.goBack()} >
                         <MaterialIcons name="arrow-forward" size={25} color={'#AFAFAF'} style={{}} />
                      </TouchableOpacity>
                    );
                },
              headerTransparent: true,
              headerLeftContainerStyle:{
                  paddingLeft: 15,
                },
              })} />
          </Stack.Navigator>
        </NavigationContainer>
    );
}

export default rootNavigation;
