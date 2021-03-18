/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Avatar, List } from 'react-native-paper';
import { connect } from 'react-redux';
import Modal from 'react-native-modal';

// Custom Component
import { Button, ColorSelction } from '../../components';
import CategoriesAction from '../../redux/actions/CategoriesAction';
import ProductsAction from '../../redux/actions/ProductsAction';

//Style and Icons
import styles from './styles';
import Colors from '../../../assets/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Selection from '../../components/Selection';
//choose Container
const timeOut = 500;
const Choose = ({isVisible, children,onBackdropPress}) =>
{
  return (
    <Modal
     testID={'modal'}
     isVisible={isVisible}
     onBackdropPress={onBackdropPress}
     animationOutTiming={timeOut}
     swipeDirection={['up', 'left', 'right', 'down']}
     style={{
        justifyContent: 'flex-end',
        margin: 0,
      }} >
         {children}
    </Modal>
  )
}
const Product = ({productsAction, products}) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isVisibleMeasurements, setIsVisibleMeasurements] = React.useState(false);
  const [isCheckedMeasurements, setIsCheckedMeasurements] = React.useState(false);
  const [color, setColor] = React.useState(null);
  const [measurements, setMeasurements] = React.useState(null);
  console.log(measurements);
   React.useEffect(() => {
     productsAction();
   }, []);
   const navigation = useNavigation();
   const route = useRoute();
   const itemProduct = route.params.idItem;
   const nameCategory = route.params.nameCategory;
   const selectedProduct = products.filter((_, i) => _.id === itemProduct)[0];
  //  const suggestProduct = products.filter((_, i) => _.categories[0].name === nameCategory[0].name);

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
                  children={<MaterialIcons name="arrow-forward" size={25} color={Colors.white} />} />
              </View>
              <View
                style={styles.bodyContainer} >
                <Text
                  style={styles.productTitle} >{selectedProduct.title}</Text>
                  <View
                    style={styles.nameShopAndPriceProduct} >
                      <View
                        style={styles.nameAndImageShopContainer} >
                          <Avatar.Image
                            size={30}
                            source={{uri: 'https://banner2.cleanpng.com/20180612/ih/kisspng-computer-icons-avatar-user-profile-clip-art-5b1f69f0e68650.4078880515287853929442.jpg'}}
                            style={styles.avatar} />
                          <View
                            style={styles.titleAndNameShop}>
                            <Text
                              style={styles.nameShop} >ريتال شوب</Text>
                            <View style={styles.priceContainer} >
                              <Text
                                style={styles.priceNumber} >
                                {` ${selectedProduct.price}`}
                                </Text>
                                <Text
                                  style={styles.priceTitle} >شيكل</Text>
                            </View>
                          </View>
                          {/*Icon */}
                          <View
                            style={styles.ratingContainer} >
                              <Text
                                style={styles.ratingTitle} >4.9</Text>
                                  <FontAwesome
                                    name="star"
                                    color="#FFB850"
                                    size={18} />
                          </View>
                          <View
                            style={styles.timeContainer}>
                              <Ionicons
                                name="time-outline"
                                color={Colors.gray}
                                size={12} />
                              <Text
                                style={styles.texttime}>20د</Text>
                          </View>
                      </View>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Search')}>
                        <Ionicons name="share-social" size={30} color={'#BFBFBF'} />
                    </TouchableOpacity>
                  </View>
                  <View
                    style={styles.decriptiopnContainer} >
                      <Text
                        style={styles.decriptiopnContent}>{selectedProduct.description}</Text>
                  </View>
                  <View
                    style={styles.chooseContainer} >
                      <Text
                        style={styles.chooseTitle}>اختر مواصفات منتجك </Text>
                      <View
                        style={styles.chooseButtons}>
                        <Button
                          styleButton={styles.buttonChoose}
                          onPress={() => setIsVisible(!isVisible)}>
                          <MaterialIcons
                            name={'color-lens'}
                            size={35}
                            color={Colors.fernGreen} />
                            <Choose
                              isVisible={isVisible}
                              onBackdropPress={() => setIsVisible(!isVisible)}>
                              <View
                                style={{height: 200, backgroundColor:'white'}}>
                                <View
                                  style={styles.colorsContainer} >
                                    <View style={styles.strock} />
                                    <Text
                                      style={styles.titleColor} >الالوان</Text>
                                    <View
                                      style={styles.circleContainer} >
                                      <ColorSelction
                                        colors={['white','#B2B2B2', '#FF5050', '#000639', '#A3ACFE', 'red', 'yellow', 'blue', 'green', 'black']}
                                        onChange={(color) => {
                                          setColor(color);
                                          setTimeout(() =>setIsVisible(!isVisible), timeOut);
                                          }}
                                         />
                                    </View>
                                    {/* <View
                                      style={styles.circle} /> */}
                                </View>
                              </View>
                            </Choose>
                        </Button>
                        <Button
                          styleButton={styles.buttonChoose}
                          onPress={() => setIsVisibleMeasurements(!isVisibleMeasurements)}>
                          <Image
                            source={require('../../../assets/images/scissors.png')}
                            style={styles.chooseImage}
                            resizeMode="contain" />
                          <Choose
                            isVisible={isVisibleMeasurements}
                            onBackdropPress={() => setIsVisibleMeasurements(!isVisibleMeasurements)}>
                              <View style={styles.colorsContainer}>
                              <Text>المقاسات</Text>
                              <Selection
                                items={['50', '60', '80', '100']}
                                onChange={(num) => setMeasurements(num)} />
                              </View>
                            </Choose>
                        </Button>
                        <Button
                          styleButton={[styles.buttonChoose]}>
                          <Image
                            source={require('../../../assets/images/num.png')}
                            style={styles.chooseImage} />
                        </Button>
                      </View>
                  </View>
                  <View
                    style={styles.buttonAndCounterPriceContainer} >
                     <Button
                       active
                       backgroundColor={Colors.fernGreen}
                       styleButton={styles.buttonAddCard}
                       title="اضافة الى السلة"
                       children={ <FontAwesome5
                          name="shopping-cart"
                          size={20}
                          color={Colors.white}
                          style={{}} />
                          }
                       titleStyle={styles.buttonAddCardText} />
                      <View
                      style={styles.priceView}>
                        <Text
                          style={styles.counterPriceText} >1000ش</Text>
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

/*
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
<View
  style={styles.priceView}>
  <Text>1000</Text>
  </View>*/
/*  <View style={[styles.colorCircle,{backgroundColor: '#B2B2B2'}]} />
      <View style={[styles.colorCircle,{backgroundColor: '#FF5050'}]} />
      <View style={[styles.colorCircle,{backgroundColor: '#000639'}]} />
      <View style={[styles.colorCircle,{backgroundColor: '#A3ACFE'}]} />
      <View style={[styles.colorCircle,{backgroundColor: 'red'}]} />
      <View style={[styles.colorCircle,{backgroundColor: 'yellow'}]} />
      <View style={[styles.colorCircle,{backgroundColor: 'blue'}]} />
      <View style={[styles.colorCircle,{backgroundColor: 'green'}]} />
      <View style={[styles.colorCircle,{backgroundColor: 'black'}]} />*/