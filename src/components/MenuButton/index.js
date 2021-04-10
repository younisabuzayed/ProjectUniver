import React from 'react';
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import styles from './styles';

const MenuButton = ({onPress}) => {
    return (
        <View >
        <TouchableWithoutFeedback
          onPress={onPress} >
            <Image
            source={require('../../../assets/images/menu.png')}
              style={styles.image} />
        </TouchableWithoutFeedback>
      </View>
    );
};

export default MenuButton;
