/* eslint-disable no-shadow */
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Checkbox, RadioButton } from 'react-native-paper';
import { Button, Choose, Input } from '../../../components';

//Styles and Icons
import styles from './styles';
import Colors from '../../../../assets/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const DataScreen = {
  dataElect:[
    {
      id: 1,
      name: 'الشاشات',
      checked: false,
    },
    {
      id: 2,
      name: 'اسلاك',
      checked: false,
    },
    {
      id: 3,
      name: 'الاضواء',
      checked: false,
    },
  ],
  dataCloth: [
    {
      id: 1,
      name: 'الملابس',
      checked: false,
    },
    {
      id: 2,
      name: 'الاحذية',
      checked: false,
    },
  ],
};
const Step1 = () => {
    const [value, setValue] = React.useState('first');
    // const [dataScreen, setDataScreen] = React.useState(DataScreen);
    const [dataElect, setDataElect] = React.useState(DataScreen.dataElect);
    const [dataCloth, setDataCloth] = React.useState(DataScreen.dataCloth);

    const [isVisible, setIsVisible] = React.useState(false);
    const handleChange = (dataScreen, setDataScreen, id) => {
      let temp = dataScreen.map((data) => {
        if (id === data.id) {
          return { ...data, checked: !data.checked };
        }
        return data;
      });
      setDataScreen(temp);
    };

    const themeCheck = {
      colors:{
        text:Colors.iconTune,
        disabled: styles.iconTune,
      },
    };
    let selected = dataElect.filter((data) => data.checked);
  const titleButtonChecked = selected.map(item=> item.name).toString();
    return (
        <View
          style={styles.step1Container}>
            <Input
              title="اسم المنتج" />
            <Text
               style={styles.titleInput}>نوع الصنف</Text>
            <Button
              active
              title={selected.length === 0 ? 'اختار صنف ونوع الصنف' : titleButtonChecked}
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
                      mode="android"
                      color={Colors.fernGreen}
                      uncheckedColor={Colors.iconTune}
                      style={styles.radioButton}
                      labelStyle={styles.labelRadio} />
                        <View
                          style={styles.checkeContainer}
                          pointerEvents={value === 'first' ? 'auto' : 'none'}>
                            <FlatList
                              data={dataElect}
                              keyExtractor={(item) => item.id}
                              numColumns={2}
                              renderItem={({item}) =>
                              {
                                return (
                                  <Checkbox.Item
                                    status={item.checked ? 'checked' : 'unchecked'}
                                    mode={'android'}
                                    uncheckedColor={Colors.iconTune}
                                    color={Colors.fernGreen}
                                    label={item.name}
                                    labelStyle={styles.labelRadio}
                                    style={[styles.checkeButton]}
                                    onPress={() => handleChange(dataElect,setDataElect,item.id)}
                                    theme={{
                                        colors:{text:Colors.iconTune, disabled: styles.iconTune}}} />
                                      );
                                    }} />
                        </View>
                      <RadioButton.Item
                      label="الملابس والاحذية"
                      value="second"
                      mode="android"
                      color={Colors.fernGreen}
                      style={styles.radioButton}
                      uncheckedColor={Colors.iconTune}
                      labelStyle={styles.labelRadio} />
                         <View
                          style={styles.checkeContainer}
                          pointerEvents={value === 'second' ? 'auto' : 'none'}>
                            <FlatList
                              data={dataCloth}
                              keyExtractor={(item) => item.id}
                              numColumns={2}
                              renderItem={({item}) =>
                              {
                                return (
                                  <Checkbox.Item
                                    status={item.checked ? 'checked' : 'unchecked'}
                                    mode="android"
                                    color={Colors.fernGreen}
                                    label={item.name}
                                    labelStyle={styles.labelRadio}
                                    style={[styles.checkeButton]}
                                    onPress={() => handleChange(dataCloth,setDataCloth,item.id)}
                                    theme={{
                                        colors:{text:Colors.iconTune, disabled: styles.iconTune}}} />
                                      );
                                    }} />
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
 /* <Checkbox.Item
    status={checked1 ? 'checked' : 'unchecked'}
    color={Colors.fernGreen}
    label="الشاشات"
    labelStyle={styles.labelRadio}
    style={[styles.checkeButton]}
    onPress={() => {
        setChecked1(!checked1);
        setItemData([...itemData, 'الشاشات']);
    }}
    theme={{
        colors:{text:Colors.iconTune, disabled: styles.iconTune}}} />
  <Checkbox.Item
    status={checked2 ? 'checked' : 'unchecked'}
    color={Colors.fernGreen}
    label="اسلاك"
    labelStyle={styles.labelRadio}
    style={[styles.checkeButton]}
    onPress={() => {
        setChecked2(!checked2);
        if (itemData.includes('اسلاك')) return;
        setItemData([...itemData, 'اسلاك']);
          console.log(itemData,'checked')
        if (itemData.includes('اسلاك') === true)
        {
          const index = itemData.indexOf('اسلاك')
          if (index > -1)
          {
            const newItemData = itemData.splice(index, 1);
            setItemData([newItemData]);
          }}
    }}
    theme={{
        colors:{text:Colors.iconTune},
        roundness: 50}} /> */
/* <View
  style={styles.checkeContainer}
  pointerEvents={value === 'first' ? 'auto' : 'none'}>
    <Checkbox.Item
      status={checked.checked3 ? 'checked' : 'unchecked'}
      color={Colors.fernGreen}
      label="الاضواء"
      labelStyle={styles.labelRadio}
      style={styles.checkeButton}
      onPress={() => {
          setChecked({checked3 : !checked.checked3});
          setItemData([...itemData, 'الاضواء']);
      }}
      theme={themeCheck} />
</View> */


{/* <View
style={styles.checkeContainer}>
  <Checkbox.Item
    status={checked.checked4 ? 'checked' : 'unchecked'}
    color={Colors.fernGreen}
    label="الملابس"
    labelStyle={styles.labelRadio}
    style={styles.checkeButton}
    onPress={() => {
        setChecked({checked4 : !checked.checked4});
    }}
    theme={themeCheck} />
  <Checkbox.Item
    status={checked.checked5 ? 'checked' : 'unchecked'}
    color={Colors.fernGreen}
    label="الاحذية"
    labelStyle={styles.labelRadio}
    style={[styles.checkeButton]}
    onPress={() => {
        setChecked({checked5: !checked.checked5});
    }}
    theme={{
        colors:{text:Colors.iconTune},
        roundness: 50}} />
</View> */}
