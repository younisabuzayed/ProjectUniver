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
import ProfileShopAction from '../../redux/actions/ProfileShopAction';
const logo = 'https://mostaql.hsoubcdn.com/uploads/539862-dj0ow-1558106924-5cded32cf36b5.jpg';
function DrawerContentSeller({ profileAction, profile, profileShopAction, profileShop},props) {
    const navigation = useNavigation();
    React.useEffect(() =>
    {
        profileAction();
        profileShopAction();
    },[]);

    if (profile !== null && profileShop !== null)
   {
    const shop_selected = Object.values(profileShop).filter((_)=> _);
    const selected = shop_selected.filter((_) => _.id === profile.seller)[0];
    console.log(selected)
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
                                source={selected.logo.length !== 0 ? {uri: selected.logo.url} :  require('../../../assets/images/restaurant.png')}
                                size={80} />
                            <View
                              style={styles.name}>
                                <Title
                                  style={styles.title}>
                                    {profile !== null
                                      ? selected.shop_name
                                      : 'username'}
                                </Title>
                            </View>
                    </View>

                    <Drawer.Section
                      style={styles.drawerSection}>
                        <DrawerItem
                          icon={({color, size}) => (
                             <Icon
                                name="account-outline"
                                color={color}
                                size={size} />
                          )}
                          label="المعلومات الشخصية"
                          onPress={() => {navigation.navigate('EditProfile');}}
                          labelStyle={styles.lableMargin} />
                        {/* <DrawerItem
                            icon={({color, size}) => (
                                <FontAwesome5
                                name="box"
                                color={color}
                                size={size} />
                            )}
                            label="المنتجات"
                            onPress={() => {navigation.navigate('FavoriteScreen');}}
                            labelStyle={styles.lableMargin} /> */}
                        <DrawerItem
                          icon={({color, size}) => (
                            <FontAwesome5
                              name="clipboard-list"
                              color={color}
                              size={size} />
                          )}
                          label="الطلبات"
                          onPress={() => {navigation.navigate('OrderScreen');}}
                          labelStyle={styles.lableMargin} />
                        <DrawerItem
                          icon={({color, size}) => (
                            <MaterialIcons
                              name="dashboard"
                              color={color}
                              size={size} />
                          )}
                          label="الاحصائيات"
                          onPress={() => {navigation.navigate('Dashboard');}}
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
                        {profile !== null
                         && <TouchableOpacity
                              style={styles.mainProfile}
                              onPress={() =>navigation.navigate('Main')} >
                                <Avatar.Image
                                  source={profile.profile_image.length !== 0  ? {uri: profile.profile_image.url} : require('../../../assets/images/person.png')}
                                  size={24}
                                  style={styles.avatar} />
                            <View
                              style={styles.name}>
                                <Title
                                  style={styles.titleProfile}>
                                    {profile !== null
                                      ? profile.fullname
                                      : 'username'}
                                </Title>
                            </View>
                            </TouchableOpacity>}
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
        </SafeAreaView>
    );
  }
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
  export default connect(mapStateToProps, mapDispatchToProps)(DrawerContentSeller);
