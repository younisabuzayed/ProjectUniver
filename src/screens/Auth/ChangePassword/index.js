/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, Image } from 'react-native';
import Colors from '../../../../assets/colors';
import { Button, EyeShow, Input } from '../../../components';
import styles from './styles';

const ChangePassword = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
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
          style={styles.changePasswordContainer}>
          <View
            style={styles.imageContainer}  >
              <Image
                source={require('../../../../assets/images/forgetImage.png')}
                style={styles.iconImage}
                resizeMode="contain" />
          </View>
          <View
            style={styles.bodyContianer}>
             <View
               style={styles.bodyTitleAndDescription}>
                <View style={styles.strock} />
                <Text style={styles.titleSignup}>تعين كلمة مرور جديدة</Text>
             </View>
             <View
               style={styles.inputContainer}>
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
              style={styles.buttonContainer} >
            <Button
              active
              title={'حفظ'}
              onPress={onPressLogin}
              marginBottom={13}
              backgroundColor= {Colors.fernGreen}
              titleStyle={styles.titleButton} />
           
            </View>
          </View>
        </View>
        </KeyboardAvoidingView>
        </ScrollView>
    );
};

export default ChangePassword;
