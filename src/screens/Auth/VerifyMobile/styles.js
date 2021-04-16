import {Dimensions, StyleSheet} from 'react-native';
import Colors from '../../../../assets/colors';
import Fonts from '../../../../assets/fonts';
const {height} = Dimensions.get('window');
const styles = StyleSheet.create({
    verifyMobileContainer:
    {
        flex: 1,
        height,
        backgroundColor: Colors.white,
    },
    descriptionAndNumberPhoneContainer:
    {
        width: '100%',
        marginTop: 72,
        alignItems: 'center',
    },
    descriptionText:
    {
        fontSize: 12,
        fontFamily: Fonts.Cairo_Regular,
        width: 250,
        textAlign:'center',
    },
    numberPhoneText:
    {
        fontSize: 12,
        fontFamily: Fonts.Cairo_Regular,
        width: 250,
        textAlign:'center',
        marginTop: 19,
    },
    otpInputViewContainer:
    {
        width: '100%',
        alignItems: 'center',
        marginTop: 66,
    },
    otpInputView:
    {
        width: '68%',
        flexDirection: 'row-reverse',
    },
    codeInputFieldStyle:
    {
        width: 47,
        height: 51,
        borderRadius: 8,
        backgroundColor: '#ECECEC',
        color: Colors.balck,
        fontFamily: Fonts.Cairo_Regular,
    },
    codeInputHighlight:
    {
        borderColor: '#58B760',
    },
    buttonConfirmView:
    {
        marginTop: 70,
    },
    buttonConfirm:
    {
        marginLeft: 54,
        marginRight: 54,
    },
    titleButton:
    {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: Fonts.Roboto_Bold,
        color: Colors.white,
    },
    resendView:
    {
        marginTop: 43,
    },
    resendText:
    {
        fontSize: 12,
        lineHeight: 30,
        fontFamily: Fonts.Cairo_Regular,
        color: Colors.balck,
    },
});

export default styles;
