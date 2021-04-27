/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Image, Animated } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const IconAnimated = Animated.createAnimatedComponent(MaterialCommunityIcons);
import Colors from '../../../assets/colors';
import { Button } from '..';
import styles from './styles';


const SwipeButton = ({renderLeftActions,renderRightActions, title,
                      onSwipeableLeftOpen, price, counter,
                      onPressMinus, onPressPlus, onPressDelete, image}) => {
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
              onPress={onPressDelete}
              >
                <IconAnimated
                  style={{transform:[{scale}]}}
                  name="delete"
                  size={60}
                  color={Colors.Monza} />
            </TouchableOpacity>
          </View>
        );
    };
    return (
        <Swipeable
          renderLeftActions={LeftAction}
          renderRightActions={renderRightActions}
          onSwipeableLeftOpen={onSwipeableLeftOpen}
          containerStyle={{marginBottom: 20}}>
            <View
              style={styles.swipeContainer} >
               <View
                 style={[styles.imageProducts,{height: '100%', justifyContent:'center',marginLeft: 5}]} >
                   <Image
                     style={styles.imageProducts}
                     source={image}
                     resizeMode="stretch" />
                </View>
                <View
                  style={styles.swipeContent}>
                    <Text
                       style={styles.title}>{title}</Text>
                    <Text
                      style={styles.description}
                      numberOfLines={1}
                      ellipsizeMode="tail" >{`${price} شيكل`}</Text>
                </View>
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
                      <Feather name="minus" size={20} color={Colors.white}/>
                  </TouchableOpacity>
                </View>
            </View>
        </Swipeable>
    );
};
export const SwipeButtonBuyer = ({renderLeftActions,renderRightActions, onPressMain, title,onSwipeableLeftOpen, delivered}) => {
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
        );
    };
    return (
        <Swipeable
          renderLeftActions={LeftAction}
          renderRightActions={renderRightActions}
          onSwipeableLeftOpen={onSwipeableLeftOpen}
          containerStyle={{marginBottom: 20}}>
            <View
              style={styles.swipeContainer} >
               <View
                 style={[styles.imageProducts,{height: '100%', justifyContent:'center',marginLeft: 5}]} >
                   <Image
                     style={styles.imageProducts}
                     source={require('../../../assets/images/ZpHgR4U.png')}
                     resizeMode="stretch" />
                </View>
                <View
                  style={styles.swipeContent}>
                    <Text
                       style={styles.title}>لابتوب ماك</Text>
                    <View
                      style={styles.addressContainer}>
                        <View style={styles.circleGreen}/>
                        <Text
                          style={styles.addressText}
                          numberOfLines={1}
                          ellipsizeMode="tail" >غزة- السدرة -شارع يافا</Text>
                    </View>
                </View>
                <View
                  style={styles.counterButtonAndNumber} >
                   {delivered === true
                    ? <Text
                        style={styles.deliveredTitle}>تم التوصيل</Text>
                    : <Button
                        active
                        title="توصيل ديلفري"
                        styleButton={styles.deliveredButton}
                        titleStyle={styles.deliveredButtonTitle}
                        backgroundColor={Colors.fernGreen} />}
                </View>
            </View>
        </Swipeable>
    );
};


export default SwipeButton;
