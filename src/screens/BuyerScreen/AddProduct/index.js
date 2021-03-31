import React from 'react';
import { View, Text } from 'react-native';
import Step3 from './Step3';
import styles from './styles';

const AddProduct = () => {
    return (
        <View
          style={styles.addProductContainer} >
            <Step3 />
        </View>
    );
};

export default AddProduct;
