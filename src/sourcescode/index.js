/* eslint-disable no-lone-blocks */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Animated, TouchableOpacity } from 'react-native';
import SwipeButton from '../../components/SwipeButton';
import { Button, Input } from '../components';
//Styles and Icons
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../assets/colors';

const Home = () => {
    const LeftAction = (progress, dragX) =>
    {
        const scale = dragX.interpolate({
            inputRange: [0, 100],
            outputRange: [0, 1],
            extrapolate: 'clamp',
        })
        return (
            <TouchableOpacity
              onPress={() => alert('test')} >
                <Animated.Text
                  style={{transform:[{scale}]}}>Add to Cart</Animated.Text>
            </TouchableOpacity>
        )
    }
    return (
        <View>
            <Text>Home</Text>
            <SwipeButton
             renderLeftActions={LeftAction}
             title="Swipe" />
        </View>
    );
};
const Measurements = () =>
{
    const [measurements, setMeasurements] = React.useState([]);
    const [sizeNumber, setSizeNumber] = React.useState(null);
    const deleteRef = React.useRef();

    const onPressDelete = (itemRemove) =>
    {
      const newList = measurements.filter((item) => item !== itemRemove);

      setMeasurements(newList);
    };
    return (
        <View
              style={styles.sizesContainer}>
                <Input
                  placeholder="50"
                  title="المقاسات"
                  styleContainer={styles.sizeContainer}
                  inputStyle={styles.inputSizes}
                  styleRow={styles.sizesInnerContainer}
                  styleTitle={styles.titleSize}
                  onChangeText={ number => setSizeNumber(number)}
                  children={
                    <Button
                      title="اضافة"
                      active
                      backgroundColor={Colors.fernGreen}
                      styleButton={styles.sizeButton}
                      titleStyle={styles.sizeButtonTitle}
                      onPress={() =>{
                        if (measurements.includes(sizeNumber)) {return;}
                        setMeasurements([...measurements,sizeNumber]);
                      }} />
                  } />
                  <View
                      style={styles.sizesProductContainer} >
                        {measurements.length !== 0
                       ? measurements.map((item, index) =>
                        {
                            return (
                                <TouchableOpacity
                                  key={index}
                                  style={styles.sizeProduct}
                                  onPress={() => onPressDelete(item)}>
                                    <View
                                      style={styles.closeButton}
                                       >
                                        <Icon
                                          name="close"
                                          size={10}
                                          color={Colors.silver} />
                                    </View>
                                    <Text
                                      style={styles.itemSizeProductText}
                                      ref={deleteRef}>{item.toString()}</Text>
                                </TouchableOpacity>
                            );
                        })
                       : <Text
                           style={styles.titleNoSize} >لا يوجد مقاسات</Text>}
                      </View>
            </View>
    )
};
  {/* {items.map((item, index) =>
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
          })} */}
export default Home;
