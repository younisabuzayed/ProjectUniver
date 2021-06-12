/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, ActivityIndicator, ScrollView} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import { useToast } from 'react-native-fast-toast';

//Compoent
import ItemProduct from '../../../components/ItemProduct';
import CategoriesAction from '../../../redux/actions/CategoriesAction';
import ProductsAction from '../../../redux/actions/ProductsAction';

//Styles and Icons
import styles, { width } from './styles';
import Colors from '../../../../assets/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ProfileShopAction from '../../../redux/actions/ProfileShopAction';
import ProfileAction from '../../../redux/actions/ProfileAction';



const HomeSeller = ({products, productsAction, profileShop, profileShopAction, profile, profileAction}) => {
    React.useEffect(() => {
        productsAction();
        profileShopAction();
        profileAction();
    }, []);

    const toast = useToast();
    const navigation = useNavigation();
    const onPressColseAndOpen = (switchBool) =>
  {
   switchBool
    ? toast.show(
      'تم  فك اغلاق اطلاق المنتج',
      {
        icon: <FontAwesome
                name="unlock"
                size={24}
                color={Colors.fernGreen} />,
        style: styles.toastContainer,
        textStyle: styles.toastText})
    : toast.show(
        'تم اغلاق اطلاق المنتج',
        {
          icon: <FontAwesome
                  name="lock"
                  size={24}
                  color={Colors.fernGreen} />,
          style: styles.toastContainer,
          textStyle: styles.toastText});
          console.log(switchBool)
  };
    if (products !== null && profileShop !== null && profile !== null)
    {
      const defaultSeller = profile.seller !== null ?  profile.seller : '60c34cdcafb82e001533c0d8';
      const selected = profileShop.filter((_) => _.id === defaultSeller)[0];
    return (
        <View
          style={styles.homeContainer} >
            <ScrollView>
              <View
                style={styles.productsContainer} >
                  <FlatList
                      data={selected.products}
                      keyExtractor={(item) => item.id}
                      contentContainerStyle={styles.itemProductsContainer}
                      columnWrapperStyle={{marginRight: 6, marginLeft: 6}}
                      numColumns={2}
                      maxToRenderPerBatch={5}
                      disableVirtualization={true}
                      showsHorizontalScrollIndicator={false}
                      renderItem={({item}) =><ItemProduct
                                               favorites={true}
                                               item={item}
                                               navigation={navigation}
                                               navigate_name="AddPrdouct"
                                               switchButton={true}
                                               onChangeSwitch={onPressColseAndOpen} />} />
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
        profileShop: state.ProfileShop.profileShop,
        profile: state.Profile.profile,

    };
};
const mapDispatchToProps = (dispatch) =>
{
    return {
        categoriesAction: () => dispatch(CategoriesAction()),
        productsAction: () => dispatch(ProductsAction()),
        profileShopAction: () => dispatch(ProfileShopAction()),
        profileAction: () => dispatch(ProfileAction()),
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(HomeSeller);
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