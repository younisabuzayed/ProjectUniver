import {Dimensions, StyleSheet} from 'react-native';
import Colors from '../../../../assets/colors';
import Fonts from '../../../../assets/fonts';
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
    dashboardContainer:
    {
        flex: 1,
        backgroundColor: Colors.white,
    },
    innerDashboardContainer:
    {
        marginTop: 50,
        marginLeft: 15,
        marginRight: 15,
    },
    calendarContainer:
    {
        flexDirection: 'row',
    },
    titleMonth:
    {
        fontSize: 14,
        fontFamily: Fonts.Cairo_Bold,
        color: Colors.contentText,
        writingDirection: 'rtl',
    },
    calendarButton:
    {
        marginLeft: 18,
        marginRight: 0,
    },
    totalsContainer:
    {
        justifyContent: 'space-between',
        marginTop: 15,
    },
    containerForTotals:
    {
        height: 105,
        width: 105,
        backgroundColor: Colors.grally,
        borderRadius: 8,
        justifyContent:'center',
        alignItems: 'center',
        marginRight: 18,
    },
    totalsQuantityAndTitle:
    {
        justifyContent:'center',
        alignItems: 'center',
    },
    iconAndTitleiconContainer:
    {
        marginLeft: 5,
        position: 'absolute',
        top: 0,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf:'flex-start',
    },
    iconTitle:
    {
        fontSize: 9,
        fontFamily: Fonts.Cairo_Regular,
        color: Colors.nameShop,
        marginLeft: 7,
        marginTop: 5,
    },
    iconIconTitle:
    {
        alignSelf: 'flex-start',
        marginLeft: 5,
        marginTop: 8,
    },
    icon:
    {
        alignSelf: 'flex-start',
        marginLeft: 5,
        marginTop: 8,
        position: 'absolute',
        top: 0,
    },
    quantityText:
    {
        fontSize: 18,
        fontFamily: Fonts.Cairo_Bold,
        color: Colors.mineShaft,
    },
    titleTotals:
    {
        fontSize: 12,
        fontFamily: Fonts.Cairo_Regular,
        lineHeight: 18,
    },
    chartContainer:
    {
        marginTop: 20,
    },
    chartTitle:
    {
        fontSize: 15,
        fontFamily: Fonts.Cairo_Bold,
        writingDirection: 'rtl',
        lineHeight: 18,
    },
});

export default styles;
