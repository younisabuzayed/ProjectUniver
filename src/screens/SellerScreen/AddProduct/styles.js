import {Dimensions, PixelRatio, StyleSheet} from 'react-native';
import Colors from '../../../../assets/colors';
import Fonts from '../../../../assets/fonts';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
/* Add Product */
    addProductContainer:
    {
        backgroundColor: Colors.white,
        flex: 1,
        paddingTop: PixelRatio.get() === 3 ? 80 : 30,
    },
    stepsContainer:
    {
        marginTop: 50,
        alignSelf:'center',
        flexDirection: 'row',
        alignItems:'center',
    },
    steps:
    {
        width: 24,
        height: 24,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.nameShop,
    },
    stepsTitle:
    {
        fontSize: 14,
        fontFamily: Fonts.Cairo_Bold,
        color: Colors.white,
    },
    lineSteps:
    {
        height: 3,
        backgroundColor: Colors.nameShop,
        width: 26,
        marginLeft: -1,
    },
    noteForProductContainer:
    {
        height: 32,
        marginLeft: 15,
        marginRight: 15,
        backgroundColor: Colors.wildSand,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 12,
        paddingRight: 12,
        marginTop: 27,
    },
    noteForProductText:
    {
        fontSize: 12,
        fontFamily: Fonts.Cairo_Regular,
        color: Colors.fernGreen,
        writingDirection: 'rtl',
    },
    circleView:
    {
        height: 24,
        width: 24,
        backgroundColor: Colors.circle,
        borderRadius: 12,
        alignItems:'center',
        justifyContent:'center',
    },
    nextAndPrevContainer:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 25,
    },
    titleNextAndPrev:
    {
        fontSize: 14,
        fontFamily: Fonts.Cairo_Regular,
    },
/* Step 1 */
    step1Container:
    {
        flex: 1,
        paddingTop: 21,
        backgroundColor: Colors.white,
    },
    titleInput:
    {
        fontSize: 12,
        fontFamily: Fonts.Cairo_Regular,
        marginLeft: 50,
        marginTop: 15,
        marginBottom: 5,
        writingDirection: 'rtl',
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
        writingDirection: 'rtl',
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
        writingDirection: 'rtl',
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
        writingDirection: 'rtl',
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
        paddingTop: 21,
    },
    noteText:
    {
        fontSize: 9,
        fontFamily: Fonts.Cairo_Regular,
        marginLeft: 5,
        writingDirection: 'rtl',
        marginTop: -8,
        marginBottom: 18,
    },
/* Step 3 */
    step3Container:
    {
        flex: 1,
    },
    colorButtonTitle:
    {
        fontSize: 14,
        fontFamily: Fonts.Cairo_Bold,
        color: Colors.white,
        writingDirection: 'rtl',
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
        writingDirection: 'rtl',
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
        writingDirection: 'rtl',
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
    sizesContainer:
    {
    },
    closeButton:{
        width: 10,
        height: 10,
        borderRadius:10,
        backgroundColor: 'white',
        position:'absolute',
        top: -3,
        left: 0,
    },
    itemSizeProductText:
    {
        fontSize: 14,
        fontFamily: Fonts.Cairo_Regular,
        color: Colors.white,
        paddingLeft: 2,
        paddingRight: 2,
        writingDirection: 'rtl',

    },
/* Step 4 */
    step4Container:
    {
        flex: 1,
        paddingTop: 21,
    },
    titlePhotoProduct:
    {
        fontSize: 12,
        fontFamily: Fonts.Cairo_Regular,
        marginLeft: 36,
        marginTop: 15,
        textAlign: 'left',
    },
    buttonImagePicker:
    {
        height: 131,
        width: 297,
        marginLeft: 0,
        marginRight: 0,
        marginTop: 18,
        borderRadius: 8,
        alignSelf:'center',
        borderWidth: 1.5,
        borderColor: Colors.mercury,
    },
});

export default styles;
