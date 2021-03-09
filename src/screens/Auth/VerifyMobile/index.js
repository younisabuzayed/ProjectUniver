import OTPInputView from '@twotalltotems/react-native-otp-input';
import React from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import styles from './styles';

const VerifyMobile = () => {
    return (
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false} >
          <KeyboardAvoidingView enabled>
          <View style={styles.verifyMobileContainer}>
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
                        codeInputHighlightStyle={{borderColor: '#58B760'}}
                        onCodeFilled = {(code) => {
                            console.log(`Code is ${code}, you are good to go!`)
                        }}

                        keyboardType={'number-pad'}
                    />
                    </View>
                    <View style={styles.buttonConfirmView}>
                        <TouchableOpacity
                            style={styles.buttonConfirm}
                            onPress={() => this.confirmNumber()}>
                            <View style={styles.buttonConfirmTextView}>
                                <Text style={styles.buttonConfirmText}>تأكد</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.resendView}>
                        <Text style={styles.resendTitleText}>لم تستلم الكود ؟</Text>
                        <TouchableOpacity
                            onPress={() => alert('resent')}
                        >
                            <Text style={styles.resendText}>إعادة إرسال</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
    );
};

export default VerifyMobile;
