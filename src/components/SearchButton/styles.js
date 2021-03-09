import {StyleSheet} from 'react-native';
import Colors from '../../../assets/colors';
import Fonts from '../../../assets/fonts';

const styles = StyleSheet.create({
    searchButtonContainer:
    {
        backgroundColor: Colors.white,
        flexDirection: 'row-reverse',
        borderRadius: 8,
    },
    iconVoiceContainer:
    {
        height: 36,
        width: 32,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.wildSand,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
    },
    iconVoice:
    {
        height: 19,
        width: 12,
    },
    button:
    {
        height: 36,
        flex: 1,
        paddingLeft: 5,
        justifyContent:'center',
    },
    searchIconAndTextContainer:
    {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconSearch:
    {
        height: 14,
        width: 14,
        marginRight: 7,
    },
    searchTitle:
    {
        fontSize: 9,
        fontFamily: Fonts.Roboto_Medium,
    },
});

export default styles;
