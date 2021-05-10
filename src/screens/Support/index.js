import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Colors from '../../../assets/colors';
import { Button, Choose, Input, Selection } from '../../components';
import AlertMessage from '../../components/Alert/AlertMessage';
import KeyboardAvoiding from '../../components/KeyboardAvoiding';
import styles from './styles';

const Support = () => {
    const [supportSelection, setSupportSelection] = React.useState('');
    const [isVisible, setIsVisible] = React.useState(false);
    React.useEffect(() => {
      isVisible === true && setTimeout(() =>setIsVisible(!isVisible) , 2500);
    }, [isVisible]);
    const onPressSend = () =>
    {
      setIsVisible(!isVisible);
    };

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
                  onPress={onPressSend}
                  marginBottom={13}
                  backgroundColor= {Colors.fernGreen}
                  titleStyle={styles.titleButton} />
            </View>
            <Text
              style={styles.connectText}>التواصل على الرقم التالي 0594669124</Text>
            <Choose
              isVisible={isVisible}
              onBackdropPress={() => setIsVisible(!isVisible)}>
                <AlertMessage
                  icon="sentiment-very-satisfied"
                  colorIcon={Colors.fernGreen}
                  description="انك تريد شراء الطلبية التي اضفتها"
                  messageTitle="شكراً لكم"/>
            </Choose>
        </KeyboardAvoiding>
        </View>
    );
};

export default Support;
