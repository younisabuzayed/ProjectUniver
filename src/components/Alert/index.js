import React, {useState} from 'react';
import { Text, View} from 'react-native';
import Modal from 'react-native-modal';
import Button from '../Button';
import styles from './style';

const Alert = ({onPress,isVisible,title, cardStyle})  => {

    return (
      <View style={{flex: 1}}>
        {/* <Button title="Show modal" onPress={onPress} /> */}

        <Modal isVisible={isVisible}>
          <View style={styles.alertView}>
           <View
             style={[styles.alertViewInner, cardStyle]} >
                <Text
                style={styles.title}>{title}</Text>
                <Button
                  title="حسنا"
                  onPress={onPress}
                  styleTitle={styles.titleButton} />
           </View>
          </View>
        </Modal>
      </View>
    );
};

export default Alert;
