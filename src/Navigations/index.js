/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { Dimensions, Platform, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

//Styles and Icons

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const { height } = Dimensions.get('window');
import Colors from '../../assets/colors';
import Fonts from '../../assets/fonts';

//Screens
import { Access, Login, Onboarding,
         Signup, ForgotPasssword, VerifyMobile, CommercialRegister, AddProduct, Address, AboutUs, EditProfile, Search, Support, ProfileShop} from '../screens';
//Custom Component
import { DrawerContent, DrawerContentSeller} from '../components';
import MainTabBottom from './TabNavigation';
import ChangePassword from '../screens/Auth/ChangePassword';
import SellerScreen from './SellerScreen';
import styles from './styles';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();



const RootDrawer = ({extraData}) =>
{
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} extraData={extraData} />}
      drawerStyle={{
        backgroundColor:'transparent',
      }} >
      <Drawer.Screen name={'mainTabBottom'} component={MainTabBottom} />
    </Drawer.Navigator>
  );
};
const rootDrawerSeller = () =>
{
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContentSeller {...props} />}
      drawerStyle={{
        backgroundColor:'transparent',
      }} >
      <Drawer.Screen
        name={'SellerScreen'}
        component={SellerScreen} />
    </Drawer.Navigator>
  );
};
const RootNavigation = ({extraData}) =>
{
  const titleStyle = {
    fontSize: 18,
    fontFamily: Fonts.Cairo_Bold,
  };
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
          <Stack.Navigator
           initialRouteName="Main"
           screenOptions={opacityTransition} >
            <Stack.Screen
              name="Main"
              options={{
                headerShown: false,
              }}>
              {props => <RootDrawer
                          {...props}
                          extraData={{setIsloggedIn: extraData.setIsloggedIn, isLoggedIn: extraData.isLoggedIn}}/>}
            </Stack.Screen>
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
              name="AddPrdouct"
              component={AddProduct}
              options={({navigation}) => ({
                headerTitle: () => {
                    return (
                        <Text
                          style={styles.titleStyle} >إضافة منتنج</Text>
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
                headerTransparent: true,
                headerLeftContainerStyle:{
                    paddingLeft: 15,
                  },
                headerStyle: {
                    backgroundColor: Colors.fernGreen,
                    height: height / (Platform.OS === 'ios' ?  9 : 12),
                  },
                headerRightContainerStyle:
                {
                    marginRight: 24,
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
              name="Address"
              component={Address}
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
              name="Access"
              component={Access}
              options={{
                headerShown: false,
              }}  />
             <Stack.Screen
              name="EditProfile"
              component={EditProfile}
              options={({navigation}) =>({
                headerTitle: () => {
                    return (
                        <Text
                          style={titleStyle}>المعلومات الشخصية</Text>
                    );
                },
                headerLeft: () => {
                    return (
                      <TouchableOpacity
                        onPress={() => navigation.goBack()} >
                         <MaterialIcons name="arrow-forward" size={25} color={'#AFAFAF'} />
                      </TouchableOpacity>
                    );
                },
                headerTransparent: true,
                headerLeftContainerStyle:{
                  paddingLeft: 15,
                },
                headerTitleAlign:'center',
              })} />
              <Stack.Screen
              name="ProfileShop"
              component={ProfileShop}
              options={({navigation}) => ({
                headerTitle: () => {
                    return (
                        <Text
                          style={styles.titleStyle} >إضافة منتنج</Text>
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
                headerTransparent: true,
                headerLeftContainerStyle:{
                    paddingLeft: 15,
                  },
                headerStyle: {
                    backgroundColor: Colors.fernGreen,
                    height: height / (Platform.OS === 'ios' ?  9 : 12),
                  },
                headerRightContainerStyle:
                {
                    marginRight: 24,
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
                name="AboutUs"
                component={AboutUs}
                options={({navigation}) => ({
                  headerTitle: () => {
                    return (
                        <Text
                          style={titleStyle} >السياسات والشروط</Text>
                    );
                },
                  headerLeft: () => {
                    return (
                      <TouchableOpacity
                        onPress={() => navigation.goBack()} >
                         <MaterialIcons name="arrow-forward" size={25} color={'#AFAFAF'} />
                      </TouchableOpacity>
                    );
                },
                headerTransparent: true,
                headerLeftContainerStyle:{
                  paddingLeft: 15,
                },
                headerStyle: {
                  backgroundColor: Colors.fernGreen,
                  height: height / (Platform.OS === 'ios' ?  9 : 12),
                },
                headerRightContainerStyle:
                {
                  marginRight: 24,
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
                name="Support"
                component={Support}
                options={({navigation}) => ({
                  headerTitle: () => {
                    return (
                        <Text
                          style={titleStyle} >الدعم الفني</Text>
                    );
                },
                  headerLeft: () => {
                    return (
                      <TouchableOpacity
                        onPress={() => navigation.goBack()} >
                         <MaterialIcons name="arrow-forward" size={25} color={'#AFAFAF'} />
                      </TouchableOpacity>
                    );
                },
                headerTransparent: true,
                headerLeftContainerStyle:{
                  paddingLeft: 15,
                },
                headerStyle: {
                  backgroundColor: Colors.fernGreen,
                  height: height / (Platform.OS === 'ios' ?  9 : 12),
                },
                headerRightContainerStyle:
                {
                  marginRight: 24,
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
              name="Search"
              component={Search}
              options={{
                headerShown: false,
              }} />
            <Stack.Screen
              name="SellerScreen"
              component={rootDrawerSeller}
              options={{
                headerShown: false,
              }} />
          </Stack.Navigator>
    );
};

export const NoneTokenNavigation = ({extraData}) =>
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
              })}>
               {props => <Login
                           {...props}
                           extraData={{setIsloggedIn: extraData.setIsloggedIn, isLoggedIn: extraData.isLoggedIn}} />}
            </Stack.Screen>
            <Stack.Screen
              name="Signup"
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
              })}>
                {props => <Signup
                            {...props}
                            extraData={{setIsloggedIn: extraData.setIsloggedIn}} />}
            </Stack.Screen>
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
              name="Address"
              component={Address}
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
              options={{
                headerShown: false,
              }} >
               {props => <RootDrawer
                          {...props}
                          extraData={{setIsloggedIn: extraData.setIsloggedIn, isLoggedIn: extraData.isLoggedIn}}/>}
            </Stack.Screen>
            <Stack.Screen
              name="ProfileShop"
              component={ProfileShop}
              options={({navigation}) => ({
                headerTitle: () => {
                    return (
                        <Text
                          style={styles.titleStyle} >إضافة منتنج</Text>
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
                headerTransparent: true,
                headerLeftContainerStyle:{
                    paddingLeft: 15,
                  },
                headerStyle: {
                    backgroundColor: Colors.fernGreen,
                    height: height / (Platform.OS === 'ios' ?  9 : 12),
                  },
                headerRightContainerStyle:
                {
                    marginRight: 24,
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
                name="AddProduct"
                component={AddProduct}
                options={({navigation}) => ({
                  headerTitle: () => {
                    return (
                        <Text
                          style={styles.titleStyle} >إضافة منتنج</Text>
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
                headerTransparent: true,
                headerLeftContainerStyle:{
                  paddingLeft: 15,
                },
                headerStyle: {
                  backgroundColor: Colors.fernGreen,
                  height: height / (Platform.OS === 'ios' ?  9 : 12),
                },
                headerRightContainerStyle:
                {
                  marginRight: 24,
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
              name="Search"
              component={Search}
              options={{
                headerShown: false,
              }} />
          </Stack.Navigator>
    );
};
const MainTabNavigator = ({ navigation, setIsloggedIn, isLoggedIn}) => {
  const navigationRef = React.useRef(null);

  return (
  <NavigationContainer
    ref={navigationRef}
    theme={{
      ...DefaultTheme,
      dark: false,
    }} >
    <Stack.Navigator initialRouteName={isLoggedIn ? 'HomeRoot' : 'AuthRoot'}>
        { isLoggedIn ? (
        <Stack.Screen
            name="HomeRoot"
            options={({ navigation, route }) => ({
                headerShown: false,
            })} >
            {props => <RootNavigation {...props} extraData={ {setIsloggedIn, isLoggedIn}} />}
        </Stack.Screen>
        ) : (
        <Stack.Screen
            name="AuthRoot"
            options={({ navigation, route }) => ({
              headerShown: false,
          })} >
                {props => <NoneTokenNavigation {...props} extraData={ {setIsloggedIn, isLoggedIn}} />}
            </Stack.Screen>
            )}

    </Stack.Navigator>
  </NavigationContainer>
);
};
export default MainTabNavigator;
