import {Dimensions, Platform, StyleSheet} from 'react-native';
import Colors from '../../../assets/colors';
import Fonts from '../../../assets/fonts';
const {width, height} = Dimensions.get('window');
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: Colors.white,
    },
    FlatListContainer:
    {
        flex: 0.9,
    },
    viewOnboard:
    {
        width,
        alignItems:'center',
        padding: 20,
    },
    titleAndBack:
    {
        flexDirection: 'row',
    },
    goBackIcon:
    {
        marginLeft:10,
        marginRight: 0,
        marginTop: 5,
    },
    viewImagesOnboard:
    {
        marginTop: 52,
        justifyContent: 'center',
        alignItems:'center',
    },
    imageOnboard:
    {
        width: wp('100%') ,
        height:Platform.OS === 'ios' ? hp(35) : hp(40),
    },
    viewTextOnboard:
    {
        marginTop: 40,
    },
    titleOnboard:
    {
        fontSize: 18,
        fontFamily: Fonts.Cairo_Bold,
        marginBottom: 10,
        textAlign: 'center',
    },
    descriptionOnboard:
    {
        fontSize: 14,
        fontFamily: Fonts.Cairo_Regular,
        textAlign:'center',
        width: 280,
    },
    nextContainer:
    {
        width:'100%',
        alignItems:'center',
        marginBottom: 10,
    },
    nextButton:
    {
        width: 163,
        height: 40,
        marginTop: 20,
    },
    nextButtonTitle:
    {
        fontSize: 14,
        fontFamily: Fonts.Cairo_Bold,
        color: Colors.white,
    },
    prevButton:
    {
        fontSize: 14,
    },
});

export default styles;
