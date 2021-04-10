import {StyleSheet} from 'react-native';
import Colors from '../../../assets/colors';
import Fonts from '../../../assets/fonts';

const styles = StyleSheet.create({
  cartItemContainer:
  {
    height: 75,
    flexDirection:'row',
    marginLeft: 15,
    marginRight: 15,
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
  },
  title:
  {
    fontSize: 12,
    fontFamily: Fonts.Cairo_Bold,

  },
  description:
  {
    fontSize: 12,
    fontFamily: Fonts.Cairo_Bold,
    paddingLeft: 5,
    width: 150,
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
  textCancel:
  {
      fontSize: 9,
      color: Colors.white,
      fontFamily: Fonts.Cairo_Bold,
  },
});

export default styles;
