import {Dimensions, StyleSheet} from 'react-native';
import Colors from '../../../../assets/colors';
import Fonts from '../../../../assets/fonts';
const {height} = Dimensions.get('window');
const styles = StyleSheet.create({
    loginContainer:
    {
        flex: 1,
        height,
        backgroundColor: Colors.white,
    },
    imageContainer:
    {
        flex: 0.40,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    iconImage:
    {
        height: 93,
        width: 109,
    },
    titleHeaderContainer:
    {
        marginTop: 15,
        marginBottom: 65,
    },
    titleHeader:
    {
        width: 200,
        fontSize: 18,
        lineHeight: 30,
        fontFamily: Fonts.Cairo_Bold,
        textAlign: 'center',
    },
    bodyContianer:
    {
        flex: 0.80,
        alignItems: 'center',
        marginLeft: 15,
        marginRight: 15,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        backgroundColor: Colors.grally,
    },
    bodyTitleAndStrock:
    {
        flex: 0.10,
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
    },
    titleLogin:
    {
        fontSize: 14,
        lineHeight: 30,
        marginTop: 10,
        fontFamily: Fonts.Cairo_Regular,
        color: '#202020',
    },
    inputContainer:
    {
        flex: 0.45,
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
        fontSize: 12,
        lineHeight: 30,
        fontFamily: Fonts.Cairo_Regular,
        color: Colors.carnation,
    },
    buttonContainer:
    {
        width:'100%',
        paddingBottom:10,
        paddingTop: 25,
        flex: 0.5,
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
        fontSize: 18,
        fontFamily: Fonts.Roboto_Regular,
        color: Colors.white,
    },
    buttonStyle:
    {
        height: 32,
        width: 32,
        borderRadius: 16,
        marginLeft: 15,
        marginRight: 15,
    },
    iconButton:
    {
        height: 18,
        width: 18,
    },
});

export default styles;
