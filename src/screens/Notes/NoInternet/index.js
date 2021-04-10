import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Button } from '../../../components';
import Colors from '../../../../assets/colors';

const NoInternet = ({navigation}) => {
    const IconReload = () =>
    {
      return (
        <Ionicons name="reload" size={18} color={Colors.white} />
      )
    }
    return (
        <View
          style={styles.noInternetContainer} >
            <View
              style={styles.headerContainer}>
              <TouchableOpacity
                onPress={() => navigation.goBack()} >
                    <MaterialIcons name="arrow-forward" size={25} color={'#AFAFAF'} style={{}} />
                </TouchableOpacity>
            </View>
            <View
              style={styles.noInternetContainer}>
            <Image
              source={require('../../../../assets/images/noInternet.png')}
              style={styles.image} />
            <View
              style={styles.textContainer}>
                <Text
                  style={styles.text}>نعتذر لا يوجد انترنت</Text>
            </View>
            <View
              style={styles.buttonContainer}>
              <Button
                active
                backgroundColor={Colors.fernGreen}
                title="إعادة تشغيل"
                styleButton={styles.button}
                titleStyle={styles.titleButton}
                children={<IconReload/>} />
            </View>
            </View>
        </View>
    );
};

export default NoInternet;
