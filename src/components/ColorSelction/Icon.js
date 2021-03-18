import React from 'react'
import { Text } from 'react-native';
import styles from './stylesIcon';

const getContrastColor = hex => parseInt(hex.substring(1), 16) > 0xffffff / 2 ? '#000000' : hex === 'white' ? '#000' : '#FFFFFF';

const Icon = (props) => {
  const { icon, color } = props;
  if (icon) return icon;
  return <Text style={[{ color: getContrastColor(color)}, styles.icon]} adjustsFontSizeToFit>✔︎</Text>;
}


export default Icon;
