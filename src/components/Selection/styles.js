import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../../assets/colors';
import Fonts from '../../../assets/fonts';
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
    selectionContainer:
    {
        flexDirection: 'row',
        width,
        justifyContent:'center',
        marginTop: 16,

    },
    buttonMeasurements:
    {
        width: 32,
        height: 32,
        marginLeft: 9,
        marginRight: 9,
    },
    title:
    {
        fontSize: 14,
        fontFamily: Fonts.Cairo_Bold,
        color: Colors.balck,
    }
});

export default styles;
