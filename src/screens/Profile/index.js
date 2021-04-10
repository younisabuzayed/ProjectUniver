import React from 'react';
import { View, Text } from 'react-native';
import { Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Button } from '../../components';
import styles from './styles';
import Colors from '../../../assets/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Foundation from 'react-native-vector-icons/Foundation';

const Profile = () => {
    const navigation = useNavigation();
    const ContentBox = ({title, number, icon}) =>
    {
      return (
        <View
          style={styles.contentBoxContainer}>
            <View
              style={styles.titleAndIconContainer}>
                <View
                  style={styles.iconContent}>
                    {icon}
                </View>
                <Text
                  style={styles.titleContent}>{title}</Text>
            </View>
            <View
              style={styles.numberContent}>
                <Text
                  style={styles.numberText}>{number}</Text>
            </View>
        </View>
      );
    };
    return (
        <View
          style={styles.profileContainer}>
            <View
              style={styles.headerContainer} >
                <View
                  style={styles.headerTitleAndButtonContainer} >
                    <View
                      style={styles.goBackIconContainer} >
                        <Button
                          onPress={() => navigation.goBack()}
                          styleButton={styles.goBackIcon}
                          children={<MaterialIcons
                                      name="arrow-forward"
                                      size={25}
                                      color={'#FFFFFF'}/>} />
                    </View>
                    <View
                      style={styles.nameScreenContainer}>
                        <Text
                          style={styles.nameScreenText}>الملف الشخصي</Text>
                    </View>
                    <View
                      style={styles.deleteAccountContainer} >
                         <Button
                           title={'ألغاء الحساب'}
                           onPress={() => navigation.goBack()}
                           titleStyle={styles.deleteAccountTitle}
                           styleButton={styles.deleteAccountButton} />
                    </View>
                    <View
                      style={styles.profileImageContainer} >
                        <Avatar.Image
                          source={{
                            uri: 'https://image.flaticon.com/icons/png/512/147/147144.png'
                          }}
                          size={70} />
                    </View>
                </View>
                <View
                  style={styles.contentContainer} >
                    <View
                      style={styles.NameContainer} >
                        <Ionicons
                          name="person"
                          size={25}
                          color={Colors.fernGreen} />
                        <Text
                          style={styles.NameText}>يونس حسام أبو زايد</Text>
                    </View>
                    <View
                      style={styles.phoneNumberContainer} >
                        <FontAwesome
                          name="phone"
                          size={25}
                          color={Colors.fernGreen}
                          style={{transform: [{rotateY: '180deg'}]}} />
                        <Text
                          style={styles.phoneNumberText}>05994669124</Text>
                    </View>
                    <View
                      style={styles.addressContainer} >
                        <MaterialIcons
                          name="location-on"
                          size={25}
                          color={Colors.fernGreen} />
                        <Text
                          style={styles.addressText}>غزة السدرة شارع يافا</Text>
                    </View>
                </View>
            </View>
            <View
              style={styles.bodyContainer}>
                <ContentBox
                  title="اجمالي المدفوعات"
                  number={`${10000}$`}
                  icon={<Foundation name="dollar" size={27} color={Colors.fernGreen} />} />
                <ContentBox
                  title="عدد الطلبيات"
                  number={`${100}`}
                  icon={<FontAwesome5 
                          name="clipboard-list"
                          size={18}
                          color={Colors.texasRose} />} />
                <ContentBox
                  title="عدد المنتجات المفضلة"
                  number={`${300}`}
                  icon={ <MaterialIcons
                            name="favorite"
                            size={20}
                            color={Colors.carnation} />} />
                <ContentBox
                  title="عدد المنتجات المشترية"
                  number={`${500}`}
                  icon={<FontAwesome5
                          name="shopping-cart"
                          size={20}
                          color={'#ABABAB'} />} />
            </View>
        </View>
    );
};

export default Profile;
