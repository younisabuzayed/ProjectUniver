/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, Image } from 'react-native';
import Colors from '../../../../assets/colors';
import { Button, EyeShow, Input } from '../../../components';
import styles from './styles';

const Signup = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const refSecond = React.useRef();
    const refThird = React.useRef();
    const refFourth = React.useRef();
    //Eye Show
    const [passwordbool, setpasswordbool] = React.useState(true);
    const [passwordboolConfirm, setpasswordboolConfirm] = React.useState(true);
    const [iconConfirm, setIconConfirm] = React.useState('show');
    const [icon, setIcon] = React.useState('show');
    const _onChangeIcon = () =>
    {
        setIcon(icon === 'show' ? 'hide' : 'show');
        setpasswordbool(!passwordbool);
    };
    const _onChangeIconConfirm = () =>
    {
        setIconConfirm(iconConfirm === 'show' ? 'hide' : 'show');
        setpasswordboolConfirm(!passwordboolConfirm);
    };
    const onPressLogin = () =>
    {
        console.log(email, password);
    }
    return (
        <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false} >
        <KeyboardAvoidingView enabled>
        <View
          style={styles.signupContainer}>
          <View
            style={styles.imageContainer}  >
              <Image
                source={require('../../../../assets/images/Iconbasket.png')}
                style={styles.iconImage} />
          </View>
          <View
            style={styles.bodyContianer}>
             <View
               style={styles.bodyTitleAndDescription}>
                <View style={styles.strock} />
                <Text style={styles.titleSignup}>انشاء حساب</Text>
             </View>
             <View
               style={styles.inputContainer}>
             <Input
               title="الاسم"
               returnKeyType="next"
               onSubmitEditing={() => { refSecond.current.focus(); }}
               onChangeText={(email) => setEmail(email)} />
             <Input
                title="رقم الجوال"
                returnKeyType="next"
                onChangeText={(password) => setPassword(password)}
                onSubmitEditing={() => { refThird.current.focus(); }}
                ref={refSecond}
                marginTop={15} />
              <Input
                title="كلمة المرور"
                returnKeyType="next"
                onChangeText={(password) => setPassword(password)}
                onSubmitEditing={() => { refFourth.current.focus(); }}
                ref={refThird}
                secureTextEntry={passwordbool}
                inputStyle={{flex:1}}
                styleRow={styles.inputWithEye}
                children={<EyeShow
                            onPress={_onChangeIcon}
                            name={icon} />}
                marginTop={15} />
              <Input
                title=" تأكيد كلمة المرور"
                returnKeyType="done"
                onChangeText={(password) => setPassword(password)}
                ref={refFourth}
                inputStyle={{flex:1}}
                styleRow={styles.inputWithEye}
                secureTextEntry={passwordboolConfirm}
                children={<EyeShow
                            onPress={_onChangeIconConfirm}
                            name={icon} />}
                marginTop={15} />
             </View>
             <View
               style={styles.agreeTextContainer}>
                 <Text
                   style={styles.agreeText}>هل انت متأكد؟</Text>
             </View>
            <View
              style={styles.buttonContainer} >
            <Button
              active
              title={'انشاء حساب'}
              onPress={onPressLogin}
              marginBottom={13}
              backgroundColor= {Colors.fernGreen}
              titleStyle={styles.titleButton} />
            <Text
               style={styles.andText}>او</Text>
            <View
              style={styles.buttonSocial} >
              <Button
                active
                onPress={() => alert('Facebook')}
                marginBottom={20}
                backgroundColor= {Colors.blueRibbon}
                titleStyle={styles.titleButtonSocail}
                styleButton={styles.buttonStyle}
                children={<Image
                  source={require('../../../../assets/images/IconFacebook.png')}
                  style={styles.iconButton} />} />
              <Button
                active
                onPress={() => alert('Google')}
                backgroundColor= {Colors.Monza}
                titleStyle={styles.titleButtonSocail}
                styleButton={styles.buttonStyle}
                children={<Image
                  source={require('../../../../assets/images/iconGmail.png')}
                  style={styles.iconButton} />} />
            </View>
            </View>
          </View>
        </View>
        </KeyboardAvoidingView>
        </ScrollView>
    );
};

export default Signup;
