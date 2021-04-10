import React from 'react';
import { TouchableOpacity } from 'react-native';

import Icon from './Icon';
import styles from './stylesColor-option';


const ColorOption = (props) => {
  const { icon, color, isSelected, scaleToWindow, onColorChange } = props;
  return (
    <TouchableOpacity
      onPress={() => onColorChange(color)}
      style={[
        styles.colorOption,
        { backgroundColor: color },
        scaleToWindow && styles.scaleToWindow,
      ]}
    >
      {isSelected  && <Icon color={color} icon={icon} />}
    </TouchableOpacity>
  );
};


export default ColorOption;
