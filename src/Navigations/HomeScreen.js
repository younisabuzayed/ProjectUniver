import React from 'react';
import { Dimensions, PixelRatio, Platform, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
//Screens
import { AllProducts, Category, Home, Product } from '../screens';
import { MenuButton } from '../components';
//Styles and Fonts And Icons
const { height } = Dimensions.get('window');
import Colors from '../../assets/colors';
import Fonts from '../../assets/fonts';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
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
                  height: height / (Platform.OS === 'ios' ?  9 : 12),
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
                },
            })} />
            <Stack.Screen
              name="Product"
              component={Product}
              options={{
                headerShown: false,
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
                },
            })} />
           <Stack.Screen
              name="AllProducts"
              component={AllProducts}
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
                },
            })} />

      </Stack.Navigator>
    );
};

export default HomeScreen;
