import {StyleSheet} from 'react-native';
import Colors from '../../../../assets/colors';
import Fonts from '../../../../assets/fonts';

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
});

export default styles;
