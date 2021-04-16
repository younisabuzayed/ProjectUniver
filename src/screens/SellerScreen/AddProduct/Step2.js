import React from 'react';
import { View, Text } from 'react-native';
import { Input } from '../../../components';

//Styles and Icons
import styles from './styles';


const NoteComponent = () =>
{
    return (
        <Text
          style={styles.noteText}>مثال 50 ش بدل 80 ش </Text>
    );
};
const Step2 = () => {
    return (
        <View
          style={styles.step2Container}>
            <Input
              title="سعر المنتج "
              keyboardType="phone-pad" />
            <Input
              title="سعر المنتج في السوق"
              keyboardType="phone-pad"
              marginTop={14}
              children={<NoteComponent />} />


        </View>
    );
};

export default Step2;
