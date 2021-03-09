import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Colors from '../../../assets/colors';
import styles from './styles';
import Octicons from 'react-native-vector-icons/Octicons';

const Item = ({item, onPress}) =>
{
    return (
        <TouchableOpacity
          style={styles.productsInnerContainer}
          onPress={onPress} >
          <View
            style={styles.imageProducts} >
             <Image
               style={styles.imageProducts}
               source={{uri: item.image[0].url}}
               resizeMode="stretch" />
          </View>
          <View
            style={styles.ContentProductsContainer} >
              <Text
                numberOfLines={1}
                style={styles.titleProducts}>{item.title}</Text>
              <View
                style={styles.iconAndPriceRow} >
                <Text
                    style={styles.priceProducts}>{`${item.price} شيكل`}</Text>
                <View
                  style={styles.iconPlus} >
                    <Octicons name="plus" size={20} color={Colors.white} />
                </View>
              </View>
          </View>
        </TouchableOpacity>
    );
};
export default Item;
