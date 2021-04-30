import {Dimensions, StyleSheet} from 'react-native';
const {height, width} = Dimensions.get('window');
import Colors from '../../../assets/colors';
import Fonts from '../../../assets/fonts';

const styles = StyleSheet.create({
   alertView:
   {
       flex: 1,
       justifyContent:'center',
       alignItems:'center',
   },
   alertViewInner:
   {
       height: 170,
       width: 250,
       backgroundColor:'transparent',
       justifyContent: 'center',
       alignItems:'center',
       borderRadius: 12,
    },
    alertContainer:
    {
        height: 140,
        width: 346,
        borderRadius: 8,
        backgroundColor:Colors.alertBackground,
        justifyContent:'space-between',
        alignItems:'center',
    },
    title:
    {
        fontSize:18,
        color: Colors.letterColor,
        fontFamily: Fonts.Cairo_Bold,
        marginTop: 18,
    },
    description:
    {
        fontSize:14,
        color: Colors.letterColor,
        fontFamily: Fonts.Cairo_Regular,
    },
    buttonContainer:
    {
        flexDirection: 'row',
        borderTopWidth: 0.4,


    },
    titleButton:
    {
        color: Colors.letterColor,
        fontSize: 18,
        borderColor: Colors.letterColor,
        borderWidth: 1,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 12,
    },
    button:
    {
        height: 40,
        width: '50%',
        marginLeft: 0,
        marginRight: 0,
    },
    buttonTitle:
    {
        fontSize: 14,
    },
    iconContainer:
    {
        width: 32,
        height: 32,
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        position: 'absolute',
        top: 0,
    },

});

export default styles;
