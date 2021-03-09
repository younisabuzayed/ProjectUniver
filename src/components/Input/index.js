import React, { forwardRef } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles';

const Input = ({placeholder, title, children, inputStyle,
                onChangeText, onSubmitEditing, returnKeyType, styleTitle,
                styleRow, styleContainer, secureTextEntry, marginTop},ref) => {
    return (
        <View
          style={[styles.inputContainer,styleContainer,{marginTop}]}>
           <Text style={[styles.title,styleTitle]}>{title}</Text>
           <View style={styleRow}>
            {children}
            <TextInput
              placeholder={placeholder}
              style={[styles.input, inputStyle]}
              onChangeText={onChangeText}
              onSubmitEditing={onSubmitEditing}
              returnKeyType={returnKeyType}
              secureTextEntry={secureTextEntry}
              ref={ref}
              selectionColor={'#6200EE'}
              textAlign={'right'}
              />
            </View>
        </View>
    );
};

export default forwardRef(Input);
