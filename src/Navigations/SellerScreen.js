/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { PixelRatio, Text, TouchableOpacity, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Styles and Icons
import Colors from '../../assets/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
//Screens
import { OrdersSeller, Profile } from '../screens';
import HomeScreen from './HomeScreen';
import Fonts from '../../assets/fonts';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './styles';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const OrderScreen = () =>
{
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Orders"
        component={OrdersSeller}
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
            height: 90,
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
  );
};

const ProfileScreen = () =>
{
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={({navigation}) =>({
          headerTitle: 'الملف الشخصي',
          headerLeft: () => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.goBack()} >
                    <MaterialIcons
                      name="arrow-forward"
                      size={25}
                      color={'#FFFF'}
                      style={{}} />
                </TouchableOpacity>
              );
          },
          headerStyle: {
            backgroundColor: Colors.fernGreen,
            height: 90,
          },
          headerTransparent: true,
          headerLeftContainerStyle: {
              marginLeft: 22,
          },
          headerTitleAlign: 'center',
          headerTitleStyle:
          {
            color: Colors.white,
            fontFamily: Fonts.Cairo_Bold,
            fontSize: 18,
          },
          })} />
    </Stack.Navigator>
  );
};
const SellerScreen = () =>
{
  const CustomHome = (props) =>
  {
    return (
        <TouchableOpacity
          onPress={props.onPress}
          style={styles.buttonAddProductsContainer} >
            <View
              style={styles.buttonAddProductsView}>
                <Octicons name="plus" size={25} color={'#ABABAB'} style={[styleIcon,{textAlign:'center'}]} />
            </View>
        </TouchableOpacity>
    );
  };
  const barStyle =
  {
    backgroundColor: Colors.white,
    height: (PixelRatio.get() === 3 ? 70 : 55),
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
           initialRouteName="HomeScreen"
           tabBarOptions={{
            inactiveTintColor:'#ABABAB',
            activeTintColor:Colors.fernGreen,
            style:barStyle,
            showLabel: false,
            tabStyle:{
              // marginTop: Platform.OS === 'ios' && 10,
            },
           }}
           screenOptions={({route}) =>(
           {
            tabBarIcon: ({color, focused}) => {
              const styleItem = {
                alignItems:'center',
                justifyContent: 'center',
              };
               if (route.name === 'OrderScreen'){
                return (
                  <View
                    style={styleItem} >
                      <FontAwesome5
                        name="clipboard-list"
                        size={20}
                        color={color}
                        style={[styleIcon,{textAlign:'center'}]} />
                      {focused && <Text
                                    style={styleTitle}>طلبات</Text>}
                 </View>
                );
              }
              else if (route.name === 'HomeScreen')
              {
                return (
                  <View
                    style={styleItem} >
                        <Entypo
                          name="home"
                          size={20}
                          color={color}
                          style={[styleIcon,{textAlign:'center'}]} />

                      {focused && <Text
                                    style={styleTitle}>الرئيسية</Text>}
                 </View>
                );
              }
            },
           })}>
              <Tab.Screen
               name="OrderScreen"
               component={OrderScreen} />
              <Tab.Screen
               name="HomeTabs"
               component={() =>{}}
               options={({navigation}) => ({
                title:'',
                tabBarButton: (props,) => (
                  <CustomHome
                    style={{top: -100}}
                    onPress={() => navigation.navigate('AddPrdouct')}/>
                ),
                })}
                 />
             <Tab.Screen
               name="HomeScreen"
               component={HomeScreen} />
         </Tab.Navigator>
    );
};

export default SellerScreen;
