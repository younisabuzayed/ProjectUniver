import React from 'react';
import { ScrollView, KeyboardAvoidingView } from 'react-native';

const KeyboardAvoiding = ({children,style}) => {
    return (
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false} >
            <KeyboardAvoidingView enabled
              style={style}>
              {children}
            </KeyboardAvoidingView>
        </ScrollView>
    );
};

export default KeyboardAvoiding;
