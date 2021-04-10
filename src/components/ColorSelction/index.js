/* eslint-disable no-shadow */
import React, { useState, useEffect, Fragment, useCallback } from 'react';
import { View, Text } from 'react-native';

import ColorOption from './color-option';
import styles from './stylesColorSelction';

const ColorSelction = ({
    colors,
    defaultColor,
    icon,
    onChange,
    paletteStyles,
    scaleToWindow,
    title,
    titleStyles,
    value,
  }) => {

  const [color, setColor] = useState(value || defaultColor);

  useEffect(() => {
    value && setColor(value);
  }, [value]);

  const onColorChange = useCallback((color) => {
    setColor(color);
    onChange(color);
  }, [onChange]);

  return (
    <Fragment>
      <Text style={[styles.titleStyles, { ...titleStyles }]}>{title}</Text>
      <View style={[styles.colorContainer, { ...paletteStyles }]}>
        {colors.map((c) => (
          <ColorOption
            key={c}
            color={c}
            icon={icon}
            onColorChange={onColorChange}
            scaleToWindow={scaleToWindow}
            isSelected={value ? value === c : color === c}
          />
        ))}
      </View>
    </Fragment>
  );
}



export default ColorSelction;