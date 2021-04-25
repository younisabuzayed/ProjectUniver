import {StyleSheet} from 'react-native';
import Colors from '../../../assets/colors';
import Fonts from '../../../assets/fonts';

const styles = StyleSheet.create({
  cartItemContainer:
  {
    height: 75,
    flexDirection:'row',
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'space-between',
    borderRadius: 8,
    backgroundColor:Colors.white,
    marginBottom: 18,
  },
  imageProducts:
  {
      height: 68,
      width: 70,
      borderRadius: 4,
      paddingRight: 25,
  },
  /* Cart Item Content */
  cartItemContent:
  {
    width: 100,
    justifyContent:'center',
    flex: 3,
    marginLeft: 6,
  },
  conditionText:
  {
      fontSize: 9,
      color: Colors.fernGreen,
      fontFamily: Fonts.Cairo_Regular,
      writingDirection: 'rtl',
  },
  title:
  {
    fontSize: 12,
    fontFamily: Fonts.Cairo_Bold,
    writingDirection: 'rtl',


  },
  description:
  {
    fontSize: 12,
    fontFamily: Fonts.Cairo_Bold,
    paddingLeft: 5,
    width: 150,
    writingDirection: 'rtl',

  },
  /* Button Cancel */
  counterButtonAndNumber:
  {
      alignItems:'center',
      justifyContent: 'center',
      height:'100%',
      width: 100,
      paddingTop: 8,
      paddingBottom: 8,
  },
  cancelButton:
  {
      width: 64,
      height: 21,
      borderRadius: 8,
  },
  iconPlus:
  {
      height: 24,
      width: 24,
      backgroundColor: Colors.fernGreen,
      justifyContent: 'center',
      alignItems:'center',
      borderRadius: 8,
  },
  textCancel:
  {
      fontSize: 9,
      color: Colors.white,
      fontFamily: Fonts.Cairo_Bold,
  },
});

export default styles;
