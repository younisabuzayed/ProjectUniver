/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-shadow */
import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import tinycolor from 'tinycolor2';
import { TriangleColorPicker } from 'react-native-color-picker';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import { Button, Choose } from '../../../components';
//Styles and Icons
import Colors from '../../../../assets/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Fonts from '../../../../assets/fonts';
import Selection, { SelectionMulti } from '../../../components/Selection';
const items = [
    // this is the parent or 'item'
    {
      name: 'الأجهزة الكهربائية',
      id: 0,
      // these are the children or 'sub items'
      children: [
        {
            id: 1,
            name: 'الشاشات',
          },
          {
            id: 2,
            name: 'اسلاك',
          },
          {
            id: 3,
            name: 'الاضواء',
          },
      ],
    },
    {
        name: 'الملابس والاحذية',
        id: 1,
        // these are the children or 'sub items'
        children: [
            {
                id: 4,
                name: 'الملابس',
              },
              {
                id: 5,
                name: 'الاحذية',
              },
        ],
    },
  ];
const Step3 = () => {
    const [color, setColor] = React.useState(tinycolor('#70c1b3').toHex());
    const [colors, setColors] = React.useState([]);
    const [selectedItem, setSelectedItem] = React.useState([]);
    const [grnder, setGrnder] = React.useState([]);
    const [season, setSeason] = React.useState([]);
    const [size, setSize] = React.useState([]);


    const [isVisible, setIsVisible] = React.useState(false);
    const onSelectedItemsChange = (selectedItems) => {
        setSelectedItem( selectedItems );
      };
    const onChangeSize = (select) => {
        const isSelected = size.filter((i) => i === select).length > 0;
        if (isSelected){
            setSize((prev) => prev.filter((i) => i !== select));

        } else {
            setSize(prev => [...prev, select]);
        }
    }
    const onChangeSeason = (select) => {
        const isSelected = season.filter((i) => i === select).length > 0;
        if (isSelected){
          setSeason((prev) => prev.filter((i) => i !== select));

        } else {
          setSeason(prev => [...prev, select]);
        }
    }
    const fontSection = {
        fontFamily: Fonts.Cairo_Regular,
        };
    const selectText = {
        fontFamily: Fonts.Cairo_Bold,
        fontSize: 14,
        marginLeft: 15,
        };
    return (
        <View
          style={styles.step3Container} >
            <Text
              style={styles.titleColor}>الالوان</Text>
            <View
              style={styles.colorsContainer}>
                {colors.length !== 0
                ? colors.map((item, index) =>
                {
                    return (
                        <View
                            key={index}
                            style={[
                            styles.circleColor,
                            {backgroundColor: item.color,
                                marginLeft: 5}]}/>
                    );
                })
                : <Text
                    style={styles.titleNoColor} >لا يوجد ألوان</Text>}
            </View>
            <Button
              active
              title={'اختار الالوان'}
              backgroundColor={Colors.fernGreen}
              titleStyle={styles.colorButtonTitle}
              onPress={() => setIsVisible(!isVisible)} />
          <Choose
            isVisible={isVisible}
            onBackdropPress={() => setIsVisible(!isVisible)}>
              <View
                style={styles.ColorModal}>
                  <TriangleColorPicker
                    onColorChange={color => setColor({color: tinycolor(color).toHexString()})}
                    oldColor={color}
                    style={{height: 200}}
                    hideControls={true} />

                  <View
                    style={[
                        styles.circleColor,
                        {backgroundColor: color === '70c1b3'
                         ? '#70c1b3'
                         : color.color}]}/>
                 <View
                    style={styles.colorsContainer}>
                      {colors.length !== 0
                       ? colors.map((item, index) =>
                        {
                            return (
                                <View
                                  key={index}
                                  style={[
                                    styles.circleColor,
                                    {backgroundColor: item.color,
                                     marginLeft: 5}]}/>
                            );
                        })
                       : <Text
                           style={styles.titleNoColor} >لا يوجد ألوان</Text>}
                  </View>
                  <Button
                    active
                    title="أضف لون"
                    backgroundColor={Colors.fernGreen}
                    titleStyle={styles.colorButtonTitle}
                    styleButton={{marginTop: 10}}
                    onPress={() => {
                        if(colors.includes(color)) return;
                        setColors([...colors,color]);
                        }} />
              </View>
          </Choose>
          <View>
          <SectionedMultiSelect
            styles={{
                chipText:fontSection,
                chipsWrapper:{marginLeft: 40},
                selectToggle:{marginLeft: 18, marginRight: 10, marginTop: 15, marginBottom: 15}}}
            items={items}
            IconRenderer={Icon}
            uniqueKey="id"
            subKey="children"
            selectText="اختار النواع"
            selectedText=""
            confirmText="تأكيد"
            searchPlaceholderText="بحث عن انواع"
            showDropDowns={true}
            readOnlyHeadings={true}
            onSelectedItemsChange={onSelectedItemsChange}
            selectedItems={selectedItem}
            colors={{primary: Colors.fernGreen}}
            itemFontFamily={fontSection}
            confirmFontFamily={fontSection}
            subItemFontFamily={fontSection}
            searchTextFontFamily={fontSection}
            selectTextStyles={selectText} />
            </View>
            <View
              style={{}}>
                <Text
                  style={styles.titleColor}>الجنس</Text>
                <Selection
                  items={['رجالي','حريمي']}
                  style={styles.genderContainer}
                  styleButton={styles.grnder}
                  onChange={(select) => setGrnder(select)} />
            </View>
            <View
              style={{}}>
                <Text
                  style={styles.titleColor}>المقاسات</Text>
                <Selection
                  items={['رجالي','حريمي']}
                  style={styles.genderContainer}
                  styleButton={styles.grnder}
                  onChange={(select) => setGrnder(select)} />
            </View>
            <View
              style={{}}>
                <Text
                  style={styles.titleColor}>الحجم</Text>
                <SelectionMulti
                  items={['كبير','متوسط','صغير']}
                  style={styles.genderContainer}
                  styleButton={styles.grnder}
                  onChange={onChangeSize} />
            </View>
            <View
              style={{}}>
                <Text
                  style={styles.titleColor}>الموسم</Text>
                <SelectionMulti
                  items={['صيفي','شتوي']}
                  style={styles.genderContainer}
                  styleButton={styles.grnder}
                  onChange={onChangeSeason} />
            </View>
        </View>
    );
};

export default Step3;
