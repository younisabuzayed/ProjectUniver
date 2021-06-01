import {StyleSheet} from 'react-native';
import Colors from '../../../assets/colors';
import Fonts from '../../../assets/fonts';


const styles = StyleSheet.create({
    cartItemContainer:
    {
        height: 50,
        flexDirection:'row',
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 8,
        backgroundColor:Colors.white,
        marginBottom: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    imageProducts:
    {
        height: 50,
        width: 70,
        borderRadius: 4,
    },
    cartItemContent:
    {
        width: 100,
        justifyContent:'center',
        flex: 3,
        marginLeft: 6,
    },

    title:
    {
        fontSize: 12,
        fontFamily: Fonts.Cairo_Regular,
        writingDirection: 'rtl',
    },
});

export default styles;
