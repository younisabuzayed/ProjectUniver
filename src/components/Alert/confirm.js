/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Button } from '..';
import Colors from '../../../assets/colors';
import Fonts from '../../../assets/fonts';
import styles from './styles';

const Confirm = ({title, description, icon,
                 colorIcon, buttonTitleOne, buttonTitleTwo,
                 onPressOne, onPressTwo}) => {
    return (
        <View style={styles.alertView}>
           <View
             style={styles.alertViewInner} >
               <View
                 style={styles.alertContainer}>
                   <Text
                     style={styles.title}>{title}</Text>
                   <Text
                     style={styles.description}>{description}</Text>
                   <View
                     style={styles.buttonContainer}>
                       <Button
                         title={buttonTitleOne}
                         onPress={onPressOne}
                         styleTitle={styles.titleButton}
                         styleButton={[
                           styles.button,
                           {
                             borderRightWidth: 0.4,
                           }]}
                         titleStyle={[
                           styles.buttonTitle,
                           {
                              fontFamily: Fonts.Cairo_Bold,
                              color: Colors.titleProduct,
                           }]} />
                       <Button
                         title={buttonTitleTwo}
                         onPress={onPressTwo}
                         styleTitle={styles.titleButton}
                         styleButton={[
                           styles.button,
                           {
                             borderRightWidth: 0.4,
                           }]}
                         titleStyle={[
                           styles.buttonTitle,
                           {
                             fontFamily: Fonts.Cairo_Regular,
                             color: Colors.itemNameStore,
                           }]} />
                   </View>
               </View>
              {icon && <View
                     style={styles.iconContainer}>
                       <MaterialIcons
                         name={icon}
                         size={24}
                         color={colorIcon} />
                   </View>}
           </View>
          </View>
    );
};

export default Confirm;
