import React from 'react';
import { Text, View} from 'react-native';
import Modal from 'react-native-modal';
import Button from '../Button';
import styles from './styles';

const Alert = ({ isVisible, onBackdropPress, children })  => {

    return (
      <View style={{flex: 1}}>
        {/* <Button title="Show modal" onPress={onPress} /> */}
        <Modal
          isVisible={isVisible}
          onBackdropPress={onBackdropPress}>
            {children}
        </Modal>
      </View>
    );
};

export default Alert;
