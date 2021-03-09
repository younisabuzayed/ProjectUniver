/* eslint-disable no-alert */
/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, Image } from 'react-native';
import { connect } from 'react-redux';
// Component
import { Button, EyeShow, Input } from '../../../components';
// State Managment Redux
import LoginActions from '../../../redux/actions/LoginActions';
//Styles
import styles from './styles';
import Colors from '../../../../assets/colors';
import { useNavigation } from '@react-navigation/native';

const Login = ({LoginAction, login,error}) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const refSecond = React.useRef();
    //Navigation
    const navigation = useNavigation()
    //Eye Show
    const [passwordbool, setpasswordbool] = React.useState(true);
    const [icon, setIcon] = React.useState('show');
    const _onChangeIcon = () =>
    {
        setIcon(icon === 'show' ? 'hide' : 'show');
        setpasswordbool(!passwordbool);
    };

    console.log(login);
    //Function For send data for Api
    const onPressLogin = () =>
    {
      LoginAction(email,password);
      console.log({email, password});

    };
    return (
        <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false} >
        <KeyboardAvoidingView enabled>
        <View
          style={styles.loginContainer}>
          <View
            style={styles.imageContainer} >
             <Image
               source={require('../../../../assets/images/Iconbasket.png')}
               style={styles.iconImage} />
              <View
                style={styles.titleHeaderContainer}>
                  <Text
                    style={styles.titleHeader}>مرحبا بعودتك مرة أخرى يا صديقي</Text>
              </View>
          </View>
          <View
            style={styles.bodyContianer}>
             <View
               style={styles.bodyTitleAndStrock}>
                <View style={styles.strock} />
                <Text style={styles.titleLogin}>تسجيل دخول</Text>
             </View>
             <View
               style={styles.inputContainer}>
             <Input
               title="اسم المستخدم"
               styleTitle={styles.titleInput}
               returnKeyType="next"
               onSubmitEditing={() => { refSecond.current.focus(); }}
               onChangeText={(email) => setEmail(email)} />
             <Input
               title="كلمة المرور"
               styleTitle={styles.titleInput}
               onChangeText={(password) => setPassword(password)}
               returnKeyType="done"
               ref={refSecond}
               inputStyle={{flex:1}}
               styleRow={styles.inputWithEye}
               secureTextEntry={passwordbool}
               children={<EyeShow
                            onPress={_onChangeIcon}
                            name={icon} />} />
             <View
               style={styles.forgetPasswordView} >
              <Button
                title={'هل نسيت كلمة السر ؟ '}
                onPress={() => navigation.navigate('ForgotPasssword')}
                titleStyle={styles.titleforgetPassword} />
             </View>
             </View>
            <View
              style={styles.buttonContainer} >
            <Button
              active
              title={'تسجيل دخول'}
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
export default connect(mapStateToProps, mapDispatchToProps)(Login);
