/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Image, StyleSheet, Animated } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const IconAnimated = Animated.createAnimatedComponent(MaterialCommunityIcons);
import Colors from '../../../assets/colors';
import Fonts from '../../../assets/fonts';


const SwipeButton = ({renderLeftActions,renderRightActions, onPressMain, title,onSwipeableLeftOpen}) => {
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
                    <Text
                      style={styles.description}
                      numberOfLines={1}
                      ellipsizeMode="tail" >{`${44} شيكل`}</Text>
                </View>
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
                      <Feather name="minus" size={20} color={Colors.white}/>
                  </TouchableOpacity>
                </View>
            </View>
        </Swipeable>
    );
};

const styles = StyleSheet.create({
  swipeContainer:
  {
    height: 75,
    flexDirection:'row',
    marginLeft: 15,
    marginRight: 15,
    justifyContent: 'space-between',
    borderRadius: 8,
    backgroundColor:Colors.white,
  },
  imageProducts:
  {
      height: 68,
      width: 70,
      borderRadius: 4,
      paddingRight: 25,
  },
  swipeContent:
  {
    width: 100,
    justifyContent:'center',
    flex: 3,
    marginLeft: 6,
  },
  title:
  {
    fontSize: 12,
    fontFamily: Fonts.Cairo_Bold,

  },
  description:
  {
    fontSize: 12,
    fontFamily: Fonts.Cairo_Bold,
    paddingLeft: 5,
    width: 150,
  },
  counterButtonAndNumber:
  {
      alignItems:'center',
      justifyContent:'space-around',
      flexDirection: 'row',
      height:'100%',
      width: 100,
      paddingTop: 8,
      paddingBottom: 8,
  },
  iconCounter:
  {
      height: 24,
      width: 24,
      backgroundColor: Colors.silver,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
  },
  counterNumber:
  {
    fontSize: 12,
    fontFamily: Fonts.Cairo_Bold,
  },
  priceView:
  {
      backgroundColor: Colors.altoApprox,
      borderRadius: 15,
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 5,
      paddingBottom: 5,
      marginTop: 18,
  },
})
export default SwipeButton;
