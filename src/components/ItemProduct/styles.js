import {Dimensions, StyleSheet} from 'react-native';
import Colors from '../../../assets/colors';
import Fonts from '../../../assets/fonts';
import { hp, wp } from '../../../assets/size';
export const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    productsInnerContainer:
    {
        width: wp(45),
        height: hp('30%'),
        alignItems:'flex-start',
        backgroundColor: Colors.white,
        borderRadius: 8,
        marginTop: 25,
        marginLeft: 5,
        marginRight: 5,

    },
    imageProductsContaier:
    {
        borderRadius: 8,
        width:'100%',
        alignItems:'center',
    },
    imageProducts:
    {
        width: wp(40),
        height: 116,
        marginRight: 9,
        marginLeft: 9,
        marginTop: 9,
        alignSelf:'center',
    },
    iconDiscount:
    {
        width: 14,
        height: 28,
        position: 'absolute',
        right: 0,
        marginRight: 10,
    },
    iconFavorite:
    {
        width: 30,
        height: 28,
        position: 'absolute',
        marginRight: 10,
        marginTop: 10,
    },
    imageIconDiscount:
    {
        width: 14,
        height: 28,
        justifyContent:'center',
    },
    discountText:
    {
        fontSize: 6,
        textAlign: 'center',
        fontFamily: Fonts.Cairo_Bold,
        color: Colors.white,
    },
    ContentProductsContainer:
    {
        padding: 5,
        width:'100%',
    },
    ratingandtitleContainer:
    {
        flexDirection: 'row',
        justifyContent:'space-between',
    },
    titleProducts:
    {
        fontSize: 12,
        fontFamily: Fonts.Cairo_Regular,
        writingDirection: 'rtl',
        textAlign:'left',
        marginTop: 3,
        marginLeft: 5,
        width: '60%',
    },
    ratingContainer:
    {
        marginLeft: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: 30,
    },
    ratingTitle:
    {
        fontSize: 9,
        fontFamily: Fonts.Cairo_Regular,
    },
    titleProductsStore:
    {
        fontSize: 8,
        fontFamily: Fonts.Cairo_Regular,
        writingDirection: 'rtl',
        textAlign:'left',
        marginTop: 3,
        marginLeft: 10,
        width: '60%',

    },
    iconAndPriceRow:
    {
        flexDirection:'row',
        justifyContent: 'space-between',
        marginTop: 8,
    },
    price:
    {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 14,
    },
    priceProducts:
    {
        fontSize: 14,
        fontFamily: Fonts.Cairo_Bold,
        writingDirection: 'rtl',
        color: Colors.mineShaft,
        marginLeft: 10,
    },
    typeMoney:
    {
        fontSize: 9,
        fontFamily: Fonts.Cairo_Regular,
        color: '#9C9C9C',
    },
    orginalPrice:
    {
        fontSize: 9,
        fontFamily: Fonts.Cairo_Bold,
        writingDirection: 'rtl',
        color: '#9C9C9C',
        lineHeight: 19,
        marginLeft: 2,
    },
    prevPrice:
    {
        height: 1.5,
        width: 25,
        backgroundColor: Colors.carnation,
        position: 'absolute',
        transform: [{rotateZ: '-30deg'}],
        bottom:10,
        right: 0,
        left: 14,
    },
    iconPlus:
    {
        height: 24,
        width: 24,
        backgroundColor: Colors.fernGreen,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 8,
    },
});

export default styles;
