import {PixelRatio, StyleSheet} from 'react-native';
import Colors from '../../../assets/colors';
import Fonts from '../../../assets/fonts';
import {hp, wp} from '../../../assets/size';
const styles = StyleSheet.create({
    AccessContainer:
    {
        flex: 1,
        backgroundColor: Colors.white,
    },
    HeaderContainer:
    {
        width:'100%',
        alignItems: 'center',
        marginBottom: 20,
    },
    imageLogo:
    {
        height: hp(20),
        width: '100%',
    },
    title:
    {
        fontSize: 18,
        fontFamily: Fonts.Cairo_Bold,
        color: Colors.titleProduct,
    },
    BodyContainer:
    {
        marginTop: PixelRatio.get() === 2 ? 0 : 20,
    },
    imageBodyContainer:
    {
        width:wp('100%'),
        alignItems:'center',
    },
    imageBody:
    {
        width: '100%',
        height: 248,
    },
    buttonsContainer:
    {
        marginTop: 70,
        marginLeft: 20,
        marginRight: 20,
    },
    buttonLogin:
    {
        backgroundColor: Colors.fernGreen,
    },
    buttonLoginTitle:
    {
        color: Colors.white,
        fontSize: 14,
        fontFamily: Fonts.Cairo_Bold,
    },
    buttonSignup:
    {
        backgroundColor: Colors.altoApprox,
        marginTop: 18,
    },
    buttonSignupTitle:
    {
        color: Colors.balck,
        fontSize: 14,
        fontFamily: Fonts.Cairo_Bold,
    },
    guestAccess:
    {
        marginTop: 18,
    },
    guestAccessTitle:
    {
        fontSize: 14,
        fontFamily: Fonts.Cairo_Regular,
    },
});
export default styles;
