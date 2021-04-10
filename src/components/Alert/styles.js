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
       backgroundColor:'white',
       justifyContent:'space-around',
       alignItems:'center',
       borderRadius: 12,
    },
    title:
    {
        fontSize:30,
        color: Colors.letterColor,
        fontFamily: Fonts.Roboto_Bold,
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

});

export default styles;
