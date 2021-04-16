import {StyleSheet} from 'react-native';
import Colors from '../../../assets/colors';
import Fonts from '../../../assets/fonts';
const styles = StyleSheet.create({
    drawerContentContainer:
    {
        flex:1,
        backgroundColor:Colors.white,
    },
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      justifyContent:'center',
      alignItems:'center',
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    lableMargin:
    {
        marginLeft: -25,
        fontSize: 12,
        fontFamily: Fonts.Cairo_Bold,
        writingDirection: 'rtl',
    },
    lableAddTrader:
    {
        textAlign:'center',
        fontSize: 12,
        fontFamily: Fonts.Cairo_Bold,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });

export default styles;
