import {StyleSheet} from 'react-native';
import Colors from '../../../assets/colors';
import Fonts from '../../../assets/fonts';

const styles = StyleSheet.create({
    inputContainer:
    {
        height: 59,
        marginLeft: 39,
        marginRight: 39,
        justifyContent: 'space-between',
    },
    title:
    {
        fontFamily: Fonts.Roboto_Regular,
    },
    input:
    {
        height: 40,
        backgroundColor: Colors.mercury,
        borderRadius: 8,
        marginBottom: 5,
        paddingRight: 15,
        paddingLeft: 15,
    },
});

export default styles;
