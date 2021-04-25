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
    searchbarAndVioceContainer:
    {
        flexDirection: 'row',
        width: width - 100,
        height: 40,
        justifyContent:'center',
        alignItems:'center',
    },
    searchbar:
    {
        borderRadius: 8,
        flex: 1,
        height: 40,
        backgroundColor: '#E8E9EA',
        elevation: 0,
        shadowRadius: 0,
        borderTopRightRadius:0,
        borderBottomRightRadius: 0,
    },
    textInput:
    {
        fontSize: 10,
    },
    iconVoiceContainer:
    {
        height: 40,
        width: 32,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DFDFDF',
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
    },
    historyByResearchContainer:
    {
        height: height / 2,
        backgroundColor:Colors.concrete,
        paddingRight: 33,
        paddingLeft: 43,
    },
    moreButton:
    {
        flexDirection: 'row-reverse',
        position: 'absolute',
        bottom: 28,
        alignSelf:'center',
    },
    moreText:
    {
        fontSize: 12,
        fontFamily: Fonts.Cairo_Bold,
        marginRight: 6,
        color: Colors.more,
    },
    historySearch:
    {
        flexDirection:'row',
        justifyContent: 'space-between',
        marginLeft: 30,
        marginRight: 2,
    },
    titleHistory:
    {
        fontSize: 12,
        fontFamily: Fonts.Cairo_Regular,
        color: Colors.titleProduct,
    },
    itemProductsContainer:
    {
        backgroundColor: Colors.concrete,
        flex: 1,
    },
});

export default styles;
