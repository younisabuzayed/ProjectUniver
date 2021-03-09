/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Avatar } from 'react-native-paper';
import { connect } from 'react-redux';

// Custom Component
import { Button } from '../../components';
import CategoriesAction from '../../redux/actions/CategoriesAction';
import ProductsAction from '../../redux/actions/ProductsAction';

//Style and Icons
import styles from './styles';
import Colors from '../../../assets/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';

const Product = ({productsAction, products}) => {
   React.useEffect(() => {
     productsAction();
   }, []);
   const navigation = useNavigation();
   const route = useRoute();
   const itemProduct = route.params.idItem;
   const nameCategory = route.params.nameCategory;
   const selectedProduct = products.filter((_, i) => _.id === itemProduct)[0];
   const suggestProduct = products.filter((_, i) => _.categories[0].name === nameCategory[0].name);

   console.log(suggestProduct);
    return (
        <View
          style={styles.productContainer} >
            <ScrollView>
              <View
                style={styles.headerContainer} >
                  <Image
                    source={{uri: selectedProduct.image[0].url}}
                    style={styles.image}
                    resizeMode="stretch" />
              </View>
              <View
                style={styles.goBackIconContainer} >
                <Button
                  onPress={() => navigation.goBack()}
                  styleButton={styles.goBackIcon}
                  children={<MaterialIcons name="arrow-forward" size={25} color={'#AFAFAF'} style={{}} />} />
              </View>
              <View
                style={styles.bodyContainer} >
                  <View
                    style={styles.nameShopAndPriceProduct} >
                      <View
                        style={styles.nameAndImageShopContainer} >
                          <Avatar.Image
                            size={30}
                            source={{uri: 'https://banner2.cleanpng.com/20180612/ih/kisspng-computer-icons-avatar-user-profile-clip-art-5b1f69f0e68650.4078880515287853929442.jpg'}}
                            style={styles.avatar} />
                          <Text
                            style={styles.nameShop} >ريتال شوب</Text>
                      </View>
                      <View style={styles.priceContainer} >
                        <Text
                          style={styles.priceNumber} >
                          {` ${selectedProduct.price}`}
                          </Text>
                          <Text
                            style={styles.priceTitle} >شيكل</Text>
                      </View>
                  </View>
                  <Text
                    style={styles.productTitle} >{selectedProduct.title}</Text>
                  <View
                    style={styles.decriptiopnContainer} >
                      <Text
                        style={styles.decriptiopnTitle} >الوصف</Text>
                      <Text
                        style={styles.decriptiopnContent}>{selectedProduct.description}</Text>
                  </View>
                  <View
                    style={styles.priceCounterContainer} >
                      <View
                        style={styles.counterContainer} >
                          <Text>عدد المنتج</Text>
                          <View
                            style={styles.counterButtonAndNumber} >
                            <TouchableOpacity
                              style={styles.iconCounter} >
                                <Octicons name="plus" size={20} color={Colors.white}/>
                            </TouchableOpacity>
                            <Text
                              style={styles.counterNumber} >8</Text>
                            <TouchableOpacity
                              style={styles.iconCounter} >
                                <Octicons name="plus" size={20} color={Colors.white}/>
                            </TouchableOpacity>
                          </View>
                      </View>
                      <View
                        style={styles.priceGather} >
                          <Text>السعر</Text>
                          <View
                            style={styles.priceView}>
                              <Text>1000</Text>
                          </View>
                      </View>
                  </View>
                  <View
                    style={styles.colorsContainer} >
                      <Text>الالوان</Text>
                      <View
                        style={styles.circleContainer} >
                       <View style={[styles.colorCircle,{backgroundColor: '#B2B2B2'}]} />
                       <View style={[styles.colorCircle,{backgroundColor: '#FF5050'}]} />
                       <View style={[styles.colorCircle,{backgroundColor: '#000639'}]} />
                       <View style={[styles.colorCircle,{backgroundColor: '#A3ACFE'}]} />
                       <View style={[styles.colorCircle,{backgroundColor: 'red'}]} />
                       <View style={[styles.colorCircle,{backgroundColor: 'yellow'}]} />
                       <View style={[styles.colorCircle,{backgroundColor: 'blue'}]} />
                       <View style={[styles.colorCircle,{backgroundColor: 'green'}]} />
                       <View style={[styles.colorCircle,{backgroundColor: 'black'}]} />


                      </View>
                  </View>
              </View>
              <View
                style={styles.bottomContainer}  />
            </ScrollView>
        </View>
    );
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
export default connect(mapStateToProps,mapDispatchToProps)(Product);
