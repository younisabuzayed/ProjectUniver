import React from 'react';
import { View, Text } from 'react-native';
import { Checkbox, RadioButton } from 'react-native-paper';
import { Button, Choose, Input } from '../../../components';

//Styles and Icons
import styles from './styles';
import Colors from '../../../../assets/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const Step1 = () => {
    const [value, setValue] = React.useState('first');
    const [isVisible, setIsVisible] = React.useState(false);
    const [checked, setChecked] = React.useState(false);
    const themeCheck = {
      colors:{
        text:Colors.iconTune,
        disabled: styles.iconTune,
        primary: styles.iconTune,
        background: styles.iconTune,
        surface: styles.iconTune,
        accent: styles.iconTune,
        error: styles.iconTune,
        onSurface: styles.iconTune,
        onBackground: styles.iconTune,
        placeholder: styles.iconTune,
        backdrop: styles.iconTune,
        notification: styles.iconTune,
      },
    };
    return (
        <View
          style={styles.step1Container}>
            <Input
              title="اسم المنتج" />
            <Text
               style={styles.titleInput}>نوع الصنف</Text>
            <Button
              active
              title="اختار صنف ونوع الصنف"
              backgroundColor={Colors.mercury}
              styleButton={styles.KindCategoryButton}
              titleStyle={styles.KindCategoryButtonTitle}
              children={<MaterialIcons
                          name="tune"
                          size={16}
                          color={Colors.iconTune} />}
              onPress={() => setIsVisible(!isVisible)} />
            <Choose
              isVisible={isVisible}
              onBackdropPress={() => setIsVisible(!isVisible)} >
                <View
                  style={styles.KindCategoryModal} >
                    <Text
                      style={styles.title} >اختار الصنف و النوع</Text>
                    <RadioButton.Group
                      onValueChange={value => setValue(value)}
                      value={value} >
                    <RadioButton.Item
                      label="الأجهزة الكهربائية"
                      value="first"
                      color={Colors.fernGreen}
                      uncheckedColor={Colors.iconTune}
                      style={styles.radioButton}
                      labelStyle={styles.labelRadio} />
                        <View
                          style={styles.checkeContainer}
                          pointerEvents={value === 'first' ? 'auto' : 'none'}>
                            <Checkbox.Item
                              status={checked ? 'checked' : 'unchecked'}
                              color={Colors.fernGreen}
                              label="الشاشات"
                              labelStyle={styles.labelRadio}
                              style={[styles.checkeButton]}
                              onPress={() => {
                                  setChecked(!checked);
                              }}
                              theme={{
                                  colors:{text:Colors.iconTune, disabled: styles.iconTune}}} />
                            <Checkbox.Item
                              status={checked ? 'checked' : 'unchecked'}
                              color={Colors.fernGreen}
                              label="اسلاك"
                              labelStyle={styles.labelRadio}
                              style={[styles.checkeButton]}
                              onPress={() => {
                                  setChecked(!checked);
                              }}
                              theme={{
                                  colors:{text:Colors.iconTune},
                                  roundness: 50}} />
                        </View>
                        <View
                          style={styles.checkeContainer}
                          pointerEvents={value === 'first' ? 'auto' : 'none'}>
                            <Checkbox.Item
                              status={checked ? 'checked' : 'unchecked'}
                              color={Colors.fernGreen}
                              label="الاضواء"
                              labelStyle={styles.labelRadio}
                              style={styles.checkeButton}
                              onPress={() => {
                                  setChecked(!checked);
                              }}
                              theme={themeCheck} />
                        </View>
                      <RadioButton.Item
                      label="الملابس والاحذية"
                      value="second"
                      color={Colors.fernGreen}
                      style={styles.radioButton}
                      uncheckedColor={Colors.iconTune}
                      labelStyle={styles.labelRadio} />
                        <View
                            style={styles.checkeContainer}>
                              <Checkbox.Item
                                status={checked ? 'checked' : 'unchecked'}
                                color={Colors.fernGreen}
                                label="الملابس"
                                labelStyle={styles.labelRadio}
                                style={styles.checkeButton}
                                onPress={() => {
                                    setChecked(!checked);
                                }}
                                theme={themeCheck} />
                              <Checkbox.Item
                                status={checked ? 'checked' : 'unchecked'}
                                color={Colors.fernGreen}
                                label="الاحذية"
                                labelStyle={styles.labelRadio}
                                style={[styles.checkeButton]}
                                onPress={() => {
                                    setChecked(!checked);
                                }}
                                theme={{
                                    colors:{text:Colors.iconTune},
                                    roundness: 50}} />
                          </View>
                    </RadioButton.Group>
                </View>
            </Choose>
            <Input
              title="الوصف"
              multiline={true}
              inputStyle={styles.inputDescription}
              textAlignVertical="top" />
        </View>
    );
};

export default Step1;
