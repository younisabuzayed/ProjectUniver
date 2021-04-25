/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Colors from '../../../../assets/colors';
import { Button } from '../../../components';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import styles from './styles';

const Steps = ({index, backgroundColor}) =>
{
    backgroundColor = backgroundColor ? backgroundColor : Colors.nameShop;
    return (
        <View
          style={[styles.steps, {backgroundColor}]} >
            <Text
              style={styles.stepsTitle}>{index}</Text>
        </View>
    )
}
const AddProduct = () => {
    const [move, setMove] = React.useState(1);
    const onPressNext = () =>
    {
        if (move === 4) {return;}
        setMove(move + 1);
    };
    const onPressPrev = () =>
    {
        if (move === 1) {return;}
        else {
        setMove(move - 1);}
    };
    return (
        <View
          style={styles.addProductContainer} >
            <View
              style={styles.stepsContainer}>
                <Steps
                  index={1}
                  backgroundColor={Colors.fernGreen} />
                <View
                  style={[styles.lineSteps, move >= 2 && {backgroundColor: Colors.fernGreen }]} />
                <Steps
                  index={2}
                  backgroundColor={move >= 2 && Colors.fernGreen} />
                <View
                  style={[styles.lineSteps, move >= 3 && {backgroundColor: Colors.fernGreen }]} />
                <Steps
                  index={3}
                  backgroundColor={move >= 3 && Colors.fernGreen} />
                <View
                   style={[styles.lineSteps, move >= 4 && {backgroundColor: Colors.fernGreen }]} />
                <Steps
                  index={4}
                  backgroundColor={move >= 4 && Colors.fernGreen} />
            </View>
            <View
              style={styles.noteForProductContainer}>
                <Text
                  style={styles.noteForProductText}>الاختيار مواصفات منتجك حسب الصنف الذي تضيفه </Text>
                <View
                  style={styles.circleView} >
                    <FontAwesome5
                      name="exclamation"
                      color="#FFB850"
                      size={15} />
                </View>
            </View>
            {move === 1 && <Step1 />}
            {move === 2 && <Step2 />}
            {move === 3 && <Step3 />}
            {move === 4 && <Step4 />}
        <View
          style={[
              styles.nextAndPrevContainer,
              move === 1 && {justifyContent: 'flex-end'}]}>
            {move !== 1 && <Button
              title="سابق"
              titleStyle={styles.titleNextAndPrev}
              onPress={onPressPrev} />}
            <Button
              title={move === 4
              ? 'إطلاق المنتج'
              : 'التالي'}
              titleStyle={[styles.titleNextAndPrev]}
              styleButton={{alignSelf: 'center'}}
              onPress={onPressNext} />
        </View>
        </View>
    );
};

export default AddProduct;
