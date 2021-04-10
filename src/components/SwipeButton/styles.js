import {StyleSheet} from 'react-native';
import Colors from '../../../assets/colors';
import Fonts from '../../../assets/fonts';

const styles = StyleSheet.create({
    swipeContainer:
    {
      height: 75,
      flexDirection:'row',
      marginLeft: 15,
      marginRight: 15,
      justifyContent: 'space-between',
      borderRadius: 8,
      backgroundColor:Colors.white,
    },
    imageProducts:
    {
        height: 68,
        width: 70,
        borderRadius: 4,
        paddingRight: 25,
    },
    swipeContent:
    {
      width: 100,
      justifyContent:'center',
      flex: 3,
      marginLeft: 6,
    },
    title:
    {
      fontSize: 12,
      fontFamily: Fonts.Cairo_Bold,
    },
    description:
    {
      fontSize: 12,
      fontFamily: Fonts.Cairo_Bold,
      paddingLeft: 5,
      width: 150,
    },
    addressContainer:
    {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    circleGreen:
    {
      height: 8,
      width: 8,
      borderRadius: 4,
      backgroundColor: Colors.fernGreen,
      marginRight: 10,
    },
    addressText:
    {
      fontSize: 9,
      fontFamily: Fonts.Cairo_Bold,
      color: Colors.nameShop,
    },
    counterButtonAndNumber:
    {
        alignItems:'center',
        justifyContent:'space-around',
        flexDirection: 'row',
        height:'100%',
        width: 100,
        paddingTop: 8,
        paddingBottom: 8,
    },
    deliveredTitle:
    {
        fontSize: 9,
        fontFamily: Fonts.Cairo_Bold,
        color: Colors.fernGreen,
    },
    deliveredButton:
    {
        height: 21,
        width: 86,
        marginLeft: 0,
        marginRight: 5,
        borderRadius: 8,
    },
    deliveredButtonTitle:
    {
        fontSize: 9,
        fontFamily: Fonts.Cairo_Bold,
        color: Colors.white,
    },
    iconCounter:
    {
        height: 24,
        width: 24,
        backgroundColor: Colors.silver,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    counterNumber:
    {
      fontSize: 12,
      fontFamily: Fonts.Cairo_Bold,
    },
    priceView:
    {
        backgroundColor: Colors.altoApprox,
        borderRadius: 15,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 5,
        paddingBottom: 5,
        marginTop: 18,
    },
  });

export default styles;
