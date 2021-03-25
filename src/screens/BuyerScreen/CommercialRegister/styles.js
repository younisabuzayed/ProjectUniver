import {Dimensions, StyleSheet} from 'react-native';
import Colors from '../../../../assets/colors';
import Fonts from '../../../../assets/fonts';
const {height} = Dimensions.get('window');
const styles = StyleSheet.create({
    signupContainer:
    {
        flex: 1,
        height,
        backgroundColor: Colors.white,
    },
    bodyContianer:
    {
        flex: 1,
        alignItems: 'center',
        marginLeft: 15,
        marginRight: 15,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        backgroundColor: Colors.grally,
        marginTop: 59,
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
        borderRadius: 5,
        marginBottom: 20,
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
    titleInput:
    {
        fontSize: 12,
        fontFamily: Fonts.Roboto_Regular,
        marginLeft: 50,
        marginTop: 15,
    },
    buttonDate:
    {
        width: 100,
    },
    buttonDateTitle:
    {
        fontSize: 12,
        fontFamily: Fonts.Cairo_Regular,
    },
    modal:
    {
        height: 200,
        backgroundColor:'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonKind:
    {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,

    },
    buttonKindTitle:
    {
        fontSize: 12,
        fontFamily: Fonts.Cairo_Regular,
    },
    inputWithEye:
    {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        backgroundColor: Colors.mercury,
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
});

export default styles;
