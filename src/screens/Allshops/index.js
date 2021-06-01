/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import ProfileShopAction from '../../redux/actions/ProfileShopAction';
import styles from './styles';

const Allshops = ({profileShop, profileShopAction}) => {
    React.useEffect(() =>
    {
        profileShopAction();
    },[]);
    const navigation = useNavigation();
    // console.log(profileShop);
    const Item = ({item, navigation}) =>
    {
        return (
            <TouchableOpacity
              style={styles.cartItemContainer}
              onPress={() => navigation.navigate('ProfileShop',{
                              id_shop: item.id,
                              name_shop: item.shop_name,
                              logo :item.logo.length !== 0 ? {uri: item.logo[0].url} :  require('../../../assets/images/restaurant.png')})} >
                <View
                style={styles.imageProducts} >
                    <Image
                      style={styles.imageProducts}
                      source={item.logo.length !== 0 ? {uri: item.logo[0].url} :  require('../../../assets/images/restaurant.png')}
                      resizeMode="contain" />
                </View>
                <View
                    style={styles.cartItemContent}>
                    <Text
                        style={styles.title}>{item.shop_name}</Text>
                </View>
            </TouchableOpacity>
        );
    };
    return (
        <View
          style={styles.allshopsContainer}>
            <FlatList
              data={profileShop}
              renderItem={({item}) => <Item item={item} navigation={navigation}/>} />
        </View>
    );
};
const mapStateToProps = (state) =>
{
    return {

        profileShop: state.ProfileShop.profileShop,

    };
};
const mapDispatchToProps = (dispatch) =>
{
    return {
        profileShopAction: () => dispatch(ProfileShopAction()),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Allshops);
