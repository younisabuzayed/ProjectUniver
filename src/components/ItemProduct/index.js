/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground, Switch, Platform } from 'react-native';

//Styles and Icons
import Colors from '../../../assets/colors';
import styles, {width} from './styles';
import Octicons from 'react-native-vector-icons/Octicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const priceDiscount = 10;
const ItemProduct = ({item, navigation, onChange,
                      favorites, switchButton, onChangeSwitch}) =>
    {
        const [favorite, setFavorite] = React.useState(item.favorite);
        const [isSwitchOn, setIsSwitchOn] = React.useState(false);

        const onToggleSwitch = () =>
        {
          setIsSwitchOn(!isSwitchOn);
          onChangeSwitch(!isSwitchOn);
        };
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
              {!favorites && <TouchableOpacity
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
              </TouchableOpacity>}
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
                      {!switchButton
                        ? <TouchableOpacity
                            style={styles.iconPlus}
                            onPress={() =>{}} >
                              <Octicons name="plus" size={20} color={Colors.white} />
                          </TouchableOpacity>
                        : <Switch
                            value={isSwitchOn}
                            onValueChange={onToggleSwitch}
                            trackColor={{ false: '#DEDEDE', true: '#DEDEDE'}}
                            thumbColor={isSwitchOn ? Colors.fernGreen : Colors.carnation}
                            ios_backgroundColor="#DEDEDE"
                            style={styles.switchBitton} />}
                  </View>
              </View>
            </TouchableOpacity>
        );
    };
export default ItemProduct;

