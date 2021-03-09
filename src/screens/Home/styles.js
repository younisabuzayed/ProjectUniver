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
    },
    categoriesTitle:
    {
        fontSize: 14,
        fontFamily: Fonts.Roboto_Regular,
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
        width: 34,
        height: 13,
        position: 'absolute',
        right: 0,
        marginTop: 10,
    },
    imageIconDiscount:
    {
        width: 34,
        height: 13,
    },
    discountText:
    {
        fontSize: 9,
        textAlign: 'center',
        marginLeft: 5,
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
        fontFamily: Fonts.Roboto_Bold,
        writingDirection: 'rtl',
        textAlign:'left',
        marginTop: 3,
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
    iconAndPriceRow:
    {
        flexDirection:'row',
        justifyContent: 'space-between',
        marginTop: 8,
    },
    price:
    {
        flexDirection: 'row',
    },
    priceProducts:
    {
        fontSize: 14,
        fontFamily: Fonts.Roboto_Bold,
        writingDirection: 'rtl',
        color: Colors.mineShaft,
        lineHeight: 19,
    },
    orginalPrice:
    {
        fontSize: 9,
        fontFamily: Fonts.Roboto_Bold,
        writingDirection: 'rtl',
        color: 'red',
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
