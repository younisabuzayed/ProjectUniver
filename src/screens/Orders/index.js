/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-lone-blocks */
import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../../assets/colors';
import { Button, Choose, SwipeButton } from '../../components';
import AlertMessage from '../../components/Alert/AlertMessage';
import CartItem, { CartItemSwipe } from '../../components/CartItem';
import styles from './styles';

const Orders = () => {
    const [one, setOne] = React.useState(true);
    const [two, setTwo] = React.useState(false);
    const [isVisible, setIsVisible] = React.useState(false);
    const navigation = useNavigation();
    const oneFunction = () =>
    {
      setOne(true);
      setTwo(false);
    };
    const twoFunction = () =>
    {
      setTwo(true);
      setOne(false);
    };
    const NewOrders = () =>
    {
      return (
        <View>
          <CartItem
            textState="قيد تنفيد"
            cancel
            onPress={() =>{setIsVisible(!isVisible)}}
            width={100}
            onPressNavigate={() => navigation.navigate('Product',{
                        idItem: '602bd4ff35d602001586b0fc',
                        nameCategory:'الاجهزة الالكترونية',
                      })} />
          <CartItem
            textState="قيد تنفيد"
            cancel
            width={100}
            onPressNavigate={() => navigation.navigate('Product',{
                        idItem: '602bd4ff35d602001586b0fc',
                        nameCategory:'الاجهزة الالكترونية',
                      })} />
        </View>
      );
    };
    const OldOrders = () =>
    {
      return (
        <View>
          <CartItemSwipe
            textState="تم استلام"
            add
            width={50}
            onPress={() => navigation.navigate('Product',{
                        idItem: '602bd4ff35d602001586b0fc',
                        nameCategory:'الاجهزة الالكترونية',
                      })} />
        </View>
      );
    };
    React.useEffect(() => {
      isVisible === true && setTimeout(() =>setIsVisible(!isVisible) , 2500);
    }, [isVisible]);
    return (
        <SafeAreaView
          style={styles.ordersContainer}>
            <View
              style={styles.headerButton}>
              <Button
                active
                backgroundColor={one === true
                   ? Colors.fernGreen
                   : Colors.white}
                title="الطلبات الجديدة"
                styleButton={styles.button}
                titleStyle={[
                  styles.titleButton,
                  {color: one === true
                    ? Colors.white
                    : Colors.balck}]}
                onPress={oneFunction} />
              <Button
                active
                backgroundColor={two === true
                   ? Colors.fernGreen
                   : Colors.white}
                title="الطلبات القديمة"
                styleButton={styles.button}
                titleStyle={[
                  styles.titleButton,
                  {color: two === true
                    ? Colors.white
                    : Colors.balck}]}
                onPress={twoFunction} />
            </View>
            {/*New ordres */}
           {two === false && <View
              style={styles.cartItemsContainer}>
              <NewOrders />
            </View>}
            {/* Old orders */}
           {one === false &&  <View
              style={styles.cartItemsContainer}>
              <OldOrders />
            </View>}
            <Choose
              isVisible={isVisible}
              onBackdropPress={() => setIsVisible(!isVisible)}>
                <AlertMessage
                  icon="sentiment-very-dissatisfied"
                  colorIcon={Colors.carnation}
                  title="نعتذر منك"
                  description="لا تستطيع الغاء الطلبة لانها تجاوزت الوقت المتفق وهو دقيقة"
                  messageTitle="شكراً لكم"
                  titleStyle={styles.titleStyle}
                  descriptionStyle={styles.descriptionStyle} />
            </Choose>
        </SafeAreaView>
    );
};

export default Orders;
