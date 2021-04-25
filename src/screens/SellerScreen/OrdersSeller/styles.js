import {StyleSheet} from 'react-native';
import Colors from '../../../../assets/colors';
import Fonts from '../../../../assets/fonts';

const styles = StyleSheet.create({
    ordersBuyerContainer:
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
        backgroundColor: Colors.white,
        paddingTop: 50,
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
});

export default styles;
