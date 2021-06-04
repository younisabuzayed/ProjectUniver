import {StyleSheet} from 'react-native';
import Colors from '../../../../assets/colors';
import Fonts from '../../../../assets/fonts';
import { hp } from '../../../../assets/size';
const styles = StyleSheet.create({
    signupContainer:
    {
        flex: 1,
        backgroundColor: Colors.white,
    },
    imageContainer:
    {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
    },
    iconImage:
    {
        height: hp(15),
        width: '100%',
    },
    bodyContianer:
    {
        alignItems: 'center',
        marginLeft: 15,
        marginRight: 15,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        backgroundColor: Colors.grally,
    },
    bodyTitleAndDescription:
    {
        width: '100%',
        alignItems: 'center',
        paddingTop: 18.5,
    },
    strock:
    {
        height: 5,
        width: 101,
        backgroundColor: Colors.strok,
        marginTop: 9,
    },
    titleSignup:
    {
        fontSize: 18,
        lineHeight: 24,
        marginTop: 10,
        fontFamily: Fonts.Cairo_Regular,
        color: '#202020',
    },
    inputContainer:
    {
        width: '100%',
        justifyContent: 'space-around',
        paddingTop: 40,
        paddingBottom: 15,
    },
    inputWithEye:
    {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        backgroundColor: Colors.mercury,
        borderRadius: 8,
    },
    agreeTextContainer:
    {
        width: '100%',
        paddingLeft: 53,
        paddingRight: 40,
        marginTop: 10,
    },
    agreeText:
    {
        fontSize: 9,
        lineHeight: 30,
        fontFamily: Fonts.Cairo_Regular,
        color:'#9C9C9C',
        writingDirection: 'rtl',
    },
    buttonContainer:
    {
        width:'100%',
        paddingBottom:10,
        marginTop: 15,
    },
    titleButton:
    {
        fontSize: 18,
        lineHeight: 24,
        fontFamily: Fonts.Roboto_Bold,
        color: Colors.white,
    },
    andText:
    {
        fontSize: 12,
        marginBottom: 13,
        fontFamily: Fonts.Cairo_Regular,
        textAlign: 'center',
    },
    titleButtonSocail:
    {
        fontSize: 14,
        fontFamily: Fonts.Cairo_Bold,
        color: Colors.white,
    },
    buttonSocial:
    {
        flexDirection:'row',
        justifyContent:'center',
        marginBottom: 10,
    },
    buttonStyle:
    {
        height: 40,
        width: 130,
        borderRadius: 8,
        marginLeft: 15,
        marginRight: 15,
    },
    buttonMovetoSignup:
    {
        flexDirection: 'row',
    },
    titleGrayMoveButton:
    {
        fontSize: 9,
        fontFamily: Fonts.Cairo_Regular,
        color: Colors.titleProduct,
    },
    titleGreenMoveButton:
    {
        fontSize: 9,
        fontFamily: Fonts.Cairo_Bold,
        color: Colors.fernGreen,
    },

});

export default styles;
