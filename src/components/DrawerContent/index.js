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
import RNRestart from 'react-native-restart';
import ProfileShopAction from '../../redux/actions/ProfileShopAction';

//Styles and Icons
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

const logo = 'https://mostaql.hsoubcdn.com/uploads/539862-dj0ow-1558106924-5cded32cf36b5.jpg';

function DrawerContent({  profileAction, profile, profileShopAction, profileShop, error, extraData},props) {
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
        profileShopAction();
    },[]);
    // console.log('Drawer',profile)
    const logout = async (extraData, navigation) =>
    {
        await AsyncStorage.clear();
        extraData.setIsloggedIn(false);
        RNRestart.Restart();
        // navigation.navigate('Access');
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
    console.log(profile);
    const ShopContainer = () =>
    {
      if (profile !== null && profileShop !== null)
      {
        const shop_selected = Object.values(profileShop).filter((_)=> _);
        const selected = shop_selected.filter((_) => _.id === profile.seller)[0];
        return (
          <TouchableOpacity
            style={styles.mainProfile}
            onPress={() => navigation.navigate('SellerScreen')} >
              <Avatar.Image
                source={selected.logo.length !== 0 ? {uri: selected.logo.url} :  require('../../../assets/images/restaurant.png')}
                size={24}
                style={styles.avatar} />
              <View
                style={styles.name}>
                  <Title
                    style={styles.titleProfile}>
                      {profile !== null
                        ? selected.shop_name
                        : 'username'}
                  </Title>
              </View>
          </TouchableOpacity>
        )
      } else {
        return null
      }
    }
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
                                source={profile && profile.profile_image !== undefined ? {uri: profile.profile_image.url} : require('../../../assets/images/person.png')}
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
                                <Entypo
                                  name="shop"
                                  color={color}
                                  size={size} />
                            )}
                            label="المحلات التجارية"
                            onPress={() => onPressNavigations('Allshops')}
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
                        {profile !== null && <DrawerItem
                                icon={({color, size}) => (
                                    <FontAwesome
                                      name="sign-out"
                                      color={color}
                                      size={size} />
                            )}
                            label="الخروج"
                            onPress={() =>logout(extraData, navigation)}
                            labelStyle={styles.lableMargin} />}
                        {token && <>
                            {profile && profile.seller === null
                              ? <DrawerItem
                                  label="إضافة حساب تاجر"
                                  labelStyle={styles.lableAddTrader }
                                  onPress={() => navigation.navigate('CommercialRegister')} />
                              : <ShopContainer />
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
        profileShop: state.ProfileShop.profileShop,

    };
};
const mapDispatchToProps = (dispatch) =>
{
    return {
        profileAction: () => dispatch(ProfileAction()),
        profileShopAction: () => dispatch(ProfileShopAction()),
    };
};
  export default connect(mapStateToProps, mapDispatchToProps)(DrawerContent);
