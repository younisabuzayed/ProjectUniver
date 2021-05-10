/* eslint-disable radix */
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Input } from '../../../components';

//Styles and Icons
import styles from './styles';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import Colors from '../../../../assets/colors';

const NoteComponent = () =>
{
    return (
        <Text
          style={styles.noteText}>مثال 50 ش بدل 80 ش </Text>
    );
};
const Step2 = () => {
  const [counterProducts, setCounterProducts] = React.useState('0');
  const [counterProductsDiscount, setCounterProductsDiscount] = React.useState('0');

  const onPressPlus = () => {
    const pulsNum = parseFloat(counterProducts) + 1;
    setCounterProducts(pulsNum.toString());
  };
  const onPressMiuns = () => {
    const miunNum = parseFloat(counterProducts) - 1;
    setCounterProducts(miunNum.toString());
  };
  const onPressPlusDiscount = () => {
    const pulsNum = parseFloat(counterProductsDiscount) + 1;
    setCounterProductsDiscount(pulsNum.toString());
  };
  const onPressMiunsDiscount = () => {
    const miunNum = parseFloat(counterProductsDiscount) - 1;
    setCounterProductsDiscount(miunNum.toString());
  };
  console.log(counterProducts);
    return (
        <View
          style={styles.step2Container}>
            <Input
              title="سعر المنتج "
              keyboardType="phone-pad"
              styleRow={styles.inputRow}
              inputStyle={styles.input}
              value={counterProducts}
              onChangeText={setCounterProducts}
              textAlign= "center"
              children={<TouchableOpacity
                    style={styles.iconCounter}
                    onPress={onPressPlus} >
                      <Octicons name="plus" size={20} color={Colors.white}/>
                  </TouchableOpacity>}
              children1={<TouchableOpacity
                    style={styles.iconCounter}
                    onPress={onPressMiuns} >
                      <Feather name="minus" size={20} color={Colors.white}/>
                  </TouchableOpacity>} />
            <Input
              title="سعر المنتج في السوق"
              keyboardType="phone-pad"
              styleRow={styles.inputRow}
              inputStyle={styles.input}
              value={counterProductsDiscount}
              textAlign= "center"
              marginTop={14}
              optionTitle={<NoteComponent />}
              children={<TouchableOpacity
                    style={styles.iconCounter}
                    onPress={onPressPlusDiscount} >
                      <Octicons name="plus" size={20} color={Colors.white}/>
                  </TouchableOpacity>}
              children1={<TouchableOpacity
                    style={styles.iconCounter}
                    onPress={onPressMiunsDiscount} >
                      <Feather name="minus" size={20} color={Colors.white}/>
                  </TouchableOpacity>} />


        </View>
    );
};

export default Step2;
