import {StyleSheet} from 'react-native';
import Colors from '../../../../assets/colors';
import Fonts from '../../../../assets/fonts';

const styles = StyleSheet.create({
    notificationContainer:
    {
        flex: 1,
        backgroundColor: Colors.white,
    },
    innerNotificationContainer:
    {
        marginTop: 50,
        marginLeft: 15,
        marginRight: 15,
    },
    notificationButton:
    {
        height: 54,
        backgroundColor: Colors.concrete,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 8,
        paddingLeft: 29,
        paddingRight: 7,
        marginBottom: 13,
    },
    titleNotification:
    {
        fontSize: 12,
        fontFamily: Fonts.Cairo_Regular,
        color: Colors.contentText,
    },
    closeButton:
    {
        marginLeft: 0,
        marginRight: 0,
    },
    noNotifications:
    {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
    },
    titleNoNotifications:
    {
        fontSize: 24,
        fontFamily: Fonts.Cairo_Bold,
    },
});

export default styles;
