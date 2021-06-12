import React from 'react';
import { View, Text, TouchableOpacity, Image, Animated } from 'react-native';

//Component
import { Swipeable } from 'react-native-gesture-handler';
import { Button } from '..';

//Styles and Fonts
import styles from './styles';
import Colors from '../../../assets/colors';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const IconAnimated = Animated.createAnimatedComponent(MaterialCommunityIcons);
const CartItem = ({textState, cancel, add, width, onPress, onPressNavigate}) => {
    return (
      <TouchableOpacity
        style={styles.cartItemContainer}
        onPress={onPressNavigate} >
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
                style={styles.conditionText}>{textState}</Text>
              <Text
                 style={styles.title}>لابتوب ماك</Text>
              <Text
                style={styles.description}
                numberOfLines={1}
                ellipsizeMode="tail" >{`${44} شيكل`}</Text>
          </View>
          <View
            style={[styles.counterButtonAndNumber,{width}]} >
            {cancel && <Button
              title="الغاء الطلبية"
              onPress={onPress}
              backgroundColor={Colors.carnation}
              styleButton={styles.cancelButton}
              titleStyle={styles.textCancel} />}
            {add && <Button
              backgroundColor={Colors.carnation}
              onPress={onPress}
              styleButton={styles.iconPlus}
              titleStyle={styles.textCancel}
              children={<Octicons name="plus" size={20} color={Colors.white} />} />}
          </View>
      </TouchableOpacity>
    );
};
export const CartItemSwipe = ({renderRightActions,onSwipeableLeftOpen, textState, add, width, onPress}) => {
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
            <CartItem
              textState={textState}
              add={add}
              width={width}
              onPressNavigate={onPress} />
          </Swipeable>
  );
};
export default CartItem;
