import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
//Screens
import { Category, EditProfile, Home, Product, Search } from '../screens';
import { MenuButton, SearchButton } from '../components';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../assets/colors';
import Fonts from '../../assets/fonts';
const Stack = createStackNavigator();

const HomeScreen = () =>
{
    return (
        <Stack.Navigator
        initialRouteName="HomeScreen" >
          <Stack.Screen
            name="HomeScreen"
            component={Home}
            options={({navigation}) =>({
                headerTitle: 'الرئيسية',
                headerRight: () =>
                {
                  return (
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Search')}>
                        <MaterialIcons name="search" size={30} color={Colors.white} />
                    </TouchableOpacity>
                  );
                },
                headerLeft: () => {
                    return (
                      <MenuButton
                        onPress={() => navigation.toggleDrawer()} />
                    );
                },
                headerStyle: {
                  backgroundColor: Colors.fernGreen,
                  height: 70,
                },
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
                  color: Colors.white,
                  fontFamily: Fonts.Cairo_Bold,
                  fontSize: 18,
                  lineHeight: 30,
                }
            })} />
            <Stack.Screen
              name="Product"
              component={Product}
              options={{
                headerShown: false,
              }} />
            <Stack.Screen
              name="Search"
              component={Search}
              options={{
                headerShown: false,
              }} />
            <Stack.Screen
              name="EditProfile"
              component={EditProfile}
              options={{
                headerTitle: () => {
                    return (
                        <Text>المعلومات الشخصية</Text>
                    );
                },
                headerLeft: () => {
                    return (
                      <MaterialIcons name="arrow-forward" size={25} color={'#AFAFAF'} style={{}} />
                    );
                },
                headerTransparent: true,
                headerLeftContainerStyle:{
                  paddingLeft: 15,
                },
                headerTitleAlign:'center',
              }} />
            <Stack.Screen
              name="Category"
              component={Category}
              options={({navigation}) =>({
                headerTitle: 'تصنيفات',
                headerRight: () =>
                {
                  return (
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Search')}>
                        <MaterialIcons name="search" size={30} color={Colors.white} />
                    </TouchableOpacity>
                  );
                },
                headerLeft: () => {
                    return (
                      <TouchableOpacity
                      onPress={() => navigation.goBack()}>
                      <MaterialIcons name="arrow-forward" size={25} color={'#fff'} style={{}} />
                      </TouchableOpacity>
                    );
                },
                headerStyle: {
                  backgroundColor: Colors.fernGreen,
                  height: 70,
                },
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
                  color: Colors.white,
                  fontFamily: Fonts.Cairo_Bold,
                  fontSize: 18,
                  lineHeight: 30,
                }
            })} />
      </Stack.Navigator>
    );
};

export default HomeScreen;
