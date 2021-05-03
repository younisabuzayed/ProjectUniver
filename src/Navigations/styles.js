import {Platform, StyleSheet} from 'react-native';
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
sellerSearchNoti:
{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 80,
},
/* TabNavigation */
mainButton:
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
tabBarBadge:
{
    marginLeft: -20,
    fontSize: 11,
    fontFamily: Fonts.Cairo_Bold,
    backgroundColor: Colors.carnation,
    color: Colors.white,
    justifyContent:'center',
    alignItems:'center',
    minWidth: 14,
    height: 15,
    borderRadius: 7.5,
    marginTop: Platform.OS === 'android' ? 10 : 0,
},
styleTitle:
{
    fontSize: 9,
    textAlign: 'center',
    fontFamily: Fonts.Cairo_Regular,
    color: Colors.fernGreen,
},
styleIconsBar:
{
    alignItems:'center',
},
});

export default styles;
