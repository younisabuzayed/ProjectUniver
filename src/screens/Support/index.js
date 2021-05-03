import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Colors from '../../../assets/colors';
import { Button, Input, Selection } from '../../components';
import KeyboardAvoiding from '../../components/KeyboardAvoiding';
import styles from './styles';

const Support = () => {
    const [supportSelection, setSupportSelection] = React.useState('');
    return (
        <View
          style={styles.selectionContainer}>
          <KeyboardAvoiding>
            <Text
              style={styles.supportText}>
                {`اذا  واجهتك مشاكل في  التطبيق 
يجيب عليك تحديد المشكلة وكتابة التفاصيل المشكلة `}
            </Text>
            <Selection
              items={['مشكلة تقنية', 'مشكلة عدم استلام','مشكلة منتجات','مشكلة عند التسليم']}
              styleButton={styles.buttonSelection}
              style={styles.selection}
              onChange={(support) => setSupportSelection(support)} />
            <TextInput
              multiline={true}
              numberOfLines={4}
              onChangeText={(text) => console.log(text)}
              style={styles.inputArea}
              />
            <View
              style={styles.buttonContainer} >
                <Button
                  active
                  title={'ارسال'}
                  onPress={() => {}}
                  marginBottom={13}
                  backgroundColor= {Colors.fernGreen}
                  titleStyle={styles.titleButton} />
            </View>
            <Text
              style={styles.connectText}>التواصل على الرقم التالي 0594669124</Text>
        </KeyboardAvoiding>
        </View>
    );
};

export default Support;
