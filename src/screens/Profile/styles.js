import {Dimensions, StyleSheet} from 'react-native';
import Colors from '../../../assets/colors';
import Fonts from '../../../assets/fonts';
export const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    profileContainer:
    {
        flex: 1,
        backgroundColor: Colors.white,
    },
    headerContainer:
    {
        width,
    },
    headerTitleAndButtonContainer:
    {
        backgroundColor: Colors.fernGreen,
        height: 150,
        width: '100%',
        paddingTop: 20,
    },
    fillColor:
    {
        ...StyleSheet.absoluteFill,
        backgroundColor: Colors.fernGreen,
    },
    goBackIconContainer:
    {
        alignItems: 'flex-start',
    },
    goBackIcon:
    {
        marginLeft:10,
    },
    nameScreenContainer:
    {
        alignItems: 'center',
    },
    nameScreenText:
    {
        fontSize: 18,
        color: Colors.white,
        textAlign: 'center',
    },
    deleteAccountButton:
    {
        marginLeft: 0,
        marginRight: 10,
        marginTop: 3,
    },
    profileImageContainer:
    {
        width: '100%',
        justifyContent:'center',
        alignItems:'center',
        position: 'absolute',
        top: -40,
        zIndex: 10,
    },
    addPhotoContainer:
    {
        backgroundColor: Colors.white,
        height: 30,
        width: 30,
        flex:1,
        position: 'absolute',
        bottom: -5,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems:'center',
        shadowColor: Colors.balck,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    contentContainer:
    {
        flexDirection: 'row',
        backgroundColor:Colors.white,
        justifyContent:'space-between',
        alignItems: 'center',
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
        marginTop: 10,
        paddingTop: 70,

    },
    NameContainer:
    {
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
    },
    NameText:
    {
        fontSize: 10,
        marginTop: 9,
        fontFamily: Fonts.Cairo_Regular,
        color: Colors.titleProduct,
    },
    phoneNumberContainer:
    {
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
    },
    phoneNumberText:
    {
        fontSize: 10,
        marginTop: 9,
        fontFamily: Fonts.Cairo_Regular,
        color: Colors.titleProduct,
    },
    addressContainer:
    {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
        flex: 1,
    },
    addressText:
    {
        fontSize: 10,
        marginTop: 9,
        fontFamily: Fonts.Cairo_Regular,
        color: Colors.titleProduct,
    },
    bodyContainer:
    {
        paddingTop: 50,
    },
    //Content Box
    contentBoxContainer:
    {
        height: 40,
        width: '100%',
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 18,
    },
    titleAndIconContainer:
    {
        flexDirection: 'row',
        alignItems:'center',
    },
    iconContent:
    {
        height: 40,
        width: 40,
        borderRadius: 8,
        backgroundColor:'#F3F3F3',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 18,
    },
    titleContent:
    {
        fontSize: 12,
    },
    numberContent:
    {
        justifyContent: 'center',
        alignItems: 'center',
    },
    numberText:
    {
        fontSize: 12,
        color: Colors.fernGreen,
    },
    activityIndicator:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default styles;
