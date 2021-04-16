/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { PixelRatio, Platform, Text, TouchableOpacity, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Styles and Icons
import Colors from '../../assets/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
//Screens
import { Access, Cart, Favorite, Orders,
         Profile } from '../screens';
import HomeScreen from './HomeScreen';
import Fonts from '../../assets/fonts';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
            height: (PixelRatio.get() === 3 ? 90 : PixelRatio.get() === 2 ? 60 : 70),
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
  );
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
  );
};
const FavoriteScreen = () =>
{
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorite"
        component={Favorite}
        options={({navigation}) =>({
          headerTitle: 'المفضلة',
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
const MainTabBottom = () =>
{
  const [token, setToken] = React.useState(null);
  React.useEffect(() => {
    return getToken();
  }, []);
  const getToken = async() => {
    try {
      await AsyncStorage.getItem('data_token') .then((value) => {
        if (value){
          const blocksArray = JSON.parse(value);
          setToken(blocksArray);
        }
   });
    } catch (error) {
      console.log('grg',error);
    }
  };
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
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.20,
            shadowRadius: 1.41,
            }} >
         {props.children}
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
   if (token !== null)
   {
    return (
         <Tab.Navigator
           initialRouteName="HomeTab"
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
              else if (route.name === 'FavoriteScreen')
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
              else if (route.name === 'ProfileScreen')
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
                      shadowColor: '#000',
                      shadowOffset: {
                        width: 0,
                        height: 1,
                      },
                      shadowOpacity: 0.20,
                      shadowRadius: 1.41,
                      elevation: 2,
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
               name="FavoriteScreen"
               component={FavoriteScreen} />
             <Tab.Screen
               name="ProfileScreen"
               component={ProfileScreen} />
         </Tab.Navigator>
    );}
    else {
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
             else if (route.name === 'FavoriteScreen')
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
             else if (route.name === 'ProfileScreen')
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
              component={Access}
              options = {({navigation}) => ({
                tabBarButton: props => <TouchableOpacity {...props} onPress={() => navigation.navigate('Access')} />,
              })}/>
             <Tab.Screen
              name="OrderScreen"
              component={Access}
              options = {({navigation}) => ({
                tabBarButton: props => <TouchableOpacity {...props} onPress={() => navigation.navigate('Access')} />,
              })} />
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
              name="FavoriteScreen"
              component={Access}
              options = {({navigation}) => ({
                tabBarButton: props => <TouchableOpacity {...props} onPress={() => navigation.navigate('Access')} />,
              })} />
            <Tab.Screen
              name="ProfileScreen"
              component={Access}
              options = {({navigation}) => ({
                tabBarButton: props => <TouchableOpacity {...props} onPress={() => navigation.navigate('Access')} />,
              })} />
        </Tab.Navigator>
   );
    }
};

export default MainTabBottom;
