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
        marginTop: 60,
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
    deleteAccountContainer:
    {
        alignItems: 'flex-end',
    },
    deleteAccountTitle:
    {
        fontSize: 15,
        color: Colors.white,
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
    },
    avatar:
    {
        backgroundColor: Colors.white,
        shadowColor: Colors.balck,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    addPhotoContainer:
    {
        backgroundColor: Colors.white,
        height: 30,
        width: 30,
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
        justifyContent:'space-between',
        alignItems: 'center',
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
        paddingTop: 30,
    },
    NameContainer:
    {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 30,
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
        marginRight: 30,
        flex:1,
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
        paddingTop: 40,
    },
    itemProductsContainer:
    {
        justifyContent:'center',
        alignItems: 'center',
        paddingBottom: 20,
    },
    headerNavigation:
    {
        fontSize: 18,
        fontFamily: Fonts.Cairo_Bold,
    },
    activityIndicator:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default styles;
