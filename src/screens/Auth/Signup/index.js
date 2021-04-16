/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, Image, SafeAreaView } from 'react-native';
//Component
import { Button, EyeShow, Input } from '../../../components';
//Styles
import styles from './styles';
import Colors from '../../../../assets/colors';
import { connect } from 'react-redux';
import SignupActions from '../../../redux/actions/SignupActions';
import { useNavigation } from '@react-navigation/native';

const Signup = ({SignupAction, signup}) => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [passwordConfirm, setPasswordConfirm] = React.useState('');
    const navigation = useNavigation();
    const refSecond = React.useRef();
    const refThird = React.useRef();
    const refFourth = React.useRef();
    const refFifth = React.useRef();
    //Eye Show
    const [passwordbool, setpasswordbool] = React.useState(true);
    const [passwordboolConfirm, setpasswordboolConfirm] = React.useState(true);
    const [iconConfirm, setIconConfirm] = React.useState('show');
    const [icon, setIcon] = React.useState('show');
    console.log('Sign Up', signup);
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
    //Set Data to Api
    const onPressSignup = () =>
    {
        SignupAction(email, password, phoneNumber);
    };
    return (
        <SafeAreaView
          style={styles.signupContainer}>
        <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false} >
        <KeyboardAvoidingView enabled>
          <View
            style={styles.imageContainer}  >
              <Image
                source={require('../../../../assets/images/Iconbasket.png')}
                resizeMode="contain"
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
               onChangeText={(name) => setName(name)}
               autoCapitalize="none" />
             <Input
                title="رقم الجوال"
                returnKeyType="next"
                onChangeText={(phone) => setPhoneNumber(phone)}
                onSubmitEditing={() => { refThird.current.focus(); }}
                ref={refSecond}
                marginTop={15} />
              <Input
                title="الايميل"
                returnKeyType="next"
                onSubmitEditing={() => { refFourth.current.focus(); }}
                ref={refThird}
                onChangeText={(name) => setName(name)}
                autoCapitalize="none"
                marginTop={15} />
              <Input
                title="كلمة المرور"
                returnKeyType="next"
                onChangeText={(password) => setPassword(password)}
                onSubmitEditing={() => { refFifth.current.focus(); }}
                ref={refFourth}
                secureTextEntry={passwordbool}
                inputStyle={{flex:1}}
                styleRow={styles.inputWithEye}
                children={<EyeShow
                            onPress={_onChangeIcon}
                            name={icon} />}
                marginTop={15}
                autoCapitalize="none" />
              <Input
                title=" تأكيد كلمة المرور"
                returnKeyType="done"
                onChangeText={(passwordConfirm) => setPasswordConfirm(passwordConfirm)}
                ref={refFifth}
                inputStyle={{flex:1}}
                styleRow={styles.inputWithEye}
                secureTextEntry={passwordboolConfirm}
                children={<EyeShow
                            onPress={_onChangeIconConfirm}
                            name={icon} />}
                marginTop={15}
                autoCapitalize="none" />
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
              onPress={onPressSignup}
              marginBottom={13}
              backgroundColor= {Colors.fernGreen}
              titleStyle={styles.titleButton} />
            <Text
               style={styles.andText}>او</Text>
            <View
              style={styles.buttonSocial} >
              <Button
                active
                title="Facebook"
                onPress={() => alert('Facebook')}
                marginBottom={20}
                backgroundColor= {Colors.blueRibbon}
                titleStyle={styles.titleButtonSocail}
                styleButton={styles.buttonStyle} />
              <Button
                active
                title="Gmail"
                onPress={() => alert('Google')}
                backgroundColor= {Colors.Monza}
                titleStyle={styles.titleButtonSocail}
                styleButton={styles.buttonStyle} />
            </View>
            <Button
              title="تسجيل  دخول "
              children={
                <Text
                  style={styles.titleGrayMoveButton}>هل  يوجد لديك حساب ؟</Text>
              }
              styleButton={styles.buttonMovetoSignup}
              titleStyle={styles.titleGreenMoveButton}
              onPress={() => navigation.navigate('Signup')} />
            </View>
          </View>
        </KeyboardAvoidingView>
        </ScrollView>
        </SafeAreaView>
    );
};
const mapStateToProps = state =>
{
  return {
    signup: state.Signup.user,
    error: state.Signup.error,
  };
};
const mapDispatchToProps = dispatch =>
{
  return {
    SignupAction: (email, password, phoneNumber) => dispatch(SignupActions(email, password, phoneNumber)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Signup);
