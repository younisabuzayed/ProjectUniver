/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { View, Text } from 'react-native';
import { Button } from '..';
import Colors from '../../../assets/colors';
import styles from './styles';

const Selection = ({items, onChange, style, styleButton}) => {
    const [measurements, setMeasurements] = React.useState(null);
    const onMeasurementsChange = React.useCallback((num) => {
        setMeasurements(num);
        onChange(num);
      }, [onChange]);
    return (
        <View
          style={[styles.selectionContainer, style]}>
            {items.map((item, index) =>
            {
                return <Button
                        key={item}
                        active
                        styleButton={[styles.buttonMeasurements,styleButton]}
                        backgroundColor={measurements === item  ? Colors.fernGreen : Colors.seashellSolid}
                        onPress={() => onMeasurementsChange(item)}
                        title={item}
                        titleStyle={[styles.title,{color: measurements === item ? Colors.white : Colors.balck}]} />;
            })}
        </View>
    );
};
export const SelectionMulti = ({items, onChange, style, styleButton}) => {
  const [measurements, setMeasurements] = React.useState([]);
  // const onMeasurementsChange = React.useCallback((num) => {
  //     setMeasurements(num);
  //     onChange(num);
  //   }, [onChange]);
    const onPressSelectionMulti = React.useCallback((item, index, isSelected) =>
    {
      if (isSelected)
      {
        setMeasurements((prev) => prev.filter((i) => i !== item));
        onChange(item)
      } else {
        setMeasurements(prev => [...prev, item]);
        onChange(item)
      }
    },[onChange])
  return (
      <View
        style={[styles.selectionContainer, style]}>
          {items.map((item, index) =>
          {
              const isSelected = measurements.filter((i) => i === item).length > 0;
              return <Button
                      key={item}
                      active
                      styleButton={[styles.buttonMeasurements,styleButton]}
                      backgroundColor={isSelected === false ? Colors.seashellSolid : Colors.fernGreen}
                      onPress={() => onPressSelectionMulti(item, index, isSelected)}
                      title={item}
                      titleStyle={[styles.title,{color: isSelected === true ? Colors.white : Colors.balck}]} />;
          })}
      </View>
  );
};

export default Selection;
