import {Dimensions, PixelRatio, StyleSheet} from 'react-native';
import Colors from '../../../assets/colors';
import Fonts from '../../../assets/fonts';
import { hp, wp } from '../../../assets/size';
export const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    CategoryContainer:
    {
        flex: 1,
        backgroundColor: Colors.seashellSolid,
    },
    activityIndicator:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    flatListCatgoriesContainer:
    {


    },
    flatListCatgories:
    {
        justifyContent:'center',
        width: width * 1.0005,
        alignItems:'center',
    },
    categoriesContainer:
    {
        width : 76,
        height: 40,
        backgroundColor: Colors.fernGreen,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems:'center',
        marginLeft: 10,
    },
    categoriesTitle:
    {
        fontSize:  12,
        fontFamily: Fonts.Cairo_Regular,
        color: Colors.white,
        textAlign: 'center',
    },
    productsContainer:
    {
        marginTop: 30,
        marginBottom: 20,
    },
    title:
    {
        fontSize: 14,
        fontFamily: Fonts.Cairo_Bold,
        marginLeft: 15,
        marginRight: 15,
        writingDirection: 'rtl',
    },
    itemProductsContainer:
    {
        justifyContent:'center',
        alignItems: 'center',
    },
    productsInnerContainer:
    {
        width: wp(45),
        height: PixelRatio.get() === 2 ? hp('32%') : PixelRatio.get() === 3 ? hp('25%') : hp('30%'),
        alignItems:'flex-start',
        justifyContent:'space-between',
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
