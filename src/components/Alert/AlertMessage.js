/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Button } from '..';
import Colors from '../../../assets/colors';
import Fonts from '../../../assets/fonts';
import styles from './styles';

const AlertMessage = ({title, description, descriptionStyle, icon,
                 colorIcon, messageTitle, titleStyle }) => {
    return (
        <View style={styles.alertView}>
           <View
             style={styles.alertViewInner} >
               <View
                 style={styles.alertContainer}>
                   <Text
                     style={[styles.title, titleStyle]}>{title}</Text>
                   <Text
                     style={[styles.description, descriptionStyle]}>{description}</Text>
                   <View
                     style={styles.messageTitleContainer}>
                       <Text
                         style={styles.messageTitle}>{messageTitle}</Text>
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

export default AlertMessage;
