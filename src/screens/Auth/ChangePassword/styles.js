import {Dimensions, StyleSheet} from 'react-native';
import Colors from '../../../../assets/colors';
import Fonts from '../../../../assets/fonts';
const {height} = Dimensions.get('window');
const styles = StyleSheet.create({
    changePasswordContainer:
    {
        flex: 1,
        height,
        backgroundColor: Colors.white,
    },
    imageContainer:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconImage:
    {
        height: 250,
        width: '100%',
    },
    bodyContianer:
    {
        flex: 0.90,
        alignItems: 'center',
        marginLeft: 15,
        marginRight: 15,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        backgroundColor: Colors.grally,
    },
    bodyTitleAndDescription:
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
    },
    agreeTextContainer:
    {
        width: '100%',
        paddingLeft: 53,
        paddingRight: 40,
        marginTop: 34,
    },
    agreeText:
    {
        fontSize: 9,
        lineHeight: 30,
        fontFamily: Fonts.Cairo_Regular,
        color:'#9C9C9C',
    },
    buttonContainer:
    {
        width:'100%',
        paddingBottom:10,
        flex: 0.5,
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
    buttonSocial:
    {
        flexDirection:'row',
        justifyContent:'center',
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
