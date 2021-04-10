import {StyleSheet} from 'react-native';
import Colors from '../../../assets/colors';
import Fonts from '../../../assets/fonts';

const styles = StyleSheet.create({
    ordersContainer:
    {
        flex: 1,
        padding: 10,
        paddingBottom: 0,
        backgroundColor: Colors.wildSand,
        paddingTop: 64,
    },
    headerButton:
    {
        flexDirection: 'row',
        justifyContent:'center',
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
