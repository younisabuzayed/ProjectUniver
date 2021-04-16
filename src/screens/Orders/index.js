/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-lone-blocks */
import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import Colors from '../../../assets/colors';
import { Button, SwipeButton } from '../../components';
import CartItem, { CartItemSwipe } from '../../components/CartItem';
import styles from './styles';

const Orders = () => {
    const [one, setOne] = React.useState(true);
    const [two, setTwo] = React.useState(false);
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
          <CartItem />
          <CartItem />
        </View>
      );
    };
    const OldOrders = () =>
    {
      return (
        <View>
          <CartItemSwipe />
        </View>
      );
    };
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
        </SafeAreaView>
    );
};

export default Orders;
