import {StyleSheet, Dimensions, Platform} from 'react-native';
import Colors from '../../../assets/colors';
import Fonts from '../../../assets/fonts';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const styles = StyleSheet.create({
    editProfileContainer:
    {
        flex: 1,
    },
    scrollView:
    {
        paddingTop: 20,
        marginTop: 50,
    },
    logoImage:
    {
        height: 113,
        width: 113,
    },
    editView:
    {
        marginTop: 0,
    },
    inputContainer:
    {
        marginTop: 18,
    },
    input:
    {
        paddingLeft: 15,
    },
    titleStyle:
    {
        marginLeft: 15,
    },
    dateContainer:
    {
        marginTop: 18,
    },
    dateTitle:
    {
        fontSize: 12,
        fontFamily: Fonts.Cairo_Regular,
        writingDirection: 'rtl',
        marginBottom: 5,
        marginLeft: 55,
    },
    buttonDate:
    {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15,
    },
    buttonDateTitle:
    {
        fontSize:  12,
        fontFamily: Fonts.Cairo_Regular,
    },
    dateModal:
    {
        backgroundColor: Colors.white,
        height: 200,
    },
    buttonAddress:
    {
        paddingLeft: 15,
        paddingRight: 15,
        alignItems:'flex-start',
    },
    buttonAddressTitle:
    {
        fontSize: 12,
        fontFamily: Fonts.Cairo_Regular,
    },
    addressModalStyle:
    {
        justifyContent: 'flex-end',
        margin: 0,
        zIndex: 5,
    },
    addressModal:
    {
        height: 488,
    },
    buttonConfirmView:
    {
        width: width,
        height: 45,
        marginTop: 32,
    },
    buttonConfirm:
    {

        height: 45,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: Colors.fernGreen,
    },
    buttonConfirmText:
    {
        fontSize: 14,
        color: Colors.white,
        writingDirection: 'rtl',
    },
    buttonDeleteAccountView:
    {
        width: width,
        height: 45,
        marginTop: 32,
    },
    buttonDeleteAccount:
    {

        alignItems: 'center',
        justifyContent:'center',
    },
    buttonDeleteAcountText:
    {
        fontSize: 14,
        color: Colors.tundora,
        writingDirection: 'rtl',
    },

});
export default styles;
