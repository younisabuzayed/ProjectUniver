import {Dimensions, StyleSheet} from 'react-native';
import Colors from '../../../../assets/colors';
import Fonts from '../../../../assets/fonts';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
/* Add Product */
    addProductContainer:
    {
        backgroundColor: Colors.white,
        flex: 1,
    },
/* Step 1 */
    step1Container:
    {
        flex: 1,
        paddingTop: 62,
        backgroundColor: Colors.white,
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
        width: width - 210,
    },
    inputDescription:
    {
        height: 92,
        justifyContent: 'flex-start',
    },
/* Step 2 */
    step2Container:
    {
        flex: 1,
        paddingTop: 62,
    },
    noteText:
    {
        fontSize: 9,
        fontFamily: Fonts.Cairo_Regular,
        marginLeft: 5,
    },
/* Step 3 */
    step3Container:
    {
        flex: 1,
        paddingTop: 62,
    },
    colorButtonTitle:
    {
        fontSize: 14,
        fontFamily: Fonts.Cairo_Bold,
        color: Colors.white,
    },
    ColorModal:
    {
        height: height - 80,
        backgroundColor: Colors.white,
        borderRadius: 8,
    },
    titleColor:
    {
        fontSize: 12,
        fontFamily: Fonts.Cairo_Regular,
        marginLeft: 36,
        marginTop: 15,
    },
    colorsContainer:
    {
        backgroundColor: Colors.mercury,
        width: width - 80,
        borderRadius: 8,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15,
        flexDirection: 'row',
        flexWrap:'wrap',
        minHeight: 40,
        marginBottom: 10,
        justifyContent:'flex-start',
        alignItems:'center',
        alignSelf: 'center',
    },
    titleNoColor:
    {
        fontSize: 12,
        fontFamily: Fonts.Cairo_Regular,
        marginLeft: 10,
        marginTop: 15,
    },
    circleColor:
    {
        height: 32,
        width: 32,
        borderRadius: 16,
        alignSelf:'center',
        marginTop: 5,
    },
    genderContainer:
    {
        justifyContent: 'flex-start',
        marginLeft: 30,
    },
    grnder:
    {
        width: 64,
        height: 30,
    },
/* Step 4 */

});

export default styles;
