import React from 'react';
import { View, Text } from 'react-native';
import SwipeButton from '../../components/SwipeButton';
import styles from './styles';

const Cart = () => {
    return (
        <View
          style={styles.cartContainer}>
            <View
              style={styles.bodyContainer}>
                <SwipeButton />
            </View>
            <View
              style={styles.strok} />
            <View
              style={styles.buttomContainer} >
                <View
                  style={styles.totalContainer}>
                    <Text
                      style={styles.totalText} >الإجمالي</Text>
                    <Text
                      style={styles.totalNumber} >{`${8} شيكل`}</Text>
                </View>
                <View
                  style={styles.addressContainer} ></View>
            </View>
        </View>
    );
};

export default Cart;
