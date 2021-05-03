/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, SafeAreaView } from 'react-native';
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
function DrawerContentSeller({ profileAction, profile, error},props) {
    const navigation = useNavigation();
    React.useEffect(() =>
    {
        profileAction();
    },[]);
    const logout = async () =>
    {
        await AsyncStorage.clear();
        navigation.navigate('Access');
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
                                source={{uri: logo}}
                                size={80} />
                            <View
                              style={styles.name}>
                                <Title
                                  style={styles.title}>
                                    {profile !== null
                                      ? profile.username
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
                          onPress={() => {navigation.navigate('BookmarkScreen');}}
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
                         && <DrawerItem
                              icon={({color, size}) => (
                                <FontAwesome
                                  name="sign-out"
                                  color={color}
                                  size={size} />
                              )}
                              label="الخروج"
                              onPress={logout}
                              labelStyle={styles.lableMargin} />}
                        {profile !== null
                         && <View
                              style={styles.mainProfile}>
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
                            </View>}
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
  export default connect(mapStateToProps, mapDispatchToProps)(DrawerContentSeller);