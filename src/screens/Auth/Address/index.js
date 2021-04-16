/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-alert */
/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Image, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
// Component
import { Button, Input } from '../../../components';
import KeyboardAvoiding from '../../../components/KeyboardAvoiding';
import { Menu } from 'react-native-paper';
// State Managment Redux
import LoginActions from '../../../redux/actions/LoginActions';
//Styles
import styles from './styles';
import Colors from '../../../../assets/colors';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

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
const Address = ({LoginAction, login,error}) => {
    const [city, setCity] = React.useState('غزة');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [visible, setVisible] = React.useState(false);
    console.log(city);
    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);
    const refSecond = React.useRef();
    //Navigation
    const navigation = useNavigation();

    //Function For send data for Api
    const onPressAddress = () =>
    {
      LoginAction(email,password);

    };
    return (

      <SafeAreaView
        style={styles.addressContainer}>
         <KeyboardAvoiding style={styles.addressInnerContainer}>
          <View
            style={styles.imageContainer} >
             <Image
               source={require('../../../../assets/images/address.png')}
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
                   onChangeText={(email) => setEmail(email)}
                   marginTop={20}
                   autoCapitalize="none" />
                 <Input
                   title="الشارع"
                   styleTitle={styles.titleInput}
                   onChangeText={(password) => setPassword(password)}
                   ref={refSecond}
                   marginTop={20}
                   autoCapitalize="none"  />
                 <Input
                   title="اقرب معلم لك"
                   styleTitle={styles.titleInput}
                   onChangeText={(password) => setPassword(password)}
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
      </SafeAreaView>

    );
};
const mapStateToProps = state =>
{
  return {
    login: state.Login.user,
    error: state.Login.error,
  };
};
const mapDispatchToProps = dispatch =>
{
  return {
    LoginAction: (email, password) => dispatch(LoginActions(email, password)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Address);
