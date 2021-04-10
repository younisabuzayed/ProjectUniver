import {Dimensions, StyleSheet} from 'react-native';
import  Colors  from '../../../assets/colors';
import Fonts from '../../../assets/fonts';
export const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    searchContainer:
    {
        flex: 1,
        backgroundColor: Colors.white,
    },
    headerSearch:
    {
        flexDirection: 'row',
        width: '100%',
        alignItems:'center',
        backgroundColor:Colors.concrete,
        paddingTop: 15,
        paddingBottom: 15,
    },
    buttonBack:
    {
        marginLeft: 20,
        marginRight: 20,
    },
    searchbar:
    {
        borderRadius: 8,
        marginRight: 18,
        flex: 1,
        height: 40,
        backgroundColor: Colors.mercury,
    },
    textInput:
    {
        fontSize: 10,
    },
    historyByResearchContainer:
    {
        height: height / 2,
        backgroundColor:Colors.concrete,
    },
});

export default styles;
