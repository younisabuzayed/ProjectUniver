import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Colors from '../../../assets/colors';
import { Button } from '../../components';
import SwipeButton from '../../components/SwipeButton';
import Octicons from 'react-native-vector-icons/Octicons';
import styles from './styles';

const Cart = () => {
    return (
        <View
          style={styles.cartContainer}>
            <ScrollView
              style={styles.bodyContainer}>
                <SwipeButton />
                <SwipeButton />
                <SwipeButton />
                <SwipeButton />
                <SwipeButton />
                <SwipeButton />
                <SwipeButton />
                <SwipeButton />
                <SwipeButton />
            </ScrollView>

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
                        {`${800} `}
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
        </View>
    );
};

export default Cart;
