import {StyleSheet} from 'react-native';
import Colors from '../../../../assets/colors';
import Fonts from '../../../../assets/fonts';

const styles = StyleSheet.create({
    noProductsContainer:
    {
        flex: 1,
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerContainer:
    {
        width: '100%',
        alignItems:'flex-start',
        paddingLeft: 15,
        paddingTop: 15,
    },
    image:
    {
        width: 150,
        height: 146,
    },
    textContainer:
    {
        marginTop: 10,
    },
    text:
    {
        fontSize: 18,
        fontFamily: Fonts.Cairo_Regular,
        textAlign: 'center',
    },
});

export default styles;
