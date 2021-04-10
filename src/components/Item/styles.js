import Colors from '../../../assets/colors';
import Fonts from '../../../assets/fonts';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
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
        height: 111,
        borderRadius: 8,
        flex: 1,
    },
    ContentProductsContainer:
    {
        flex: 0.5,
        padding: 5,
        width:'100%',
    },
    titleProducts:
    {
        fontSize: 12,
        fontFamily: Fonts.Roboto_Bold,
        writingDirection: 'rtl',
        textAlign:'left',
        marginTop: 3,
    },
    iconAndPriceRow:
    {
        flexDirection:'row',
        justifyContent: 'space-between',
        marginTop: 8,
    },
    priceProducts:
    {
        fontSize: 14,
        fontFamily: Fonts.Roboto_Bold,
        writingDirection: 'rtl',
        color: Colors.mineShaft,
        lineHeight: 19,
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
