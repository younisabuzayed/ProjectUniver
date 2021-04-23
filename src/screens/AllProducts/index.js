/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Animated, TouchableOpacity, Image, FlatList, ActivityIndicator, ScrollView, ImageBackground, PixelRatio } from 'react-native';
import { connect } from 'react-redux';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { useNavigation, useRoute } from '@react-navigation/native';
//State Management
import CategoriesAction from '../../redux/actions/CategoriesAction';
import ProductsAction from '../../redux/actions/ProductsAction';

// Styles and Icon
import styles, { width } from './styles';
import Colors from '../../../assets/colors';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const AllProducts = ({categories,categoriesAction, products, productsAction}) => {
    const navigation = useNavigation();
    const route = useRoute();
    React.useEffect(() => {
        categoriesAction();
        productsAction();
        navigation.setOptions({headerTitle: route.params.nameTab});
    }, []);

    const renderItemCategories = ({item}) =>
    {
        return (
            <TouchableOpacity
              style={styles.categoriesContainer} >
             <Text
               style={styles.categoriesTitle} >{item.name}</Text>
            </TouchableOpacity>
        );
    };
    const RenderItemProducts = ({item}) =>
    {
    const [favorite, setFavorite] = React.useState(false)
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
    if (categories !== null)
    {
    return (
        <View
          style={styles.allProductsContainer} >
        <ScrollView>
         <View
           style={styles.productsContainer} >
            <Text
              style={styles.title}>{route.params.name}</Text>
           <FlatList
              data={products}
              keyExtractor={(item) => item.id}
              contentContainerStyle={styles.itemProductsContainer}
              columnWrapperStyle={{marginRight: 6, marginLeft: 6}}
              numColumns={2}
              maxToRenderPerBatch={5}
              disableVirtualization={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) =><RenderItemProducts item={item} />} />
          {/* {products.slice(0,5).map(renderItemProducts)} */}
         </View>
        </ScrollView>
        </View>
    );
    }
    else {
        return (
            <View
              style={styles.activityIndicator}>
                <ActivityIndicator
                  color="#58b760"
                  size="large" />
            </View>
        );
    }
};
const mapStateToProps = (state) =>
{
    return {
        categories: state.Categories.categories,
        products: state.Products.products,
    };
};
const mapDispatchToProps = (dispatch) =>
{
    return {
        categoriesAction: () => dispatch(CategoriesAction()),
        productsAction: () => dispatch(ProductsAction()),
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(AllProducts);
