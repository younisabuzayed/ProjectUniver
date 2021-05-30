import {Dimensions, StyleSheet} from 'react-native';
import Colors from '../../../../assets/colors';
import Fonts from '../../../../assets/fonts';
const {width} = Dimensions.get('window');
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
        alignSelf: 'center',
        backgroundColor: Colors.white,
        marginTop: 50,
        width: width - 100,
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
