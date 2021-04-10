import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Button = ({onPress, styleButton, children,title, active,marginBottom, backgroundColor, titleStyle}) => {
    const buttonNonActive = active === true ? styles.button : styles.buttonNonActive;
    return (
        <TouchableOpacity
          onPress={onPress}
          style={[buttonNonActive,{marginBottom,backgroundColor},styleButton]} >
            {children}
            {title && <Text
              style={[styles.titleButton, titleStyle]}>{title}</Text>}
        </TouchableOpacity>
    );
};

export default Button;
