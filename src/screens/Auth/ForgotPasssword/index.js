/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, Image } from 'react-native';
import Colors from '../../../../assets/colors';
import { Button, EyeShow, Input } from '../../../components';
import styles from './styles';

const ForgotPasswprd = () => {
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const navigation = useNavigation();
    const onPressPhone = () =>
    {
      navigation.navigate('VerifyMobile');
      console.log(phoneNumber);
    }
    return (
        <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false} >
        <KeyboardAvoidingView enabled>
        <View
          style={styles.ForgotPasswordContainer}>
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
               style={styles.bodyTitleAndStrock}>
                <View style={styles.strock} />
                <Text style={styles.titleSignup}>إضافة رقم الجوال</Text>
             </View>
             <View
               style={styles.inputContainer}>
             <Input
                title="رقم الجوال"
                onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
                marginTop={15} />
             </View>
            <View
              style={styles.buttonContainer} >
            <Button
              active
              title={'ارسال'}
              onPress={onPressPhone}
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

export default ForgotPasswprd;
