import {StyleSheet} from 'react-native';
import Colors from '../../assets/colors';
import Fonts from '../../assets/fonts';

const styles = StyleSheet.create({
/*Index */
titleStyle:
{
    fontSize: 18,
    fontFamily: Fonts.Cairo_Bold,
},
/*Seller Screen */
buttonAddProductsContainer:
{
    width: 60,
    height: 60,
    top: -20,
    borderRadius: 30,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
},
buttonAddProductsView:
{
    alignItems:'center',
    justifyContent: 'center',
    position:'absolute',
    backgroundColor:Colors.white,
    height: 60,
    width: 60,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
    width: 0,
    height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
},
});

export default styles;
