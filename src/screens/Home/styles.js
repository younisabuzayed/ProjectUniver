import {Dimensions, StyleSheet} from 'react-native';
import Colors from '../../../assets/colors';
import Fonts from '../../../assets/fonts';
export const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    homeContainer:
    {
        flex: 1,
        backgroundColor: Colors.white,
    },
    activityIndicator:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slider:
    {
        marginTop: 30,
        alignSelf:'center',
        height: 180,

    },
    imageCarousel:
    {
        width:width - 30,
        height: 180,
        borderRadius: 8,
    },
    PaginationContainer:
    {
        marginTop: 0,
        paddingVertical: 18,
    },
    flatListCatgoriesContainer:
    {
        marginLeft: 5,
        marginRight: 5,
    },
    flatListCatgories:
    {
        justifyContent: 'space-between',
        width: width * 1.3,
    },
    categoriesContainer:
    {
        width : 88,
        height: 40,
        backgroundColor: Colors.fernGreen,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems:'center',
    },
    categoriesTitle:
    {
        fontSize: 12,
        fontFamily: Fonts.Cairo_Bold,
        color: Colors.white,
        textAlign: 'center',
    },
    productsContainer:
    {
        // flexWrap: 'wrap',
        // flexDirection: 'row',
        // justifyContent:'space-around',
        marginLeft: 15,
        marginRight: 15,
        marginTop: 30,
    },
    title:
    {
        fontSize: 14,
        fontFamily: Fonts.Cairo_Bold,
    },
    itemProductsContainer:
    {
        justifyContent:'center',
        alignItems: 'center',
    },
    productsInnerContainer:
    {
        width: 138,
        height: 180,
        alignItems:'flex-start',
        backgroundColor: Colors.seashellSolid,
        borderRadius: 8,
        margin: 10,
        borderWidth: 1,
        borderColor: Colors.seashellSolid,


    },
    imageProducts:
    {
        width: '100%',
        height: 100,
        borderRadius: 8,
        flex: 1,
    },
    iconDiscount:
    {
        width: 14,
        height: 28,
        position: 'absolute',
        right: 0,
        marginRight: 10,
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
        flex: 0.7,
        padding: 5,
        width:'100%',
    },
    ratingandtitleContainer:
    {
        flexDirection: 'row',
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
        marginLeft: 5,
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
        lineHeight: 19,
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
        transform: [{rotateZ: '-35deg'}],
        bottom:14,
        right: 0,
        left: 10,
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
