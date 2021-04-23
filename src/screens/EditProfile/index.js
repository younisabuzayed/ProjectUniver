import React, {useState} from 'react';
import { View, ScrollView, SafeAreaView, Platform, Text } from 'react-native';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';

import { AddressContainer, Choose } from '../../components';
import Input from '../../components/Input';
import Button from '../../components/Button';

//Styles and Icons
import styles from './styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



const EditProfile = () => {
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [date, setDate] = React.useState( new Date());
    const [isVisible, setIsVisible] = React.useState(false);
    const [isVisibleAddress, setIsVisibleAdress] = React.useState(false);

    return (
        <SafeAreaView style={styles.editProfileContainer}>
        <ScrollView
          style={styles.scrollView}>
            <View style={styles.editView}>
                <Input
                    placeholder={'اسم'}
                    title="اسم"
                    onChangeText={(text) => setFullName(text)}
                    value={fullName}
                    styleContainer={styles.inputContainer}
                    inputStyle={styles.input}
                    styleTitle={styles.titleStyle} />
                <Input
                    placeholder="الايمال"
                    title="الايمال"
                    onChangeText={(text) => setPhoneNumber(text)}
                    value={phoneNumber}
                    styleContainer={styles.inputContainer}
                    inputStyle={styles.input}
                    styleTitle={styles.titleStyle}
                    marginTop={18} />
                <Input
                    placeholder="رقم الجوال"
                    title="رقم الجوال"
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                    styleContainer={styles.inputContainer}
                    inputStyle={styles.input}
                    styleTitle={styles.titleStyle}
                    marginTop={18} />
                <Input
                    placeholder="كلمة المرور"
                    title="كلمة المرور"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    styleContainer={styles.inputContainer}
                    inputStyle={styles.input}
                    styleTitle={styles.titleStyle}
                    marginTop={18} />
                <View
                  style={styles.dateContainer}>
                    <Text style={styles.dateTitle}>تاريخ الميلاد</Text>
                    <Button
                    title={moment(date).format('DD-MM-YYYY')}
                    onPress={() => setIsVisible(!isVisible)}
                    active
                    backgroundColor="#E8E8E8"
                    styleButton={styles.buttonDate}
                    titleStyle={styles.buttonDateTitle}
                    children={<FontAwesome5
                                name="calendar-alt"
                                size={15} />} />
                    <Choose
                      isVisible={isVisible}
                      onBackdropPress={() => setIsVisible(!isVisible)}>
                        <View
                          style={styles.dateModal}>
                            <DatePicker
                              date={date}
                              onDateChange={(date) => setDate(date)}
                              locale="ar-SA"
                              mode={'date'}
                              androidVariant={Platform.OS === 'ios'
                                            ? 'iosClone'
                                            : 'nativeAndroid'} />
                        </View>
                    </Choose>
                </View>
                <View
                  style={styles.dateContainer}>
                    <Text style={styles.dateTitle}>موقعك الشخصي</Text>
                    <Button
                    title={'غزة- السدرة -شارع يافا'}
                    onPress={() => setIsVisibleAdress(!isVisibleAddress)}
                    active
                    backgroundColor="#E8E8E8"
                    styleButton={styles.buttonAddress}
                    titleStyle={styles.buttonAddressTitle} />
                    <Choose
                      isVisible={isVisibleAddress}
                      onBackdropPress={() => setIsVisibleAdress(!isVisibleAddress)}
                      swipeDirection={['up', 'left', 'right', 'down']}
                      modalStyle={styles.addressModalStyle} >
                        <View
                          style={styles.addressModal}>
                           <AddressContainer />
                        </View>
                    </Choose>
                </View>
            </View>
            <View style={styles.buttonConfirmView}>
                <Button
                    styleButton={styles.buttonConfirm}
                    active
                    title="حفظ تعديل"
                    titleStyle={styles.buttonConfirmText} />
            </View>
        </ScrollView>
        </SafeAreaView>
    );
};
const mapStateToProps = state => {
    return {
        error: state.profile.error,
        loading: state.profile.loading,
        data: state.profile.data,
    };
};
export default EditProfile;
