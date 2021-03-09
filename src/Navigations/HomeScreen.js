import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
//Screens
import { EditProfile, Home, Product, Search } from '../screens';
import { MenuButton, SearchButton } from '../components';
import Colors from '../../assets/colors';
const Stack = createStackNavigator();
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = () =>
{
    return (
        <Stack.Navigator
        initialRouteName="HomeScreen" >
          <Stack.Screen
            name="HomeScreen"
            component={Home}
            options={({navigation}) =>({
                headerTitle: () => {
                    return (
                        <SearchButton
                          onPress={() => navigation.navigate('Search')} />
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
                headerTitleContainerStyle:
                {
                    marginRight: 10,
                },
                headerLeftContainerStyle: {
                    marginLeft: 22,
                },
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
      </Stack.Navigator>
    );
};

export default HomeScreen;
