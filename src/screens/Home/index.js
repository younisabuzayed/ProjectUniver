/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, ActivityIndicator, ScrollView} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';

//Compoent
import CategoriesAction from '../../redux/actions/CategoriesAction';
import ProductsAction from '../../redux/actions/ProductsAction';

//Styles and Icons
import styles, { width } from './styles';
import Colors from '../../../assets/colors';
import ItemProduct from '../../components/ItemProduct';


const ENTRIES1 = [
    {
        title: 'Beautiful and dramatic Antelope Canyon',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.imgur.com/UYiroysl.jpg',
    },
    {
        title: 'Earlier this morning, NYC',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
    },
    {
        title: 'White Pocket Sunset',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
        illustration: 'https://i.imgur.com/MABUbpDl.jpg',
    },
];
const Home = ({categories,categoriesAction,
               products, productsAction}) => {
    const sliderRef = React.useRef();
    const [activeDot, setActiveDot] = React.useState(0);
    React.useEffect(() => {
        categoriesAction();
        productsAction();
    }, []);
    const navigation = useNavigation();
    const renderItemCategories = ({item}) =>
    {
        return (
            <TouchableOpacity
              style={styles.categoriesContainer}
              onPress={() => navigation.navigate('Category',{
                idItems: item.category_id,
                name: item.name,
              })} >
             <Text
               style={styles.categoriesTitle} >{item.name}</Text>
            </TouchableOpacity>
        );
    };

    //Slider for Ads
    const SliderContainer = () =>
    {
        return (
         <>
            <View
              style={styles.slider} >
             <Carousel
               ref={sliderRef}
               data={ENTRIES1}
               itemWidth={width - 30}
               sliderWidth={width - 30}
               firstItem={activeDot}
               loop={true}
               autoplay={true}
               renderItem={({item}) =>
               {
                  return (
                      <View>
                        <Image
                          source={{uri: item.illustration}}
                          style={styles.imageCarousel} />
                      </View>
                  );
               }}
               onSnapToItem={(index) => setActiveDot(index)} />
            </View>
            <Pagination
               dotsLength={ENTRIES1.length}
               activeDotIndex={activeDot}
               inactiveDotStyle={{width: 7}}
               dotColor={Colors.fernGreen}
               dotStyle={{height: 7, width: 25}}
               inactiveDotColor={Colors.gray}
               inactiveDotOpacity={0.4}
               inactiveDotScale={0.6}
               carouselRef={sliderRef}
               tappableDots={!!sliderRef}
               containerStyle={styles.PaginationContainer} />
         </>
        );
    };
    if (categories !== null && products !== null)
    {
    return (
        <View
          style={styles.homeContainer} >
        <ScrollView>
         {/*Slider */}
         <SliderContainer />
         {/* FlatList Catgories */}
         <View
           style={styles.flatListCatgoriesContainer} >
            <FlatList
              data={categories}
              keyExtractor={(item) => item.id}
              horizontal
              contentContainerStyle={styles.flatListCatgories}
              showsHorizontalScrollIndicator={false}
              renderItem={renderItemCategories} />
         </View>
         <View
           style={styles.productsContainer} >
            <Text
              style={styles.title}>المنتجات الجديدة</Text>
           <FlatList
              data={products.slice(0,4)}
              keyExtractor={(item) => item.id}
              contentContainerStyle={styles.itemProductsContainer}
              columnWrapperStyle={{marginRight: 6, marginLeft: 6}}
              numColumns={2}
              maxToRenderPerBatch={5}
              disableVirtualization={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) =><ItemProduct item={item} navigation={navigation} onChange={(bool) => console.log(bool)} />} />
          {/* {products.slice(0,5).map(renderItemProducts)} */}
         </View>
         <View
           style={styles.productsContainer} >
            <Text
              style={styles.title} >أعلى طلبا</Text>
            <FlatList
              data={products.slice(0,4)}
              keyExtractor={(item) => item.id}
              contentContainerStyle={styles.itemProductsContainer}
              columnWrapperStyle={{marginRight: 6, marginLeft: 6}}
              numColumns={2}
              maxToRenderPerBatch={5}
              disableVirtualization={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) =><ItemProduct item={item} navigation={navigation} onChange={(bool) => console.log(bool)} />} />
          {/* {products.map(renderItemProducts)} */}
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
export default connect(mapStateToProps,mapDispatchToProps)(Home);
 // const RenderItemProducts = ({item}) =>
    // {
    //     const [favorite, setFavorite] = React.useState(false);
    //     return (
    //         <TouchableOpacity
    //           style={styles.productsInnerContainer}
    //           onPress={() => navigation.navigate('Product',{
    //             idItem: item.id,
    //             nameCategory: item.categories,
    //           })} >
    //           <View
    //             style={styles.imageProductsContaier} >
    //              <Image
    //                style={styles.imageProducts}
    //                source={{uri: item.image[0].url}}
    //                resizeMode="stretch" />
    //           </View>
    //           <View
    //             style={styles.iconDiscount} >
    //              <ImageBackground
    //                style={styles.imageIconDiscount}
    //                source={require('../../../assets/images/iconDiscounts.png')}
    //                resizeMode="stretch" >
    //                  <Text
    //                    style={styles.discountText} >{`%${50}`}</Text>
    //                </ImageBackground>
    //           </View>
    //           <TouchableOpacity
    //             style={styles.iconFavorite}
    //             onPress={() => setFavorite(!favorite)} >
    //               <MaterialIcons
    //                 name={favorite === true
    //                       ? 'favorite'
    //                       : 'favorite-outline'}
    //                 size={20}
    //                 color={favorite === true
    //                       ? Colors.carnation
    //                       : Colors.balck} />
    //           </TouchableOpacity>
    //           <View
    //             style={styles.ContentProductsContainer} >
    //               <View
    //                 style={styles.ratingandtitleContainer} >
    //                 <Text
    //                   numberOfLines={1}
    //                   style={styles.titleProducts}
    //                   ellipsizeMode="tail" >{item.title}</Text>
    //                 <View
    //                   style={styles.ratingContainer} >
    //                   <Text
    //                     style={styles.ratingTitle} >4.9</Text>
    //                   <FontAwesome
    //                     name="star"
    //                     color="#FFB850" />
    //                 </View>
    //               </View>
    //               <Text
    //                 numberOfLines={1}
    //                 style={styles.titleProductsStore}>{'محلات القدوة'}</Text>
    //               <View
    //                 style={styles.iconAndPriceRow} >
    //                   <View
    //                     style={styles.price}>
    //                       <Text
    //                         style={styles.priceProducts}>
    //                           {`${item.price}`}
    //                           <Text
    //                             style={styles.typeMoney} >ش</Text>
    //                         </Text>
    //                       <View>
    //                       <Text
    //                         style={styles.orginalPrice}>
    //                           {`بدل ${200}`}</Text>
    //                           <View
    //                             style={styles.prevPrice} />
    //                       </View>
    //                   </View>
    //                   <View
    //                     style={styles.iconPlus} >
    //                       <Octicons name="plus" size={20} color={Colors.white} />
    //                   </View>
    //               </View>
    //           </View>
    //         </TouchableOpacity>
    //     );
    // };