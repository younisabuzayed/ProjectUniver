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
      marginTop: 10,
    },
    userInfoSection: {
      justifyContent:'center',
      alignItems:'center',
      paddingBottom: 10,
      borderBottomWidth: 0.5,
      borderBottomColor: 'rgba(112, 112, 112, 0.25)',
    },
    name:
    {
      alignItems:'center',
      marginTop: 10,
      marginBottom: 10,
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
      paddingLeft: 15,
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
    mainProfile:
    {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10,
    },
    avatar:
    {
      marginLeft: 20,
      marginRight: 5,
    },
    titleProfile:
    {
      fontSize: 12,
      fontFamily: Fonts.Cairo_Regular,
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });

export default styles;
