/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from '../../assets/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
//Screens
import { Cart, Favorite, Orders,
         Profile } from '../screens';
import HomeScreen from './HomeScreen';
const Tab = createBottomTabNavigator();

const mainTabBottom = () =>
{
  const CustomHome = (props) =>
  {
    return (
        <TouchableOpacity
          onPress={props.onPress}
          style={{
            width: 60,
            height: 60,
            top: -20,
            borderRadius: 30,
            elevation: 1,
            }} >
         {props.children}
        </TouchableOpacity>
    );
  };
  const barStyle =
  {
    backgroundColor: Colors.white,
    height: 50,
    justifyContent: 'center',
  };
  const styleIcon =
  {
    width: 30,
  };
    return (
         <Tab.Navigator
           initialRouteName="HomeTab"
           tabBarOptions={{
            inactiveTintColor:'#ABABAB',
            activeTintColor:Colors.fernGreen,
            style:barStyle,
            showLabel: false,
           }}
           screenOptions={({route}) =>(
           {
            tabBarIcon: ({color, focused}) => {
              const styleItem = {
                alignItems:'center',
                justifyContent: 'center',
              };
              if (route.name === 'Cart')
              {
                 return (
                 <View
                   style={styleItem} >
                     <FontAwesome5
                       name="shopping-cart"
                       size={20}
                       color={color}
                       style={styleIcon} />
                 {focused && <Text
                               style={{fontSize: 9,width: 29, textAlign: 'center'}}>السلة</Text>}
                 </View>
                );
              }
              else if (route.name === 'Orders'){
                return (
                  <View
                    style={styleItem} >
                      <FontAwesome5
                        name="clipboard-list"
                        size={25}
                        color={color}
                        style={[styleIcon,{textAlign:'center'}]} />
                      {focused && <Text
                                    style={{fontSize: 9,width: 29, textAlign: 'center'}}>طلبات</Text>}
                 </View>
                );
              }
              else if (route.name === 'Favorite')
              {
                return  (
                  <View
                    style={styleItem} >
                      <MaterialIcons
                        name="favorite"
                        size={25}
                        color={color}
                        style={styleIcon} />
                      {focused && <Text
                                    style={{fontSize: 9,width: 29, textAlign: 'center'}}>المفضلة</Text>}
                 </View>
                );
              }
              else if (route.name === 'Profile')
              {
                return (
                  <View
                    style={styleItem} >
                       <Ionicons
                         name="person"
                         size={25}
                         color={color}
                         style={styleIcon} />
                      {focused && <Text
                                    style={{fontSize: 9,width: 29, textAlign: 'center'}}>صفحتي</Text>}
                 </View>
                );
              }
            },
            // tabBarBadge:55
           })}>
              <Tab.Screen
               name="Cart"
               component={Cart} />
              <Tab.Screen
               name="Orders"
               component={Orders} />
              <Tab.Screen
               name="HomeTab"
               component={HomeScreen}
               options={() => ({
                title:'',
                tabBarIcon: ({color, focused}) => (
                  <View
                    style={{
                      alignItems:'center',
                      justifyContent: 'center',
                      position:'absolute',
                      backgroundColor:Colors.white,
                      height: 60,
                      width: 60,
                      borderRadius: 30,
                    }}>
                      <Entypo name="home" size={25} color={color} style={styleIcon} />
                      {focused && <Text
                                    style={{fontSize: 9,width: 29}}>الرئيسية</Text>}
                  </View>
                ),
                tabBarButton: (props) => (
                  <CustomHome
                    style={{top: -100}}
                    {...props} />
                )
                })}
                 />
             <Tab.Screen
               name="Favorite"
               component={Favorite} />
             <Tab.Screen
               name="Profile"
               component={Profile} />
         </Tab.Navigator>
    );
};

export default mainTabBottom;
