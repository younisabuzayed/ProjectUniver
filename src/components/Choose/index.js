/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text } from 'react-native';
import Modal from 'react-native-modal';

const Choose = ({isVisible, children,onBackdropPress, timeOut, modalStyle}) =>
{
  return (
    <Modal
     testID={'modal'}
     isVisible={isVisible}
     onBackdropPress={onBackdropPress}
     animationOutTiming={timeOut}
    //  swipeDirection={['up', 'left', 'right', 'down']}
     animationIn="zoomInDown"
     animationOut="zoomOutUp"
     style={modalStyle} >
         {children}
    </Modal>
  );
};

export default Choose;

