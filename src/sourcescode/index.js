/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Animated, TouchableOpacity } from 'react-native';
import SwipeButton from '../../components/SwipeButton';
const Home = () => {
    const LeftAction = (progress, dragX) =>
    {
        const scale = dragX.interpolate({
            inputRange: [0, 100],
            outputRange: [0, 1],
            extrapolate: 'clamp',
        })
        return (
            <TouchableOpacity
              onPress={() => alert('test')} >
                <Animated.Text
                  style={{transform:[{scale}]}}>Add to Cart</Animated.Text>
            </TouchableOpacity>
        )
    }
    return (
        <View>
            <Text>Home</Text>
            <SwipeButton
             renderLeftActions={LeftAction}
             title="Swipe" />
        </View>
    );
};

export default Home;
