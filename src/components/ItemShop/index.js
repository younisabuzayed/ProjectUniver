import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

const ItemShop = ({item, navigation}) => {
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

export default ItemShop;
