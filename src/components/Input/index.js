import React, { forwardRef } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles';

const Input = ({placeholder, title, children,children1, inputStyle,
                onChangeText, onSubmitEditing, returnKeyType, styleTitle,
                styleRow, styleContainer, secureTextEntry, marginTop,
                multiline, numberOfLines, textAlignVertical,autoCompleteType,
                dataDetectorTypes, keyboardType, autoCapitalize, optionTitle,
                textAlign, value},ref) => {
    return (
        <View
          style={[styles.inputContainer,styleContainer,{marginTop}]}>
           <Text style={[styles.title,styleTitle]}>{title}</Text>
           {optionTitle}
           <View style={styleRow}>
            {children}
            <TextInput
              placeholder={placeholder}
              style={[styles.input, inputStyle]}
              value={value}
              onChangeText={onChangeText}
              onSubmitEditing={onSubmitEditing}
              returnKeyType={returnKeyType}
              secureTextEntry={secureTextEntry}
              ref={ref}
              selectionColor={'black'}
              textAlign={textAlign ? textAlign : 'right'}
              multiline={multiline}
              numberOfLines={numberOfLines}
              textAlignVertical={textAlignVertical}
              autoCompleteType={autoCompleteType}
              dataDetectorTypes={dataDetectorTypes}
              keyboardType={keyboardType}
              autoCapitalize={autoCapitalize}  />
            {children1}
            </View>
        </View>
    );
};

export default forwardRef(Input);
