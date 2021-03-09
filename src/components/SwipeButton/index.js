/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Image, StyleSheet, Animated } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const IconAnimated = Animated.createAnimatedComponent(MaterialCommunityIcons);
import Colors from '../../../assets/colors';


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
                  size={70}
                  color={Colors.Monza} />
            </TouchableOpacity>
          </View>
        )
    }
    return (
        <Swipeable
          renderLeftActions={LeftAction}
          renderRightActions={renderRightActions}
          onSwipeableLeftOpen={onSwipeableLeftOpen}>
            <View
              style={styles.swipeContainer} >
               <View
                 style={[styles.imageProducts,{justifyContent:'center'}]} >
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
                      ellipsizeMode="tail" >يحتوي الجهاز على العديد من المييزات الرائع</Text>
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
                      <FontAwesome name="minus" size={20} color={Colors.white}/>
                  </TouchableOpacity>
                </View>
            </View>
        </Swipeable>
    );
};

const styles = StyleSheet.create({
  swipeContainer:
  {
    height: 100,
    flexDirection:'row',
    marginLeft: 15,
    marginRight: 15,
    justifyContent: 'space-between',
    borderRadius: 8,
    backgroundColor:'rgba(236,236,236, 0.8)',
  },
  imageProducts:
  {
      height: '100%',
      borderRadius: 4,
      width: 120,
      flex: 2,
      paddingRight: 25,
  },
  swipeContent:
  {
    width: 100,
    justifyContent:'center',
    flex: 3,
  },
  title:
  {
    fontSize: 12,

  },
  description:
  {
    fontSize: 9,
    paddingLeft: 5,
    width: 150,
  },
  counterButtonAndNumber:
  {
      alignItems:'center',
      justifyContent:'space-around',
      height:'100%',
      paddingTop: 8,
      paddingBottom: 8,
      flex: 1,
  },
  iconCounter:
  {
      height: 24,
      width: 24,
      backgroundColor: Colors.texasRose,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
  },
  counterNumber:
  {
    fontSize: 12,
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
