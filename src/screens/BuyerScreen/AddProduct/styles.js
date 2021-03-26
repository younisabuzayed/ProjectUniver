import {Dimensions, StyleSheet} from 'react-native';
import Colors from '../../../../assets/colors';
import Fonts from '../../../../assets/fonts';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
/* Add Product */
    
/* Step 1 */
    step1Container:
    {
        flex: 1,
        paddingTop: 62,
    },
    titleInput:
    {
        fontSize: 12,
        fontFamily: Fonts.Cairo_Regular,
        marginLeft: 50,
        marginTop: 15,
        marginBottom: 5,
    },
    KindCategoryButton:
    {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
    },
    KindCategoryButtonTitle:
    {
        fontSize: 9,
        fontFamily: Fonts.Cairo_Regular,
    },
    KindCategoryModal:
    {
        height: height - 80,
        backgroundColor: Colors.white,
        borderRadius: 8,
    },
    title:
    {
        fontSize: 14,
        fontFamily: Fonts.Cairo_Regular,
        marginTop: 12,
        textAlign: 'center',
    },
    radioButton:
    {
        flexDirection:'row-reverse',
    },
    labelRadio:
    {
        fontSize: 12,
        fontFamily:Fonts.Cairo_Regular,
        color: Colors.balck,
    },
    checkeContainer:
    {
        flexDirection: 'row',
        width: width - 60,
        paddingLeft: 20,
    },
    checkeButton:
    {
        flexDirection:'row-reverse',
        width: width - 200,
    },
    inputDescription:
    {
        height: 92,
        justifyContent: 'flex-start',
    },
/* Step 2 */
/* Step 3 */
/* Step 4 */

});

export default styles;
