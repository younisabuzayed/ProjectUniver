import {Dimensions, StyleSheet, PixelRatio} from 'react-native';
import Colors from '../../../../assets/colors';
import Fonts from '../../../../assets/fonts';
const {height, width} = Dimensions.get('window');
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    addressContainer:
    {
        flex: 1,
        backgroundColor: Colors.white,
    },
    addressInnerContainer:
    {
        height: height - (PixelRatio.get() === 3 ? 80 : 25) ,
        justifyContent: 'flex-end',
    },
    imageContainer:
    {
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 5,
    },
    iconImage:
    {
        height: hp(20),
        width: wp('100%'),
    },
    bodyContianer:
    {
        alignItems: 'center',
        marginLeft: 15,
        marginRight: 15,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        backgroundColor: Colors.grally,
        marginTop: 32,
    },
    bodyTitleAndStrock:
    {
        height: 50,
        width: '100%',
        alignItems: 'center',
        paddingTop: 18.5,
    },
    strock:
    {
        height: 5,
        width: 101,
        backgroundColor: Colors.strok,
        marginTop: 9,
        borderRadius: 4,
    },
    titleLogin:
    {
        fontSize: 14,
        marginTop: 10,
        fontFamily: Fonts.Cairo_Regular,
        color: '#202020',
    },
    inputContainer:
    {
        width: '100%',
        justifyContent: 'space-around',
        paddingTop:9,
        marginTop: 30,
    },
    MenuContainer:
    {
        width: width - 70,
        marginTop: 35,
    },
    dropDownContainer:
    {
        alignSelf:'flex-start',
        width: 264,
    },
    styleRowButtonMenu:
    {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        paddingLeft: 13,
        paddingRight: 13,
    },
    titleMenu:
    {
        fontSize: 12,
        fontFamily: Fonts.Cairo_Regular,
        writingDirection: 'rtl',
    },
    titleInput:
    {
        fontSize: 12,
        lineHeight: 16,
        color: Colors.mineShaft,
        paddingRight: 5,
        fontFamily: Fonts.Cairo_Regular,
    },
    buttonContainer:
    {
        width:'100%',
        paddingBottom:10,
        paddingTop: 30,
    },
    titleButton:
    {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: Fonts.Cairo_Bold,
        color: Colors.white,
    },
});

export default styles;
