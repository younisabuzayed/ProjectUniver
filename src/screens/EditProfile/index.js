import React, {useState} from 'react'
import { View, Image, Text, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import styles from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Avatar } from 'react-native-paper';

const lengthNumber = 13;

//  const IconsCheck = () =>
//  {
//      if(lengthNumber >= 13)
//      {
//          return (
//             <Image source={iconNotMatch} style={styles.iconStyle} />
//          )
//      }
//      else
//      {
//          return (
//             <Image source={iconCheckPassword} style={styles.iconStyle} />

//          )
//      }
//  }
const EditProfile = () => {
    //  const {user} = route.params;
    // const [fullName, setFullName] = useState(user?.fullname);
    // const [photo, setPhoto] = useState({uri: user?.photo});
    // const [phoneNumber, setPhoneNumber] = useState(user?.phone_number);
    // const [username, setUsername] = useState(user?.username);
    // const [password, setPassword] = useState('');
    // const [isChangePass, setIsChangePass] = useState(false);
    const [fullName, setFullName] = useState('');
    const [photo, setPhoto] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isChangePass, setIsChangePass] = useState(false);

    // console.log(fullName, photo, phoneNumber, username, password, 'user')
    return (
        <View style={styles.editProfileContainer}>
        <ScrollView>
            <View style={styles.logoView}>
                {/* <UpdateImage image={photo.uri} setPhoto={(photo) => setPhoto(photo)}/> */}
                <Avatar.Image
                  source={{
                    uri: 'https://image.flaticon.com/icons/png/512/147/147144.png',
                  }}
                  size={90} />
            </View>

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
                    maxLength={lengthNumber}
                    onChangeText={(text) => setPhoneNumber(text)}
                    value={phoneNumber}
                    styleContainer={styles.inputContainer}
                    inputStyle={styles.input}
                    styleTitle={styles.titleStyle} />
                <Input
                    placeholder="رقم الجوال"
                    title="رقم الجوال"
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                    styleContainer={styles.inputContainer}
                    inputStyle={styles.input}
                    styleTitle={styles.titleStyle} />
                <Input
                    placeholder="كلمة المرور"
                    title="كلمة المرور"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    styleContainer={styles.inputContainer}
                    inputStyle={styles.input}
                    styleTitle={styles.titleStyle} />
                <Input
                    placeholder="تاريخ الميلاد"
                    title="تاريخ الميلاد"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    styleContainer={styles.inputContainer}
                    inputStyle={styles.input}
                    styleTitle={styles.titleStyle} />
                <Input
                    placeholder="موقعك الشخصي"
                    title="موقعك الشخصي"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    styleContainer={styles.inputContainer}
                    inputStyle={styles.input}
                    styleTitle={styles.titleStyle} />
            </View>
            <View style={styles.buttonConfirmView}>
                <Button
                    styleButton={styles.buttonConfirm}
                    active
                    title="حفظ تعديل"
                    titleStyle={styles.buttonConfirmText} />
            </View>
        </ScrollView>
        </View>
    )
}
const mapStateToProps = state => {
    return {
        error: state.profile.error,
        loading: state.profile.loading,
        data: state.profile.data,
    };
};
export default EditProfile;
