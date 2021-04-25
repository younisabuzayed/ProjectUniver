import {Dimensions, StyleSheet} from 'react-native';
import Colors from '../../assets/colors';
import Fonts from '../../assets/fonts';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    sizesContainer:
    {
    },
    sizeContainer:
    {
        marginLeft: 0,
    },
    titleSize:
    {
        fontSize: 12,
        fontFamily: Fonts.Cairo_Regular,
        marginLeft: 36,
        marginTop: 15,
        writingDirection: 'rtl',
    },
    sizesInnerContainer:
    {
        flexDirection: 'row-reverse',
        alignItems:'center',
        justifyContent: 'space-between',
        height: 40,
    },
    inputSizes:
    {
        width: 70,
        height: 40,
        fontSize: 14,
        marginLeft: 39,
        marginBottom: 0,
    },
    sizeButton:
    {
        marginLeft: 0,
        marginRight: 0,
        width: 80,
    },
    sizeButtonTitle:
    {
        fontSize: 14,
        fontFamily: Fonts.Cairo_Bold,
        color: Colors.white,
        writingDirection: 'rtl',

    },
    sizesProductContainer:
    {
        backgroundColor: Colors.mercury,
        width: width - 80,
        borderRadius: 8,
        marginLeft: 35,
        marginRight: 15,
        marginTop: 25,
        paddingLeft: 5,
        paddingTop: 5,
        flexDirection: 'row',
        flexWrap:'wrap',
        minHeight: 40,
        justifyContent:'flex-start',
        alignItems:'center',
    },
    sizeProduct:
    {
        minWidth: 24,
        height: 24,
        borderRadius: 8,
        backgroundColor: Colors.silver,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
    },
    closeButton:{
        width: 10,
        height: 10,
        borderRadius:10,
        backgroundColor: 'white',
        position:'absolute',
        top: -3,
        left: 0,
    },
    itemSizeProductText:
    {
        fontSize: 14,
        fontFamily: Fonts.Cairo_Regular,
        color: Colors.white,
        paddingLeft: 2,
        paddingRight: 2,
        writingDirection: 'rtl',

    },
    titleNoSize:
    {
        fontSize: 12,
        fontFamily: Fonts.Cairo_Regular,
        marginLeft: 10,
        marginTop: 15,
        writingDirection: 'rtl',
    },
});

export default styles;
