import {PixelRatio, StyleSheet} from 'react-native';
import Colors from '../../../assets/colors';
import Fonts from '../../../assets/fonts';
import { hp } from '../../../assets/size';

const styles = StyleSheet.create({
    cartContainer:
    {
        flex: 1,
        backgroundColor: Colors.wildSand,
        paddingTop: 62,
    },
    bodyContainer:
    {
        marginTop: hp(5),
        flex: 1,
    },
    strok:
    {
        borderWidth: 1,
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 8,
        borderColor: 'rgba(112, 112, 112, 0.30)',
    },
    buttomContainer:
    {
        paddingTop: 5,
        paddingBottom: 25,
    },
    rowProductsCounter:
    {
        flexDirection:'row',
        justifyContent: 'space-between',
        marginLeft: 22,
        marginRight: 22,
    },
    titleLable:
    {
        fontSize: 12,
        fontFamily: Fonts.Cairo_Regular,
    },
    totalContainer:
    {
        flexDirection: 'row',
        justifyContent:'space-between',
        padding: 10,
        marginLeft: 5,
        marginRight: 10,
    },
    totalText:
    {
        fontSize: 14,
        fontFamily: Fonts.Cairo_Bold,
    },
    totalNumber:
    {
        fontSize: 18,
        fontFamily: Fonts.Cairo_Bold,
        color: Colors.carnation,
    },
    typeMoneyText:
    {
        fontSize: 12,
        fontFamily: Fonts.Cairo_Regular,
        color: Colors.carnation,
    },
    addressContainer:
    {
        backgroundColor: Colors.mercuryOpacity,
        height: 99,
        marginRight: 15,
        marginLeft: 15,
        borderRadius: 8,
        marginBottom: 32,
    },
    titleAndButtonAddress:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Colors.mercury,
        height: 40,
        alignItems:'center',
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 8,
    },
    iconCounter:
    {
      height: 24,
      width: 24,
      backgroundColor: Colors.fernGreen,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
    },
    addressContent:
    {
        marginTop: 16,
        paddingLeft: 25,
    },
    addressText:
    {
        fontSize: 12,
        fontFamily: Fonts.Cairo_Regular,
        writingDirection: 'rtl',

    },
    titleButton:
    {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: Fonts.Cairo_Bold,
        color: Colors.white,
    },
});

export default styles;
