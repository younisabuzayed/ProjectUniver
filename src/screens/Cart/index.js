/* eslint-disable no-alert */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import Colors from '../../../assets/colors';
import { Button } from '../../components';
import SwipeButton from '../../components/SwipeButton';
import Octicons from 'react-native-vector-icons/Octicons';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Share from 'react-native-share';
let datas = [
  {
    name: 'لابتوب ماك',
    price: '44',
    counter: '1',
    image: 'https://www.notebookcheck.net/typo3temp/_processed_/e/0/csm_181004111903200301900006K_95047b6aab.jpg'
  },
  {
    name: 'لابتوب ماك',
    price: '44',
    counter: 3,
    image: 'https://www.notebookcheck.net/typo3temp/_processed_/e/0/csm_181004111903200301900006K_95047b6aab.jpg',
  },
  {
    name: 'لابتوب ماك',
    price: '44',
    counter: '5',
    image: 'https://www.notebookcheck.net/typo3temp/_processed_/e/0/csm_181004111903200301900006K_95047b6aab.jpg'
  },
]
const Cart = () => {
  const [counterProducts, setCounterProducts] = React.useState(0);
  const [data, setData] = React.useState(datas);

  const navigation = useNavigation();
  React.useEffect(() => {
        navigation.setOptions({
          headerRight: () =>
          {
            return (
              <TouchableOpacity
                onPress={onPressShare}>
                  <Ionicons name="share-social" size={30} color={'#BFBFBF'} />
              </TouchableOpacity>
            );
          }});
    },[]);
  const onPressShare = async() =>
  {
    const shareOptions = {
      message: 'This is a test message',
      
    }
    try 
    {
      const shareResponse = await Share.open(shareOptions);
    } catch (error) {
      console.log('share', error)
    }
  }
  const onPressPlus = (item, index) =>
    {
      // data = item[index].counter + 1;
    };
    const onPressMiuns = (item, index) =>
    {
      if (item.counter <= 1) return;
      const newData = [...data]
      newData[index].counter - 1;
      // setData({...item.counter - 1})
    };
    return (
        <SafeAreaView
          style={styles.cartContainer}>

                <FlatList
                  data={data}
                  contentContainerStyle={styles.bodyContainer}
                  keyExtractor ={ (item, index) => index.toString()}
                  renderItem={({item, index}) =>
                    {
                      return (
                        <SwipeButton
                          title={item.name}
                          price={item.price}
                          image={{uri: item.image}}
                          counter={item.counter}
                          onPressPlus={() => onPressPlus(item,index)}
                          onPressMinus={() => onPressMiuns(item,index)} />
                      )
                    }} />
                
            <View
              style={styles.buttomContainer} >
                 <View
                  style={styles.strok} />
                <View
                  style={styles.totalContainer}>
                    <Text
                      style={styles.totalText} >الإجمالي</Text>
                    <Text
                      style={styles.totalNumber} >
                        {`${800 * counterProducts} `}
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
                          style={styles.iconCounter} >
                            <Octicons name="plus" size={20} color={Colors.white}/>
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
                      titleStyle={styles.titleButton} />

                </View>
            </View>
        </SafeAreaView>
    );
};

export default Cart;
