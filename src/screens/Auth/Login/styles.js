import {Dimensions, StyleSheet, PixelRatio, Platform} from 'react-native';
import Colors from '../../../../assets/colors';
import Fonts from '../../../../assets/fonts';
const {height} = Dimensions.get('window');
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    loginContainer:
    {
        flex: 1,
        backgroundColor: Colors.white,
        height: PixelRatio.get() === 3 ? hp('100%') : Platform.OS === 'android' ? hp('100%') : null,
    },
    loginInnerContainer:
    {
        height: height - (PixelRatio.get() === 3 ? 80 : 25) ,
        justifyContent: 'flex-end',
    },
    imageContainer:
    {
        alignItems: 'center',
    },
    iconImage:
    {
        height: hp(17),
        width: wp(12),
    },
    titleHeaderContainer:
    {
        marginBottom: hp(5),
    },
    titleHeader:
    {
        width: 200,
        fontSize: 18,
        fontFamily: Fonts.Cairo_Bold,
        textAlign: 'center',
        color: Colors.titleProduct,
    },
    bodyContianer:
    {
        alignItems: 'center',
        marginLeft: 15,
        marginRight: 15,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        backgroundColor: Colors.grally,
        height: 478,
    },
    bodyTitleAndStrock:
    {
        height: 50,
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
        borderRadius: 4,
    },
    titleLogin:
    {
        fontSize: 14,
        marginTop: 10,
        fontFamily: Fonts.Cairo_Regular,
        color: '#202020',
    },
    inputContainer:
    {
        width: '100%',
        justifyContent: 'space-around',
        paddingTop:9,
        marginTop: 30,
    },
    titleInput:
    {
        fontSize: 12,
        lineHeight: 16,
        color: Colors.mineShaft,
        paddingRight: 5,
        fontFamily: Fonts.Cairo_Regular,
    },
    inputWithEye:
    {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        backgroundColor: Colors.mercury,
        borderRadius: 8,
    },
    iconEyeButton:
    {
        width: 24,
        height: 24,
        marginRight: 13,
        marginLeft: 13,
        backgroundColor:'red',
    },
    forgetPasswordView:
    {
        alignItems:'flex-start',
        marginTop: 18,
    },
    titleforgetPassword:
    {
        fontSize: 9,
        lineHeight: 30,
        fontFamily: Fonts.Cairo_Regular,
        color: Colors.carnation,
    },
    buttonContainer:
    {
        width:'100%',
        paddingBottom:10,
        paddingTop: 10,
    },
    titleButton:
    {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: Fonts.Cairo_Bold,
        color: Colors.white,
    },
    buttonSocial:
    {
        flexDirection:'row',
        justifyContent:'center',
    },
    andText:
    {
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 13,
        fontFamily: Fonts.Cairo_Regular,
    },
    titleButtonSocail:
    {
        fontSize: 14,
        fontFamily: Fonts.Cairo_Bold,
        color: Colors.white,
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
    iconButton:
    {
        height: 18,
        width: 18,
    },
});

export default styles;
