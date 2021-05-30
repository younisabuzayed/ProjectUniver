import {Dimensions, PixelRatio, StyleSheet} from 'react-native';
import  Colors  from '../../../../assets/colors';
import Fonts from '../../../../assets/fonts';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    selectionContainer:
    {
        paddingTop: PixelRatio.get() === 3 ? 80 : 60,
    },
    supportText:
    {
        fontSize: 14,
        fontFamily: Fonts.Cairo_Regular,
        textAlign: 'center',
        marginTop: 20,
    },
    buttonSelection:
    {
        width: width - 25,
        marginBottom: 25,
        height: 40,
        shadowColor: Colors.balck,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    selection:
    {
        flexDirection: 'column',
        alignItems: 'center',
    },
    inputArea:
    {
        height: 140,
        width: width - 25,
        alignSelf: 'center',
        borderWidth: 0.5,
        borderColor: Colors.textAreaSilver,
        borderRadius: 8,
        marginTop: 40,
    },
    buttonContainer:
    {
        width:'100%',
        paddingBottom:10,
        paddingTop: 30,
    },
    titleButton:
    {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: Fonts.Cairo_Bold,
        color: Colors.white,
    },
    connectText:
    {
        fontSize: 12,
        fontFamily: Fonts.Cairo_Regular,
        width: 130,
        textAlign: 'center',
        alignSelf: 'center',
    },
});

export default styles;
