/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-alert */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import Colors from '../../../assets/colors';
import { Alert, Button, Confirm } from '../../components';
import SwipeButton from '../../components/SwipeButton';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
let datas = [
  {
    id: '1',
    name: 'لابتوب ماك',
    price: 44,
    counter: 1,
    image: 'https://www.notebookcheck.net/typo3temp/_processed_/e/0/csm_181004111903200301900006K_95047b6aab.jpg',
  },
  {
    id: '2',
    name: 'لابتوب ماك',
    price: 44,
    counter: 3,
    image: 'https://www.notebookcheck.net/typo3temp/_processed_/e/0/csm_181004111903200301900006K_95047b6aab.jpg',
  },
  {
    id: '3',
    name: 'لابتوب ماك',
    price: 44,
    counter: 5,
    image: 'https://www.notebookcheck.net/typo3temp/_processed_/e/0/csm_181004111903200301900006K_95047b6aab.jpg',
  },
  {
    id: '4',
    name: 'لابتوب ماك',
    price: 44,
    counter: 5,
    image: 'https://www.notebookcheck.net/typo3temp/_processed_/e/0/csm_181004111903200301900006K_95047b6aab.jpg',
  },
];
const deliveryTotal = 20;
const Cart = () => {
  const [data, setData] = React.useState(datas);
  const [isVisible, setIsVisible] = React.useState(false);

  const ref = React.useRef(null);
  const navigation = useNavigation();
  // React.useEffect(() => {
  //       navigation.setOptions({
  //         headerRight: () =>
  //         {
  //           return (
  //             <TouchableOpacity
  //               onPress={onPressShare}>
  //                 <Ionicons name="share-social" size={30} color={'#BFBFBF'} />
  //             </TouchableOpacity>
  //           );
  //         },});
  //   },[]);
    const [cartTotal, setCartTotal] = React.useState(0);

    React.useEffect(() => {
      total();
    }, [data]);
  // Gather prices from Products and counters
    const total = () => {
      let totalVal = 0;
      for (let i = 0; i < data.length; i++) {
        totalVal += (data[i].price * data[i].counter);
      }
      setCartTotal(totalVal);
    };
    //Remove Product from List
    const removeFromCart = (el) => {
      let hardCopy = [...data];
      hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
      setData(hardCopy);
    };
  //Button Share but now is not useful
  // const onPressShare = async () => {
  //   const shareOptions = {
  //     message: 'This is a test message',

  //   }
  //   try {
  //     const shareResponse = await Share.open(shareOptions);
  //   } catch (error) {
  //     console.log('share', error)
  //   }
  // }
  // update counter from data
  // React.useEffect(() =>
  // {
  //   updateCounter();
  // },[])
  const updateCounter = (index, coun) =>
  {

    const update = [...data];
    console.log(update, index);
    update[index].counter = coun;
    setData(update);
    console.log(coun, index);
  };
    return (
        <SafeAreaView
          style={styles.cartContainer}>
            <FlatList
              data={data}
              style={styles.bodyContainer}
              ref={ref}
              keyExtractor ={ (item, index) => index.toString()}
              renderItem={({item, index}) =>
                {
                  return (
                    <SwipeButton
                      key={index}
                      title={item.name}
                      price={item.price}
                      image={{uri: item.image}}
                      counter={item.counter}
                      onPress={() => navigation.navigate('Product',{
                        idItem: '602bd4ff35d602001586b0fc',
                        nameCategory:'الاجهزة الالكترونية',
                      })}
                      onPressSwipe={() => removeFromCart(item)}
                      onChange={(coun) => updateCounter(index, coun)} />
                  );
                }} />

            <View
              style={styles.buttomContainer} >
                 <View
                  style={styles.strok} />
                <View
                  style={[styles.rowProductsCounter,{marginTop: 9}]}>
                    <Text
                      style={styles.titleLable}>المنتجات</Text>
                    <Text
                      style={styles.titleLable}>
                      {`${cartTotal} شيكل`}
                    </Text>
                </View>
                <View
                  style={styles.rowProductsCounter}>
                    <Text
                      style={styles.titleLable}>الديليفري</Text>
                    <Text
                      style={styles.titleLable}>
                      {`${deliveryTotal} شيكل`}
                    </Text>
                </View>
                <View
                  style={styles.totalContainer}>
                    <Text
                      style={styles.totalText} >الإجمالي</Text>
                    <Text
                      style={styles.totalNumber} >
                        {`${cartTotal + deliveryTotal} `}
                        <Text
                          style={styles.typeMoneyText} >شيكل</Text>
                    </Text>
                </View>
                <View
                  style={styles.addressContainer} >
                    <View
                      style={styles.titleAndButtonAddress}>
                        <Text>الموقع</Text>
                        <TouchableOpacity
                          style={styles.iconCounter}
                          onPress={() => navigation.navigate('Address')} >
                            <MaterialIcons name="edit" size={20} color={Colors.white}/>
                        </TouchableOpacity>
                    </View>
                    <View
                      style={styles.addressContent} >
                        <Text
                          style={styles.addressText}>
                            {`${'غزة'} - ${'السدرة'} - ${'شارع يافا'}`}
                        </Text>
                    </View>
                </View>
                <View
                  style={styles.buttonContainer} >
                    <Button
                      active
                      title="طلب الطلبية"
                      backgroundColor= {Colors.fernGreen}
                      titleStyle={styles.titleButton}
                      onPress={() => setIsVisible(!isVisible)} />
                </View>
                <Alert
                  isVisible={isVisible}
                  onBackdropPress={() => setIsVisible(!isVisible)} >
                    <Confirm
                      icon="verified-user"
                      colorIcon={Colors.fernGreen}
                      title="تأكد"
                      description="انك تريد شراء الطلبية التي اضفتها"
                      buttonTitleOne="نعم متأكد"
                      buttonTitleTwo="لا اريد الشراء"
                      onPressOne={() => setIsVisible(!isVisible)}
                      onPressTwo={() => setIsVisible(!isVisible)} />
                  </Alert>
            </View>
        </SafeAreaView>
    );
};

export default Cart;
