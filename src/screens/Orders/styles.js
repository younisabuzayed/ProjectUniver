import {StyleSheet, PixelRatio} from 'react-native';
import Colors from '../../../assets/colors';
import Fonts from '../../../assets/fonts';
import { hp } from '../../../assets/size';

const styles = StyleSheet.create({
    ordersContainer:
    {
        flex: 1,
        padding: 10,
        paddingBottom: 0,
        backgroundColor: Colors.wildSand,
    },
    headerButton:
    {
        flexDirection: 'row',
        justifyContent:'center',
        alignSelf: 'center',
        marginTop: hp(7),
        backgroundColor: Colors.white,
        width: 340,
        borderRadius: 8,
    },
    button:
    {
        marginLeft: 0,
        marginRight: 0,
        width: 170,
    },
    titleButton:
    {
        fontSize: 14,
        fontFamily: Fonts.Cairo_Regular,
    },
    cartItemsContainer:
    {
        flex: 1,
        paddingTop: 24,
    },
    titleStyle:
    {
        color: Colors.carnation,
    },
    descriptionStyle:
    {
        width: 238,
        textAlign: 'center',
    },
});

export default styles;
