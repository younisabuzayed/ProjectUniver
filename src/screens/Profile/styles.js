import {Dimensions, StyleSheet} from 'react-native';
import Colors from '../../../assets/colors';
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
        paddingLeft: 15,
        paddingRight: 15,
    },
    headerTitleAndButtonContainer:
    {
        backgroundColor: Colors.fernGreen,
        height: 170,
        width: '100%',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        flexDirection: 'row',
        paddingTop: 20,
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
        position: 'absolute',
        bottom: -30,
    },
    contentContainer:
    {
        flexDirection: 'row',
        height: 100,
        justifyContent:'space-between',
        alignItems: 'center',
        paddingTop: 52,
        width:'100%',
    },
    NameContainer:
    {
        justifyContent: 'center',
        alignItems: 'center',
    },
    NameText:
    {
        fontSize: 12,
        marginTop: 9,
    },
    phoneNumberContainer:
    {
        justifyContent: 'center',
        alignItems: 'center',
    },
    phoneNumberText:
    {
        fontSize: 12,
        marginTop: 9,
    },
    addressContainer:
    {
        justifyContent: 'center',
        alignItems: 'center',
    },
    addressText:
    {
        fontSize: 12,
        marginTop: 9,
    },
    bodyContainer:
    {
        paddingTop: 29,
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
});

export default styles;
