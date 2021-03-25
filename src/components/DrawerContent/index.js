/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Drawer,
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Colors from '../../../assets/colors';

// import{ AuthContext } from '../components/context';

 function DrawerContent({navigation},props) {

    const paperTheme = useTheme();

    // const { signOut, toggleTheme } = React.useContext(AuthContext);

    return(
        <View style={styles.drawerContentContainer}>
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
                                <Title style={styles.title}>John Doe</Title>
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
                            onPress={() => {navigation.navigate('Profile')}}
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
                            onPress={() => {navigation.navigate('FavoriteScreen')}}
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
                            onPress={() => {navigation.navigate('OrderScreen')}}
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
                            onPress={() => {navigation.navigate('CartScreen')}}
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
                            onPress={() => {navigation.navigate('BookmarkScreen')}}
                            labelStyle={styles.lableMargin} />
                        <DrawerItem
                           icon={({color, size}) => (
                             <FontAwesome
                               name="sign-out"
                               color={color}
                               size={size}
                              />
                            )}
                            label="الخروج"
                            onPress={() => alert('sdd')}
                            labelStyle={styles.lableMargin} />
                        <DrawerItem
                            label="إضافة حساب تاجر"
                            labelStyle={styles.lableAddTrader }
                            onPress={() => navigation.navigate('CommercialRegister')} />
                    </Drawer.Section>
                    {/* <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => {alert('dsdsd')}}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={paperTheme.dark}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section> */}
                </View>
            </DrawerContentScrollView>
            {/* <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({color, size}) => (
                        <Icon
                        name="exit-to-app"
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => alert('sdd')}
                />
            </Drawer.Section> */}
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContentContainer:
    {
        flex:1,
        backgroundColor:Colors.white,
        marginLeft:20,
    },
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      justifyContent:'center',
      alignItems:'center',
      marginTop: 30,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    lableMargin:
    {
        marginLeft: -25,
    },
    lableAddTrader:
    {
        textAlign:'center',
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });

  export default DrawerContent;
