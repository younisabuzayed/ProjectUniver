import {Dimensions, StyleSheet} from 'react-native';
import  Colors  from '../../../assets/colors';
import Fonts from '../../../assets/fonts';
export const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    searchContainer:
    {
        flex: 1,
        backgroundColor: Colors.white,
    },
    headerSearch:
    {
        flexDirection: 'row',
        width: '100%',
        marginTop: 17,
        alignItems:'center',
    },
    buttonBack:
    {
        marginLeft: 20,
        marginRight: 20,
    },
    searchbar:
    {
        borderRadius: 8,
        marginRight: 18,
        flex: 1,
        height: 36,
        backgroundColor: Colors.mercury,
    },
    textInput:
    {
        fontSize: 10,
    },
    headerContainer:
    {
        flex: 1,
        width,
        alignItems: 'center',
        padding: 10,
    },
    image:
    {
        width: '100%',
        height: width,
        borderRadius: 2,
    },
    bodyContainer:
    {
        flex: 3,
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
    },
    avatar:
    {
        marginRight: 8,
    },
    nameShop:
    {
        fontSize: 18,
        fontFamily: Fonts.Roboto_Bold,
    },
    priceContainer:
    {
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
    },
    priceNumber:
    {
        fontSize: 32,
        fontFamily: Fonts.Roboto_Bold,
        color: Colors.carnation,
    },
    priceTitle:
    {
        fontSize: 14,
        fontFamily: Fonts.Roboto_Regular,
    },
    productTitle:
    {
        fontSize: 12,
        fontFamily: Fonts.Roboto_Regular,
        marginLeft: 10,
        marginRight: 10,
    },
    decriptiopnContainer:
    {
        marginTop: 30,
        marginLeft: 10,
        marginRight: 10,
    },
    decriptiopnTitle:
    {
        fontSize: 14,
        fontFamily: Fonts.Roboto_Bold,
    },
    decriptiopnContent:
    {
        fontSize: 14,
        fontFamily: Fonts.Roboto_Regular,
    },
    priceCounterContainer:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
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
        backgroundColor: Colors.texasRose,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
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
    colorsContainer:
    {
        marginTop: 20,
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
    bottomContainer:
    {
        flex: 1,
        backgroundColor: 'black',
    },
});

export default styles;
