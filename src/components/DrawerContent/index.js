/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, SafeAreaView, TouchableOpacity } from 'react-native';
import { Avatar, Title, Drawer } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { connect } from 'react-redux';
import ProfileAction from '../../redux/actions/ProfileAction';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

//Styles and Icons
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const logo = 'https://mostaql.hsoubcdn.com/uploads/539862-dj0ow-1558106924-5cded32cf36b5.jpg';

function DrawerContent({ profileAction, profile, error, extraData},props) {
    const navigation = useNavigation();
    const [token, setToken] = React.useState(null);
   React.useEffect(() => {
      getToken();
   }, []);
  //  console.log('sdsd',profile.seller);
   const getToken = async() => {
       try {
         const jsonValue = await AsyncStorage.getItem('data_token');
         return jsonValue != null ? setToken(JSON.parse(jsonValue)) : null;
         } catch (e) {
         // error reading value
         console.log('Get toke App Token Error', e);
         }
       };
    React.useEffect(() =>
    {
        profileAction();
    },[]);
    // console.log('Drawer',profile)
    const logout = async (extraData, navigation) =>
    {
        await AsyncStorage.clear();
        extraData.setIsloggedIn(false);
        navigation.navigate('Access');
    };
    const onPressNavigations = (navigates) =>
    {
      if (profile === null)
      {
        navigation.navigate('Access');
      } else
      {
        navigation.navigate(navigates);
      }
    };
    console.log(error);
    return (
        <SafeAreaView
          style={styles.drawerContentContainer}>
            <DrawerContentScrollView
              {...props}>
                <View
                  style={styles.drawerContent}>
                    <View
                      style={styles.userInfoSection}>
                            <Avatar.Image
                                source={{uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'}}
                                size={80} />
                            <View
                              style={styles.name}>
                                <Title
                                  style={styles.title}>
                                    {profile !== null
                                      ? profile.fullname
                                      : 'username'}
                                </Title>
                            </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                  name="account-outline"
                                  color={color}
                                  size={size} />
                            )}
                            label="المعلومات الشخصية"
                            onPress={() => onPressNavigations('EditProfile')}
                            labelStyle={styles.lableMargin} />
                        <DrawerItem
                            icon={({color, size}) => (
                                <MaterialIcons
                                  name="favorite"
                                  color={color}
                                  size={size} />
                            )}
                            label="المفضلة"
                            onPress={() => onPressNavigations('FavoriteScreen')}
                            labelStyle={styles.lableMargin} />
                        <DrawerItem
                            icon={({color, size}) => (
                                <FontAwesome5
                                  name="clipboard-list"
                                  color={color}
                                  size={size} />
                            )}
                            label="الطلبات"
                            onPress={() => onPressNavigations('OrderScreen')}
                            labelStyle={styles.lableMargin} />
                        <DrawerItem
                            icon={({color, size}) => (
                                <FontAwesome5
                                  name="shopping-cart"
                                  color={color}
                                  size={size} />
                            )}
                            label="السلة"
                            onPress={() => onPressNavigations('CartScreen')}
                            labelStyle={styles.lableMargin} />
                        <DrawerItem
                            icon={({color, size}) => (
                                <MaterialIcons
                                  name="language"
                                  color={color}
                                  size={size} />
                            )}
                            label="اللغة"
                            onPress={() => {alert('ستتوفر قريبا');}}
                            labelStyle={styles.lableMargin} />
                        <DrawerItem
                            icon={({color, size}) => (
                                <MaterialIcons
                                  name="send"
                                  color={color}
                                  size={size} />
                            )}
                            label="الدعم الفني"
                            onPress={() => {navigation.navigate('Support');}}
                            labelStyle={styles.lableMargin} />
                        <DrawerItem
                            icon={({color, size}) => (
                                <FontAwesome
                                  name="align-right"
                                  color={color}
                                  size={size} />
                            )}
                            label="السياسات والشروط"
                            onPress={() => {navigation.navigate('AboutUs');}}
                            labelStyle={styles.lableMargin} />
                        <DrawerItem
                                icon={({color, size}) => (
                                    <FontAwesome
                                      name="sign-out"
                                      color={color}
                                      size={size} />
                            )}
                            label="الخروج"
                            onPress={() =>logout(extraData, navigation)}
                            labelStyle={styles.lableMargin} />
                        {token && <>
                            {profile && profile.seller === null
                              ? <DrawerItem
                                  label="إضافة حساب تاجر"
                                  labelStyle={styles.lableAddTrader }
                                  onPress={() => navigation.navigate('CommercialRegister')} />
                              : <TouchableOpacity
                                  style={styles.mainProfile}
                                  onPress={() => navigation.navigate('SellerScreen')} >
                                    <Avatar.Image
                                      source={{uri: logo}}
                                      size={24}
                                      style={styles.avatar} />
                                    <View
                                      style={styles.name}>
                                        <Title
                                          style={styles.titleProfile}>
                                            {profile !== null
                                              ? profile.username
                                              : 'username'}
                                        </Title>
                                    </View>
                                </TouchableOpacity>
                            }
                        </>}
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
        </SafeAreaView>
    );
}


  const mapStateToProps = (state) =>
  {
      return {
          profile: state.Profile.profile,
          error: state.Profile.error,
      };
  };
  const mapDispatchToProps = (dispatch) =>
  {
      return {
          profileAction: () => dispatch(ProfileAction()),
      };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(DrawerContent);
