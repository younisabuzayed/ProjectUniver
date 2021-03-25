/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, Image } from 'react-native';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
//Component
import { Button, EyeShow, Input } from '../../../components';
//Styles
import styles from './styles';
import Colors from '../../../../assets/colors';
import Modal from 'react-native-modal';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
const Choose = ({isVisible, children,onBackdropPress, timeOut}) =>
{
  return (
    <Modal
     testID={'modal'}
     isVisible={isVisible}
     onBackdropPress={onBackdropPress}
     animationOutTiming={timeOut}
     swipeDirection={['up', 'left', 'right', 'down']}
     style={{
        justifyContent: 'flex-end',
        margin: 0,
      }} >
         {children}
    </Modal>
  );
};

const CommercialRegister = () => {
    const [ownerName, setOwnerName] = React.useState('');
    const [companyName, setCompanyName] = React.useState('');
    const [identity, setIdentity] = React.useState('');
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const [kind, setKind] = React.useState(null);
    const [date, setDate] = React.useState( new Date());
    const [isVisible, setIsVisible] = React.useState(false);
    const [isVisibleKind, setIsVisibleKind] = React.useState(false);



    const refSecond = React.useRef();
    const refThird = React.useRef();
    const refFourth = React.useRef();

    const onPressCommercialRegister = () =>
    {
        // console.log(email, password);
    };
    const onPressKind = (item) =>
    {
      setKind(item);
      setIsVisibleKind(!isVisibleKind);
    };
    return (
        <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false} >
        <KeyboardAvoidingView enabled>
        <View
          style={styles.signupContainer}>
          <View
            style={styles.bodyContianer}>
             <View
               style={styles.bodyTitleAndDescription}>
                <View style={styles.strock} />
                <Text style={styles.titleSignup}>البيانات التجارية</Text>
             </View>
             <View
               style={styles.inputContainer}>
             <Input
               title="اسم المالك"
               returnKeyType="next"
               onSubmitEditing={() => { refSecond.current.focus(); }}
               onChangeText={(name) => setOwnerName(name)} />
             <Input
                title="اسم المحل"
                returnKeyType="next"
                onChangeText={(companyName) => setCompanyName(companyName)}
                onSubmitEditing={() => { refThird.current.focus(); }}
                ref={refSecond}
                marginTop={15} />
             <Input
                title="رقم الهوية"
                returnKeyType="next"
                onChangeText={(identity) => setIdentity(identity)}
                onSubmitEditing={() => { refFourth.current.focus(); }}
                ref={refThird}
                marginTop={15} />
             <Input
                title="رقم الجوال"
                returnKeyType="next"
                onChangeText={(phone) => setPhoneNumber(phone)}
                onSubmitEditing={() => { refFourth.current.focus(); }}
                ref={refThird}
                marginTop={15} />
             <Text
               style={styles.titleInput}>سنة الانشاء</Text>
             <Button
                title={moment(date).format('DD-MM-YYYY')}
                onPress={() => setIsVisible(!isVisible)}
                active
                backgroundColor="#E8E8E8"
                styleButton={styles.buttonDate}
                titleStyle={styles.buttonDateTitle} />
                  <Choose
                    isVisible={isVisible}
                    onBackdropPress={() => setIsVisible(!isVisible)} >
                      <View
                        style={styles.modal}>
                          <DatePicker
                            date={date}
                            onDateChange={(date) => setDate(date)}
                            locale="ar-SA"
                            mode={'date'} />
                      </View>
                  </Choose>
             <Text
               style={styles.titleInput}>الصنف</Text>
             <Button
               active
               backgroundColor={Colors.mercury}
               styleButton={styles.buttonKind}
               titleStyle={styles.buttonKindTitle}
               title={kind}
               onPress={() => setIsVisibleKind(!isVisibleKind)}
               children={<MaterialIcons name="keyboard-arrow-down" size={20}/>} />
                 <Choose
                    isVisible={isVisibleKind}
                    onBackdropPress={() => setIsVisibleKind(!isVisibleKind)} >
                      <View
                        style={[styles.modal,{height: 120}]}>
                          <View style={styles.strock} />
                          {['وجباتي','ملابس','هواتف'].map(item => {
                            return (
                              <Button
                                key={item}
                                title={item}
                                onPress={() => onPressKind(item)}
                                titleStyle={styles.buttonKindTitle}
                                marginBottom={5} />
                            );
                          })}
                      </View>
                  </Choose>
             </View>
            <View
              style={styles.buttonContainer} >
            <Button
              active
              title={'انشاء حساب'}
              onPress={onPressCommercialRegister}
              marginBottom={13}
              backgroundColor= {Colors.fernGreen}
              titleStyle={styles.titleButton} />
            </View>
          </View>
        </View>
        </KeyboardAvoidingView>
        </ScrollView>
    );
};

export default CommercialRegister;
