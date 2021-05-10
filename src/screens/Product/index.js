/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Avatar, Badge } from 'react-native-paper';
import { connect } from 'react-redux';
import Modal from 'react-native-modal';
import Share from 'react-native-share';
import { useToast } from 'react-native-fast-toast';

// Custom Component
import { Button, ColorSelction } from '../../components';
import CategoriesAction from '../../redux/actions/CategoriesAction';
import ProductsAction from '../../redux/actions/ProductsAction';
import Selection from '../../components/Selection';

//Style and Icons
import styles from './styles';
import Colors from '../../../assets/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';

//choose Container
const timeOut = 500;
const Choose = ({isVisible, children,onBackdropPress, timeOut}) =>
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
  );
};
const Counter = ({onPressPlus, onPressMinus, counter}) =>
{
  return (
    <View
      style={styles.counterButtonAndNumber} >
        <TouchableOpacity
          style={styles.iconCounter}
          onPress={onPressPlus} >
            <Octicons name="plus" size={20} color={Colors.white}/>
        </TouchableOpacity>
        <Text
          style={styles.counterNumber} >{counter}</Text>
        <TouchableOpacity
          style={styles.iconCounter}
          onPress={onPressMinus} >
            <Entypo name="minus" size={20} color={Colors.white}/>
        </TouchableOpacity>
    </View>
  );
};

const Product = ({productsAction, products}) => {
  React.useEffect(() => {
    productsAction();
  }, []);
  const navigation = useNavigation();
  const route = useRoute();
  const itemProduct = route.params.idItem;
  const nameCategory = route.params.nameCategory;
  const selectedProduct = products.filter((_, i) => _.id === itemProduct)[0];
  const [isVisible, setIsVisible] = React.useState(false);
  const [isVisibleMeasurements, setIsVisibleMeasurements] = React.useState(false);
  const [isVisibleNumberItem, setIsVisibleNumberItem] = React.useState(false);
  const [color, setColor] = React.useState(null);
  const [measurements, setMeasurements] = React.useState(null);
  const [counter, setCounter] = React.useState(1);
  const [price, setPrice] = React.useState(selectedProduct.price);
  const toast = useToast();
    //Button Share but now is not useful
  const onPressShare = async () => {
    const shareOptions = {
      message: `${selectedProduct.title} ${selectedProduct.price} شيكل`,
      title: `${selectedProduct.title} ${selectedProduct.price} شيكل`,
      url: selectedProduct.image[0].url,

    };
    try {
      const shareResponse = await Share.open(shareOptions);
    } catch (error) {
      console.log('share', error);
    }
  };
  console.log(selectedProduct);
  const increase = () =>
  {
    setCounter(counter + 1);
  };
  const discrease = () =>
  {
    if (counter === 0) {return;}
    setCounter(counter - 1);
  };
  const onPressAddToCart = () =>
  {
    toast.show(
      'تم اضافة المنتج الي السلة بنجاح',
      {
        icon: <MaterialIcons
                name="verified-user"
                size={24}
                color={Colors.fernGreen} />,
        style: styles.toastContainer,
        textStyle: styles.toastText});
  };
  //  const suggestProduct = products.filter((_, i) => _.categories[0].name === nameCategory[0].name);
    return (
        <SafeAreaView
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
                  children={<MaterialIcons name="arrow-forward" size={25} color={Colors.gray} />} />
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
                      onPress={onPressShare}>
                        <Ionicons name="share-social" size={30} color={'#BFBFBF'} />
                    </TouchableOpacity>
                  </View>
                  <View
                    style={styles.decriptiopnContainer} >
                      {selectedProduct.gender
                       && <Text
                            style={styles.decriptiopnContent}>{selectedProduct.gender}</Text>}
                      {selectedProduct.season
                       && <Text
                            style={styles.decriptiopnContent}>{selectedProduct.season}</Text>}
                      <Text
                        style={styles.decriptiopnContent}>{selectedProduct.description}</Text>
                  </View>
                  <View
                    style={styles.chooseContainer} >
                      <Text
                        style={styles.chooseTitle}>اختر مواصفات منتجك</Text>
                      <View
                        style={styles.chooseButtons}>
                        <View
                          style={styles.buttonsContainer}>
                            <Button
                              styleButton={styles.buttonChoose}
                              onPress={() => setIsVisible(!isVisible)}>
                                <MaterialIcons
                                  name={'color-lens'}
                                  size={35}
                                  color={Colors.fernGreen} />
                                <Choose
                                  isVisible={isVisible}
                                  timeOut={timeOut}
                                  onBackdropPress={() => setIsVisible(!isVisible)}>
                                  <View
                                    style={{height: 200, backgroundColor:'white'}}>
                                    <View
                                      style={styles.choosesContainer} >
                                        <View style={styles.strock} />
                                        <Text
                                          style={styles.title} >الالوان</Text>
                                        <View
                                          style={styles.circleContainer} >
                                          <ColorSelction
                                            colors={selectedProduct.colors}
                                            onChange={(color) => {
                                              setColor(color);
                                              setTimeout(() =>setIsVisible(!isVisible), timeOut);
                                              }}
                                            />
                                        </View>
                                    </View>
                                  </View>
                                </Choose>
                            </Button>
                            <Text
                              style={styles.titleButtons}>الالوان</Text>
                        </View>
                        {nameCategory[0].name === 'الملابس'
                        && <View
                          style={styles.buttonsContainer}>
                            <Button
                              styleButton={styles.buttonChoose}
                              onPress={() => setIsVisibleMeasurements(!isVisibleMeasurements)}>
                              <Image
                                source={require('../../../assets/images/iconMeasure.png')}
                                style={styles.chooseImage}
                                resizeMode="contain" />
                              <Choose
                                isVisible={isVisibleMeasurements}
                                timeOut={timeOut}
                                onBackdropPress={() => setIsVisibleMeasurements(!isVisibleMeasurements)}>
                                  <View style={styles.choosesContainer}>
                                    <View style={styles.strock} />
                                  <Text
                                    style={styles.title}>المقاسات</Text>
                                  <Selection
                                    items={selectedProduct.size}
                                    onChange={(num) => {
                                      setMeasurements(num);
                                      setTimeout(() =>setIsVisibleMeasurements(!isVisibleMeasurements), timeOut);
                                    }} />
                                  </View>
                                </Choose>
                            </Button>
                            <Text
                              style={styles.titleButtons}>المقاس</Text>
                        </View>}
                        <View
                          style={styles.buttonsContainer}>
                            <Button
                              styleButton={[styles.buttonChoose]}
                              onPress={() => setIsVisibleNumberItem(!isVisibleNumberItem)}>
                                <View
                                  style={{position: 'absolute', top: -10, left: 0}}>
                                <Badge
                                  style={styles.badge}
                                  theme={{fonts: {medium:{fontWeight:'bold'}}}}>{counter}</Badge>
                                </View>
                                <Image
                                  source={require('../../../assets/images/num.png')}
                                  style={styles.chooseImage} />
                                <Choose
                                  isVisible={isVisibleNumberItem}
                                  timeOut={timeOut}
                                  onBackdropPress={() => setIsVisibleNumberItem(!isVisibleNumberItem)}>
                                    <View style={styles.choosesContainer}>
                                        <View style={styles.strock} />
                                      <Text
                                        style={styles.title}>عدد المنتج</Text>
                                      <Counter
                                        counter={counter}
                                        onPressPlus={increase}
                                        onPressMinus={discrease} />
                                    </View>
                              </Choose>
                            </Button>
                            <Text
                              style={styles.titleButtons}>عدد المنتجات</Text>
                        </View>
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
                       titleStyle={styles.buttonAddCardText}
                       onPress={onPressAddToCart} />
                      <View
                      style={styles.priceView}>
                        <Text
                          style={styles.counterPriceText} >{`${price * counter}ش`}</Text>
                      </View>
                  </View>
              </View>
              <View
                style={styles.bottomContainer} />
            </ScrollView>
        </SafeAreaView>
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
