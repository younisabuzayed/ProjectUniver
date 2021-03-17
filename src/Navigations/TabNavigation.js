/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Styles and Icons
import Colors from '../../assets/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
//Screens
import { Cart, Favorite, Orders,
         Profile } from '../screens';
import HomeScreen from './HomeScreen';
import Fonts from '../../assets/fonts';
import { createStackNavigator } from '@react-navigation/stack';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const CartScreen = () =>
{
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={({navigation}) =>({
          headerTitle: 'السلة',
          headerRight: () =>
          {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate('Search')}>
                  <Ionicons name="share-social" size={30} color={'#BFBFBF'} />
              </TouchableOpacity>
            );
          },
          headerLeft: () => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.goBack()} >
                    <MaterialIcons name="arrow-forward" size={25} color={'#AFAFAF'} style={{}} />
                </TouchableOpacity>
              );
          },
          headerStyle: {
            backgroundColor: Colors.fernGreen,
            height: 70,
          },
          headerTransparent: true,
          headerRightContainerStyle:
          {
            marginRight: 24,
          },
          headerLeftContainerStyle: {
              marginLeft: 22,
          },
          headerTitleAlign: 'center',
          headerTitleStyle:
          {
            color: Colors.balck,
            fontFamily: Fonts.Cairo_Bold,
            fontSize: 18,
            lineHeight: 30,
          },
          })} />
    </Stack.Navigator>
  )
};
const OrderScreen = () =>
{
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Orders"
        component={Orders}
        options={({navigation}) =>({
          headerTitle: 'الطلبات',
          headerLeft: () => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.goBack()} >
                    <MaterialIcons name="arrow-forward" size={25} color={'#AFAFAF'} style={{}} />
                </TouchableOpacity>
              );
          },
          headerStyle: {
            backgroundColor: Colors.fernGreen,
            height: 70,
          },
          headerTransparent: true,
          headerLeftContainerStyle: {
              marginLeft: 22,
          },
          headerTitleAlign: 'center',
          headerTitleStyle:
          {
            color: Colors.balck,
            fontFamily: Fonts.Cairo_Bold,
            fontSize: 18,
            lineHeight: 30,
          },
          })} />
    </Stack.Navigator>
  )
}
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
  const styleTitle =
  {
    fontSize: 9,
    width: 33,
    textAlign: 'center',
    fontFamily: Fonts.Cairo_Regular,
    color: Colors.fernGreen,
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
              if (route.name === 'CartScreen')
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
                               style={styleTitle}>السلة</Text>}
                 </View>
                );
              }
              else if (route.name === 'OrderScreen'){
                return (
                  <View
                    style={styleItem} >
                      <FontAwesome5
                        name="clipboard-list"
                        size={25}
                        color={color}
                        style={[styleIcon,{textAlign:'center'}]} />
                      {focused && <Text
                                    style={styleTitle}>طلبات</Text>}
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
                                    style={[styleTitle, {width: 33}]}>المفضلة</Text>}
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
                                    style={styleTitle}>صفحتي</Text>}
                 </View>
                );
              }
            },
           })}>
              <Tab.Screen
               name="CartScreen"
               component={CartScreen}
               options={{
                tabBarBadge: 7,
               tabBarBadgeStyle:
               {
                marginLeft: -20,
               },
               }} />
              <Tab.Screen
               name="OrderScreen"
               component={OrderScreen} />
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
                      <Entypo name="home" size={25} color={color} style={[styleIcon,{textAlign:'center'}]} />
                      {focused && <Text
                                    style={styleTitle}>الرئيسية</Text>}
                  </View>
                ),
                tabBarButton: (props) => (
                  <CustomHome
                    style={{top: -100}}
                    {...props} />
                ),
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
