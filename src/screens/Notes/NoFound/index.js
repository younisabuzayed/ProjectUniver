import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const NoFound = ({navigation}) => {
    // const navigation = useNavigation();
    return (
        <View
          style={styles.noProductsContainer} >
            <View
              style={styles.headerContainer}>
              <TouchableOpacity
                onPress={() => navigation.goBack()} >
                    <MaterialIcons name="arrow-forward" size={25} color={'#AFAFAF'} style={{}} />
                </TouchableOpacity>
            </View>
            <View
              style={styles.noProductsContainer}>
            <Image
              source={require('../../../../assets/images/noFound.png')}
              style={styles.image}
              resizeMode="contain" />
            <View
              style={styles.textContainer}>
                <Text
                  style={styles.text}>نعتذر منك صديقنا</Text>
                <Text
                  style={styles.text}>لكن الصفحة مفقودة للأسف</Text>
            </View>
            </View>
        </View>
    );
};

export default NoFound;
