import React from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';

//Styles and Icons
import Colors from '../../../assets/colors';
import styles, {width} from './styles';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const ItemProduct = ({item, navigation}) =>
    {
        const [favorite, setFavorite] = React.useState(false);
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
                       style={styles.discountText} >{`%${50}`}</Text>
                   </ImageBackground>
              </View>
              <TouchableOpacity
                style={styles.iconFavorite}
                onPress={() => setFavorite(!favorite)} >
                  <MaterialIcons
                    name={favorite === true
                          ? 'favorite'
                          : 'favorite-outline'}
                    size={20}
                    color={favorite === true
                          ? Colors.carnation
                          : Colors.balck} />
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
                              {`${item.price}`}
                              <Text
                                style={styles.typeMoney} >ش</Text>
                            </Text>
                          <View>
                          <Text
                            style={styles.orginalPrice}>
                              {`بدل ${200}`}</Text>
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

