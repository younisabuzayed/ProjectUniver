import {Dimensions, StyleSheet} from 'react-native';
import Colors from '../../../../assets/colors';
import Fonts from '../../../../assets/fonts';
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
    noInternetContainer:
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
        width: width - 100,
        height: 244,
    },
    textContainer:
    {
        marginTop: 26,
    },
    text:
    {
        fontSize: 18,
        fontFamily: Fonts.Cairo_Regular,
        textAlign: 'center',
    },
    buttonContainer:
    {
        width:'100%',
        marginTop: 54,
    },
    button:
    {
        flexDirection: 'row-reverse',
        padding: 10,
    },
    titleButton:
    {
        fontSize: 12,
        fontFamily: Fonts.Cairo_Bold,
        color: Colors.white,
        marginRight: 3,
    },
});

export default styles;
