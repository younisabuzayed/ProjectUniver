import React from 'react';
import { View, Text, TouchableOpacity, Image, Animated } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from '..';

//Styles and Fonts
import styles from './styles';
import Colors from '../../../assets/colors';
const IconAnimated = Animated.createAnimatedComponent(MaterialCommunityIcons);
const CartItem = () => {
    return (
      <View
        style={styles.cartItemContainer} >
         <View
           style={[styles.imageProducts,{height: '100%', justifyContent:'center',marginLeft: 5}]} >
             <Image
               style={styles.imageProducts}
               source={require('../../../assets/images/ZpHgR4U.png')}
               resizeMode="stretch" />
          </View>
          <View
            style={styles.cartItemContent}>
              <Text
                style={styles.conditionText}>قيد الانتظار</Text>
              <Text
                 style={styles.title}>لابتوب ماك</Text>
              <Text
                style={styles.description}
                numberOfLines={1}
                ellipsizeMode="tail" >{`${44} شيكل`}</Text>
          </View>
          <View
            style={styles.counterButtonAndNumber} >
            <Button
              title="الغاء الطلبية"
              backgroundColor={Colors.carnation}
              styleButton={styles.cancelButton}
              titleStyle={styles.textCancel} />
          </View>
      </View>
    );
};
export const CartItemSwipe = ({renderRightActions,onSwipeableLeftOpen}) => {
  const LeftAction = (progress, dragX) =>
    {
        const scale = dragX.interpolate({
            inputRange: [0, 100],
            outputRange: [0, 1],
            extrapolate: 'clamp',
        });
        return (
          <View style={{ justifyContent:'center', alignItems:'center'}} >
            <TouchableOpacity
              onPress={() => alert('test')}
              >
                <IconAnimated
                  style={{transform:[{scale}]}}
                  name="delete"
                  size={60}
                  color={Colors.Monza} />
            </TouchableOpacity>
          </View>
        )
    }
  return (
    <Swipeable
          renderLeftActions={LeftAction}
          renderRightActions={renderRightActions}
          onSwipeableLeftOpen={onSwipeableLeftOpen}
          containerStyle={{marginBottom: 20}}>
            <CartItem />
          </Swipeable>
  );
};
export default CartItem;
