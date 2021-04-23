/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-alert */
/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Image } from 'react-native';
import { Menu } from 'react-native-paper';
// Component
import KeyboardAvoiding from '../KeyboardAvoiding';
// State Managment Redux
//Styles
import styles from './styles';

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { Button, Input } from '..';
import Colors from '../../../assets/colors';

const places = [
    {
        id: '1',
        city: 'غزة',
    },
    {
        id: '2',
        city: 'رفح',
    },
    {
        id: '3',
        city: 'خانيونس',
    },
    {
        id: '4',
        city: 'الوسطى',
    },
];
const AddressContainer = () => {
    const [city, setCity] = React.useState('غزة');
    const [street, setStreet] = React.useState('');
    const [district, setDistrict] = React.useState('');
    const [nearPlace, setNearPlace] = React.useState('');
    const [visible, setVisible] = React.useState(false);
    const onPressAddress = () =>
    {

    };
    console.log(city);
    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);
    const refSecond = React.useRef();

    return (

         <KeyboardAvoiding style={styles.addressInnerContainer}>
          <View
            style={styles.imageContainer} >
             <Image
               source={require('../../../assets/images/address.png')}
               style={styles.iconImage}
               resizeMode="contain" />
          </View>
          <View
            style={styles.bodyContianer}>
             <View
               style={styles.bodyTitleAndStrock}>
                <View style={styles.strock} />
                <Text style={styles.titleLogin}>إضافة موقعك</Text>
             </View>
             <View
               style={styles.inputContainer}>
                 <Menu
                   visible={visible}
                   onDismiss={closeMenu}
                   style={styles.MenuContainer}
                   contentStyle={styles.dropDownContainer}
                   anchor={<Button
                             active
                             backgroundColor={Colors.mercury}
                             title={city} onPress={openMenu}
                             styleButton={styles.styleRowButtonMenu}
                             titleStyle={styles.titleMenu}
                             children={<SimpleLineIcons name="arrow-down" />}/>}>
                     {places.map((item) => <Menu.Item
                                             key={item.id}
                                             onPress={() => {setCity(item.city); closeMenu();}}
                                             title={item.city}
                                             titleStyle={styles.titleMenu} />)}

                 </Menu>
                 <Input
                   title="الحي"
                   styleTitle={styles.titleInput}
                   returnKeyType="next"
                   onSubmitEditing={() => { refSecond.current.focus(); }}
                   onChangeText={(district) => setDistrict(district)}
                   marginTop={20}
                   autoCapitalize="none" />
                 <Input
                   title="الشارع"
                   styleTitle={styles.titleInput}
                   onChangeText={(street) => setStreet(street)}
                   ref={refSecond}
                   marginTop={20}
                   autoCapitalize="none"  />
                 <Input
                   title="اقرب معلم لك"
                   styleTitle={styles.titleInput}
                   onChangeText={(nearPlace) => setNearPlace(nearPlace)}
                   ref={refSecond}
                   marginTop={20}
                   autoCapitalize="none"  />
             </View>
            <View
              style={styles.buttonContainer} >
            <Button
              active
              title={'تحديد الموقع'}
              onPress={onPressAddress}
              marginBottom={13}
              backgroundColor= {Colors.fernGreen}
              titleStyle={styles.titleButton} />
            </View>
          </View>
       </KeyboardAvoiding>

    );
};


export default AddressContainer;
