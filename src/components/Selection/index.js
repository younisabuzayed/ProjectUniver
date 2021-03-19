import React from 'react'
import { View, Text } from 'react-native';
import { Button } from '..';
import Colors from '../../../assets/colors';
import styles from './styles';

const Selection = ({items, onChange}) => {
    const [measurements, setMeasurements] = React.useState(null);
    const onMeasurementsChange = React.useCallback((num) => {
        setMeasurements(num);
        onChange(num);
      }, [onChange]);
    return (
        <View
          style={styles.selectionContainer}>
            {items.map((item, index) =>
            {
                return <Button
                        key={item}
                        active
                        styleButton={styles.buttonMeasurements}
                        backgroundColor={measurements === item  ? Colors.fernGreen : Colors.seashellSolid}
                        onPress={() => onMeasurementsChange(item)}
                        title={item}
                        titleStyle={[styles.title,{color: measurements === item ? Colors.white : Colors.balck}]} />;
            })}
        </View>
    );
};

export default Selection;
