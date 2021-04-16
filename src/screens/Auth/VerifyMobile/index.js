import { useNavigation } from '@react-navigation/core';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import React from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import Colors from '../../../../assets/colors';
import { Button } from '../../../components';
import styles from './styles';

const VerifyMobile = () => {
    const navigation = useNavigation();
    return (
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false} >
          <KeyboardAvoidingView enabled>
          <SafeAreaView style={styles.verifyMobileContainer}>
                <View style={[styles.verifyView]}>
                    <View style={styles.descriptionAndNumberPhoneContainer}>
                        <Text style={styles.descriptionText}>سوف يتم ارسال لك رسالة نصية على جهازك الخاص لتاكيد من شخصيتك خلال  دقيقتين</Text>
                        <Text style={styles.numberPhoneText}>0594669124</Text>
                    </View>
                    <View
                      style={styles.otpInputViewContainer}>
                    <OTPInputView
                        style={styles.otpInputView}
                        pinCount={4}
                        placeholderTextColor={'black'}
                        autoFocusOnLoad
                        codeInputFieldStyle={styles.codeInputFieldStyle}
                        codeInputHighlightStyle={styles.codeInputHighlight}
                        onCodeFilled = {(code) => {
                            console.log(`Code is ${code}, you are good to go!`);
                        }}

                        keyboardType={'number-pad'}
                    />
                    </View>
                    <View style={styles.buttonConfirmView}>
                    <Button
                      active
                      title={'إرسال'}
                      onPress={() => navigation.navigate('ChangePassword')}
                      marginBottom={13}
                      backgroundColor= {Colors.fernGreen}
                      styleButton={styles.buttonConfirm}
                      titleStyle={styles.titleButton} />
                    </View>
                    <View style={styles.resendView}>
                        <Button
                          title="إعادة إرسال"
                          onPress={() => alert('resent')}
                          titleStyle={styles.resendText} />
                    </View>
                </View>
            </SafeAreaView>
          </KeyboardAvoidingView>
        </ScrollView>
    );
};

export default VerifyMobile;
