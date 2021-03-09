import {StyleSheet} from 'react-native';
import Colors from '../../../assets/colors';
import Fonts from '../../../assets/fonts';

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
        marginTop: 40,
        marginBottom: 50,
    },
    imageLogo:
    {
        width: 65,
        height: 55,
    },
    title:
    {
        fontSize: 18,
        marginTop: 21,
        fontFamily: Fonts.Cairo_Bold,
    },
    BodyContainer:
    {
        marginTop: 20,
    },
    imageBodyContainer:
    {
        width:'100%',
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
