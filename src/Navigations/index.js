/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

//Styles and Icons
import Colors from '../../assets/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

//Screens
import { Access, Cart, EditProfile, Favorite,
         Home, Login, Onboarding, Orders,
         Product, Profile, Search, Signup,
         ForgotPasssword, 
         VerifyMobile} from '../screens';
//Custom Component
import { DrawerContent} from '../components';
import mainTabBottom from './TabNavigation';

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
      <Drawer.Screen name={'mainTabBottom'} component={mainTabBottom} />
    </Drawer.Navigator>
  );
};
const rootNavigation = () =>
{

    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Onboarding"
              component={Onboarding}
              options={{
                headerShown: false,
              }} />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                headerShown: false,
              }} />
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{
                headerShown: false,
              }} />
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
          </Stack.Navigator>
        </NavigationContainer>
    );
};

export default rootNavigation;
