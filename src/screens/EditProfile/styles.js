import {StyleSheet, Dimensions, Platform} from 'react-native';
import Colors from '../../../assets/colors';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const styles = StyleSheet.create({
    editProfileContainer:
    {
        flex: 1,
        paddingTop: 30,
    },
    logoView:
    {
        marginTop: Platform.OS === 'android' ? 33 : 80,
        alignItems: 'center',

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
    buttonConfirmTextView:
    {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',

    },
    buttonConfirmText:
    {
        fontSize: 14,
        color: Colors.white,
        writingDirection: 'rtl',
    },

});
export default styles;
