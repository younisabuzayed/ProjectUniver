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
        marginRight: 15,
    },
    searchbarAndVioceContainer:
    {
        flexDirection: 'row',
        width: width - 120,
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
    buttonMenu:
    {
        marginLeft: 15,
        marginRight: 0,
    },
    choosesContainer:
    {
        marginTop: 20,
        backgroundColor: Colors.white,
        height: 500,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        alignItems: 'center',
    },
    selectionMenuButton:
    {
        width: 120,
        marginBottom: 10,
    },
    selectionMenu:
    {
        flexWrap: 'wrap',
    },
    foodSizeContainer:
    {
        marginLeft: 50,
    },
    titleFilters:
    {
        fontSize: 12,
        fontFamily: Fonts.Cairo_Regular,
        marginLeft: 10,
        marginTop: 15,
        writingDirection: 'rtl',
    },
    selectionsStyle:
    {
        justifyContent:'flex-start',
        marginLeft: 10,
    },
    selectionButton:
    {
        width: 64,
        height: 30,
    },
    ratingContainer:
    {
        alignSelf: 'flex-start',
        marginTop: 5,
    },
    starContainerStyle:
    {
        marginLeft: 15,
        shadowColor: Colors.balck,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        marginTop: 10,
    },
    buttonSearchContainer:
    {
        backgroundColor: Colors.white,
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8,
        alignItems: 'center',
    },
    buttonSearch:
    {
        width: 170,
        height: 32,
        shadowColor: Colors.balck,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        marginBottom: 30,
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
