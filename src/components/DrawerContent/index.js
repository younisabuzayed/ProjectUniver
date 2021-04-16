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

function DrawerContent({ profileAction, profile, error},props) {
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
        <SafeAreaView style={styles.drawerContentContainer}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                            <Avatar.Image
                                source={{
                                    uri: 'https://api.adorable.io/avatars/50/abott@adorable.png',
                                }}
                                size={50}
                            />
                            <View style={{alignItems:'center'}}>
                                <Title style={styles.title}>{profile !== null ? profile.username : 'username'}</Title>
                            </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                name="account-outline"
                                color={color}
                                size={size}
                                />
                            )}
                            label="المعلومات الشخصية"
                            onPress={() => {navigation.navigate('ProfileScreen');}}
                            labelStyle={styles.lableMargin} />
                        <DrawerItem
                            icon={({color, size}) => (
                                <MaterialIcons
                                name="favorite"
                                color={color}
                                size={size}
                                />
                            )}
                            label="المفضلة"
                            onPress={() => {navigation.navigate('FavoriteScreen');}}
                            labelStyle={styles.lableMargin} />
                        <DrawerItem
                            icon={({color, size}) => (
                                <FontAwesome5
                                name="clipboard-list"
                                color={color}
                                size={size}
                                />
                            )}
                            label="الطلبات"
                            onPress={() => {navigation.navigate('OrderScreen');}}
                            labelStyle={styles.lableMargin} />
                        <DrawerItem
                            icon={({color, size}) => (
                                <FontAwesome5
                                name="shopping-cart"
                                color={color}
                                size={size}
                                />
                            )}
                            label="السلة"
                            onPress={() => {navigation.navigate('CartScreen');}}
                            labelStyle={styles.lableMargin} />
                        <DrawerItem
                            icon={({color, size}) => (
                                <MaterialIcons
                                name="language"
                                color={color}
                                size={size}
                                />
                            )}
                            label="اللغة"
                            onPress={() => {alert('ستتوفر قريبا');}}
                            labelStyle={styles.lableMargin} />
                        <DrawerItem
                            icon={({color, size}) => (
                                <MaterialIcons
                                name="send"
                                color={color}
                                size={size}
                                />
                            )}
                            label="الدعم الفني"
                            onPress={() => {navigation.navigate('BookmarkScreen');}}
                            labelStyle={styles.lableMargin} />
                        <DrawerItem
                            icon={({color, size}) => (
                                <FontAwesome
                                name="align-right"
                                color={color}
                                size={size}
                                />
                            )}
                            label="السياسات والشروط"
                            onPress={() => {navigation.navigate('BookmarkScreen');}}
                            labelStyle={styles.lableMargin} />
                       { profile !== null && <DrawerItem
                           icon={({color, size}) => (
                             <FontAwesome
                               name="sign-out"
                               color={color}
                               size={size}
                              />
                            )}
                            label="الخروج"
                            onPress={logout}
                            labelStyle={styles.lableMargin} />}
                        <DrawerItem
                            label="إضافة حساب تاجر"
                            labelStyle={styles.lableAddTrader }
                            onPress={() => navigation.navigate('CommercialRegister')} />
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
