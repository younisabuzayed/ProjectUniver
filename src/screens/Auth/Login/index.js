/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-alert */
/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, Image, SafeAreaView, Linking, Alert } from 'react-native';
import { connect } from 'react-redux';
// Component
import { Button, EyeShow, Input } from '../../../components';
// State Managment Redux
import LoginActions from '../../../redux/actions/LoginActions';
//Styles
import styles from './styles';
import Colors from '../../../../assets/colors';
import { useNavigation } from '@react-navigation/native';
import KeyboardAvoiding from '../../../components/KeyboardAvoiding';
const url = 'https://sala-backend.herokuapp.com/connect/facebook/redirect';
const Login = ({LoginAction, login,error}) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const _handleURL = (event) => {
      console.log(event.url);
      // Bit of a hack to get the token from this URL...
      // implement yours in a safer way
      console.log(event.url.split('#')[1].split('=')[1].split('&')[0]);
    };
    const _facebookLogin =() => {
      Linking.openURL([
        url,
        '?response_type=token',
        '&client_id='+'1247676148624015',
        '&redirect_uri=fb1247676148624015://authorize',
        '$scope=email' // Specify permissions
      ].join(''));
    }
    React.useEffect(() => {
      Linking.addEventListener('url', _handleURL);
    }, []);
    React.useEffect(() =>
    {
      if(login?.jwt)
      {
        navigation.navigate('Main');
      }
    },[login])
    const refSecond = React.useRef();
    //Navigation
    const navigation = useNavigation();
    //Eye Show
    const [passwordbool, setpasswordbool] = React.useState(true);
    const [icon, setIcon] = React.useState('show');
    const _onChangeIcon = () =>
    {
        setIcon(icon === 'show' ? 'hide' : 'show');
        setpasswordbool(!passwordbool);
    };

    //Function For send data for Api
    const onPressLogin = () =>
    {
      LoginAction(email,password);

    };
    return (

      <SafeAreaView
        style={styles.loginContainer}>
         <KeyboardAvoiding>
          <View
            style={styles.imageContainer} >
             <Image
               source={require('../../../../assets/images/Iconbasket.png')}
               style={styles.iconImage}
               resizeMode="contain" />
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
               onChangeText={(email) => setEmail(email)}
               autoCapitalize="none" />
             <Input
               title="كلمة المرور"
               styleTitle={styles.titleInput}
               onChangeText={(password) => setPassword(password)}
               returnKeyType="done"
               ref={refSecond}
               marginTop={10}
               inputStyle={{flex:1}}
               styleRow={styles.inputWithEye}
               secureTextEntry={passwordbool}
               children={<EyeShow
                            onPress={_onChangeIcon}
                            name={icon} />}
               autoCapitalize="none"  />
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
                title="Gmail"
                onPress={() => alert('Google')}
                backgroundColor= {Colors.Monza}
                titleStyle={styles.titleButtonSocail}
                styleButton={styles.buttonStyle} />
              <Button
                active
                title="Facebook"
                marginBottom={20}
                backgroundColor= {Colors.blueRibbon}
                titleStyle={styles.titleButtonSocail}
                styleButton={styles.buttonStyle}
                onPress={_facebookLogin} />
            </View>
            <Button
              title="انشاء حساب جديد"
              children={
                <Text
                  style={styles.titleGrayMoveButton}>هل لا يوجد لك حساب ؟</Text>
              }
              styleButton={styles.buttonMovetoSignup}
              titleStyle={styles.titleGreenMoveButton}
              onPress={() => navigation.navigate('Signup')} />
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
export default connect(mapStateToProps, mapDispatchToProps)(Login);
/*import React from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, Image, SafeAreaView, Linking, Alert } from 'react-native';
import { connect } from 'react-redux';
import { LoginButton, AccessToken } from 'react-native-fbsdk-next';

// Component
import { Button, EyeShow, Input } from '../../../components';
// State Managment Redux
import LoginActions from '../../../redux/actions/LoginActions';
//Styles
import styles from './styles';
import Colors from '../../../../assets/colors';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Login = ({LoginAction, login,error}) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    React.useEffect(() => {
      if (login?.jwt)
      {
        navigation.navigate('Main');
      }
    }, [login]);
    const refSecond = React.useRef();
    //Navigation
    const navigation = useNavigation();
    //Eye Show
    const [passwordbool, setpasswordbool] = React.useState(true);
    const [icon, setIcon] = React.useState('show');
    const _onChangeIcon = () =>
    {
        setIcon(icon === 'show' ? 'hide' : 'show');
        setpasswordbool(!passwordbool);
    };

    //Function For send data for Api
    const onPressLogin = async() =>
    {
      LoginAction(email,password);
    };
   const initUser = (token) => {
      fetch('https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=' + token)
      .then((response) => (response.json()))
      .then((json) => {
        // Some user object has been set up somewhere, build that user here
        console.log('user info', json);
      })
      .catch(() => {
        console.log('ERROR GETTING DATA FROM FACEBOOK');
      });
    };
    return (
        <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false} >
        <KeyboardAvoidingView enabled>
        <SafeAreaView
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
               onChangeText={(email) => setEmail(email)}
               autoCapitalize="none" />
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
                            name={icon} />}
               autoCapitalize="none"  />
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
              <LoginButton
                publishPermissions={['publish_actions']}
                permissions={['public_profile']}
                onLoginFinished={
                  (error, result) => {
                    if (error) {
                      console.log('login has error: ' + result.error);
                    } else if (result.isCancelled) {
                      console.log('login is cancelled.');
                    } else {
                      AccessToken.getCurrentAccessToken().then(
                        (data) => {
                          const {accessToken} = data;
                          console.log(data.accessToken.toString());
                          initUser(accessToken);
                        }
                      );
                    }
                  }
                }
                onLogoutFinished={() => console.log('logout.')}/>
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
        </SafeAreaView>
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
*/