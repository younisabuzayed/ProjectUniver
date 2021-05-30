import {Dimensions, StyleSheet} from 'react-native';
import  Colors  from '../../../assets/colors';
import Fonts from '../../../assets/fonts';
export const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    productContainer:
    {
        flex: 1,
        backgroundColor: Colors.seashellSolid,
    },
    headerContainer:
    {
        flex: 1,
        width,
        alignItems: 'center',
        ...StyleSheet.absoluteFillObject,
    },
    image:
    {
        width: '100%',
        height: width,
    },
    goBackIconContainer:
    {
        ...StyleSheet.absoluteFillObject,
    },
    goBackIcon:
    {
        width:'100%',
        marginLeft: 0,
        alignItems:'flex-start',
        paddingLeft: 15,
        paddingTop: 15,
        shadowColor: Colors.balck,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    bodyContainer:
    {
        flex: 3,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: Colors.white,
        marginTop: width - 10,
        paddingBottom: 50,
    },
    productTitle:
    {
        fontSize: 18,
        fontFamily: Fonts.Cairo_Bold,
        writingDirection: 'rtl',
        textAlign:'left',
        color: Colors.titleProduct,
        width: '90%',
        marginLeft: 15,
        marginRight: 15,
    },
    nameShopAndPriceProduct:
    {
        flexDirection: 'row',
        justifyContent:'space-between',
    },
    nameAndImageShopContainer:
    {
        flexDirection: 'row',
        width: '60%',
        marginTop: 10,
        alignItems:'center',
    },
    avatar:
    {
        marginRight: 8,
    },
    photoAndNameShop:
    {
        alignItems:'flex-start',
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 10,
        width: '60%',

    },
    nameShop:
    {
        fontSize: 14,
        fontFamily: Fonts.Cairo_Regular,
        color: Colors.nameShop,
    },
    priceContainer:
    {
        flexDirection: 'row',
        justifyContent:'flex-start',
        alignItems:'center',
    },
    priceNumber:
    {
        fontSize: 24,
        fontFamily: Fonts.Cairo_Bold,
        color: Colors.balck,
    },
    priceTitle:
    {
        fontSize: 12,
        fontFamily: Fonts.Cairo_Regular,
        color: Colors.balck,
    },
    ratingContainer:
    {
        marginLeft: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 40,
        height: 25,
    },
    ratingTitle:
    {
        fontSize: 12,
        fontFamily: Fonts.Cairo_Regular,
    },
    timeContainer:
    {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
        height: 20,
        marginLeft: 5,
    },
    texttime:
    {
        fontSize: 12,
        fontFamily: Fonts.Cairo_Regular,
        marginLeft: 2,
    },
    decriptiopnContainer:
    {
        marginTop: 30,
        marginLeft: 10,
        marginRight: 10,
    },
    decriptiopnContent:
    {
        fontSize: 12,
        fontFamily: Fonts.Cairo_Regular,
        writingDirection: 'rtl',
    },
    chooseContainer:
    {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 10,
    },
    chooseTitle:
    {
        fontSize: 12,
        fontFamily: Fonts.Cairo_Bold,
        writingDirection: 'rtl',
    },
    chooseButtons:
    {
        flexDirection:'row',
        marginTop: 15,
    },
    buttonChoose:
    {
        backgroundColor: Colors.white,
        elevation: 2,
        width: 40,
        height: 40,
        borderRadius: 8,
        marginLeft: 0,
        marginRight: 0,
        shadowColor: Colors.balck,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.20,
        shadowRadius: 2.84,

    },
    badge:
    {
        backgroundColor: Colors.carnation,
        color: Colors.white,
        fontSize: 12,
    },
    chooseImage:
    {
        height: 25,
        width: 25,
    },
    counterContainer:
    {
    },
    counterButtonAndNumber:
    {
        flexDirection: 'row',
        marginTop: 18,
    },
    iconCounter:
    {
        height: 24,
        width: 24,
        backgroundColor: Colors.silver,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
    },
    circle:
    {
        height: 60,
        width: 60,
        borderRadius: 30,
        backgroundColor:'transparent',
        position:'absolute',
        bottom: -30,
        alignSelf: 'center',
        zIndex: 1,
    },
    choosesContainer:
    {
        marginTop: 20,
        backgroundColor: Colors.white,
        height: 146,
        alignItems: 'center',
    },
    strock:
    {
        height: 4,
        width: 101,
        backgroundColor: Colors.strok,
        marginTop: 9,
        borderRadius: 2,
    },
    title:
    {
        fontSize: 12,
        fontFamily: Fonts.Cairo_Regular,
        marginTop: 12,
    },
    circleContainer:
    {
        marginTop: 17,
        flexDirection: 'row',
        flexWrap:'wrap',
    },
    colorCircle:
    {
        height: 32,
        width: 32,
        borderRadius: 16,
        marginRight: 17,
        marginBottom: 5,
    },
    counterNumber:
    {
        marginLeft: 30,
        marginRight: 30,
    },
    buttonsContainer:
    {
        width: 50,
        alignItems:'center',
        marginRight: 18,
    },
    titleButtons:
    {
        fontSize: 9,
        fontFamily: Fonts.Cairo_Regular,
        textAlign: 'center',
        marginTop: 5,
        color: Colors.nameShop,
    },
    buttonAndCounterPriceContainer:
    {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 50,
    },
    buttonAddCard:
    {
        flexDirection: 'row-reverse',
        width:228,
        marginRight: 0,
        marginLeft: 18,
    },
    buttonAddCardText:
    {
        fontSize: 14,
        fontFamily: Fonts.Cairo_Bold,
        color: Colors.white,
        marginRight: 5,
    },
    priceView:
    {
        width: 78,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: Colors.altoApprox,
        borderWidth: 2,
        borderRadius: 8,
    },
    counterPriceText:
    {
        fontSize: 14,
        fontFamily: Fonts.Cairo_Regular,
    },
    bottomContainer:
    {
        flex: 1,
        backgroundColor: 'black',
    },
    toastContainer:
    {
        backgroundColor: Colors.concrete,
    },
    toastText:
    {
        fontSize: 12,
        fontFamily: Fonts.Cairo_Regular,
        color: Colors.contentText,
    },
});

export default styles;
