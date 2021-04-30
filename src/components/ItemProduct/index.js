/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground, PixelRatio } from 'react-native';

//Styles and Icons
import Colors from '../../../assets/colors';
import styles, {width} from './styles';
import Octicons from 'react-native-vector-icons/Octicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const priceDiscount = 10;
const ItemProduct = ({item, navigation, onChange}) =>
    {
        const [favorite, setFavorite] = React.useState(false);
        const onPressFavorite = () =>{
          setFavorite(!favorite);
          onChange(!favorite);
        };
        return (
            <TouchableOpacity
              style={styles.productsInnerContainer}
              onPress={() => navigation.navigate('Product',{
                idItem: item.id,
                nameCategory: item.categories,
              })} >
              <View
                style={styles.imageProductsContaier} >
                 <Image
                   style={styles.imageProducts}
                   source={{uri: item.image[0].url}}
                   resizeMode="stretch" />
              </View>
              <View
                style={styles.iconDiscount} >
                 <ImageBackground
                   style={styles.imageIconDiscount}
                   source={require('../../../assets/images/iconDiscounts.png')}
                   resizeMode="stretch" >
                     <Text
                       style={styles.discountText} >{`%${Math.round((priceDiscount / item.price) * 100)}`}</Text>
                   </ImageBackground>
              </View>
              <TouchableOpacity
                style={styles.iconFavorite}
                onPress={onPressFavorite} >
                  <Fontisto
                    name={favorite === true
                          ? 'heart'
                          : 'heart-alt'}
                    size={14}
                    color={favorite === true
                          ? Colors.carnation
                          : Colors.balck}
                    style={styles.icon} />
              </TouchableOpacity>
              <View
                style={styles.ContentProductsContainer} >
                  <View
                    style={styles.ratingandtitleContainer} >
                    <Text
                      numberOfLines={1}
                      style={styles.titleProducts}
                      ellipsizeMode="tail" >{item.title}</Text>
                    <View
                      style={styles.ratingContainer} >
                      <Text
                        style={styles.ratingTitle} >4.9</Text>
                      <FontAwesome
                        name="star"
                        color="#FFB850" />
                    </View>
                  </View>
                  <Text
                    numberOfLines={1}
                    style={styles.titleProductsStore}>{'محلات القدوة'}</Text>
                  <View
                    style={styles.iconAndPriceRow} >
                      <View
                        style={styles.price}>
                          <Text
                            style={styles.priceProducts}>
                              {`${item.price} `}
                              <Text
                                style={styles.typeMoney} >ش</Text>
                            </Text>
                          <View>
                          <Text
                            style={styles.orginalPrice}>
                              {`بدل ${priceDiscount}`}</Text>
                              <View
                                style={styles.prevPrice} />
                          </View>
                      </View>
                      <View
                        style={styles.iconPlus} >
                          <Octicons name="plus" size={20} color={Colors.white} />
                      </View>
                  </View>
              </View>
            </TouchableOpacity>
        );
    };
export default ItemProduct;

