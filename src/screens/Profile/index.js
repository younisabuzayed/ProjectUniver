/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Button } from '../../components';
import Foundation from 'react-native-vector-icons/Foundation';
import { connect } from 'react-redux';
import ProfileAction from '../../redux/actions/ProfileAction';
import * as ImagePicker from 'react-native-image-picker';

//Style and Icons
import styles from './styles';
import Colors from '../../../assets/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import EditProfileAction from '../../redux/actions/EditProfileAction';

const Profile = ({profileAction, profile, editProfile, editProfileAction}) => {
    const [images, setImage] = React.useState(profile && profile.profile_image !== undefined  ? profile.profile_image.url : null);

    React.useEffect(()=> {
      profileAction();
    },[]);
    const navigation = useNavigation();
    const pickImage = () => {
        ImagePicker.launchImageLibrary(
        {
          mediaType: 'photo',
          includeBase64: false,
          maxHeight: 200,
          maxWidth: 200,
        },
        (response) => {
          setImage(response.uri);
          editProfileAction(response.uri);

        },
      );
            // let localUri = result.uri;
      // let filename = localUri.split('/').pop();
      // console.log('filename',filename)
      // let match = /\.(\w+)$/.exec(filename);
      // console.log('match',match)
      // let type = match ? `image/${match[1]}` : `image`;
      // console.log(type,'type')
      // let formData = new FormData();
      // formData.append('images', { uri: localUri, name: filename, type });
      // console.log(formData);
        // setImage(result.uri);
    };
    // console.log(images)
    const ContentBox = ({title, number, icon}) =>
    {
      return (
        <View
          style={styles.contentBoxContainer}>
            <View
              style={styles.titleAndIconContainer}>
                <View
                  style={styles.iconContent}>
                    {icon}
                </View>
                <Text
                  style={styles.titleContent}>{title}</Text>
            </View>
            <View
              style={styles.numberContent}>
                <Text
                  style={styles.numberText}>{number}</Text>
            </View>
        </View>
      );
    };
    if (profile !== null)
    {return (
        <SafeAreaView
          style={styles.profileContainer}>
            <View
              style={styles.headerContainer} >
                <View style={styles.fillColor} />
                <View
                  style={styles.headerTitleAndButtonContainer}  />
                <View
                  style={styles.contentContainer} >
                    <View
                      style={styles.profileImageContainer} >
                        <TouchableOpacity
                          onPress={pickImage} >
                            <Avatar.Image
                              source={{
                                uri: images !== null ? images : 'https://image.flaticon.com/icons/png/512/147/147144.png',
                              }}
                              size={80} />
                            <View
                              style={styles.addPhotoContainer} >
                                <MaterialIcons
                                  name="add-to-photos"
                                  size={17}
                                  color={Colors.titleProduct} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View
                      style={styles.NameContainer} >
                        <Ionicons
                          name="person"
                          size={25}
                          color={Colors.fernGreen} />
                        <Text
                          style={styles.NameText}>{profile.fullname}</Text>
                    </View>
                    <View
                      style={styles.phoneNumberContainer} >
                        <FontAwesome
                          name="phone"
                          size={25}
                          color={Colors.fernGreen}
                          style={{transform: [{rotateY: '180deg'}]}} />
                        <Text
                          style={styles.phoneNumberText}>05994669124</Text>
                    </View>
                    <View
                      style={styles.addressContainer} >
                        <MaterialIcons
                          name="location-on"
                          size={25}
                          color={Colors.fernGreen} />
                        <Text
                          style={styles.addressText}>غزة السدرة شارع يافا</Text>
                    </View>
                </View>
            </View>
            <View
              style={styles.bodyContainer}>
                <ContentBox
                  title="اجمالي المدفوعات"
                  number={`${10000}$`}
                  icon={<Foundation name="dollar" size={27} color={Colors.fernGreen} />} />
                <ContentBox
                  title="عدد الطلبيات"
                  number={`${100}`}
                  icon={<FontAwesome5
                          name="clipboard-list"
                          size={18}
                          color={Colors.texasRose} />} />
                <ContentBox
                  title="عدد المنتجات المفضلة"
                  number={`${300}`}
                  icon={ <MaterialIcons
                            name="favorite"
                            size={20}
                            color={Colors.carnation} />} />
                <ContentBox
                  title="عدد المنتجات المشترية"
                  number={`${500}`}
                  icon={<FontAwesome5
                          name="shopping-cart"
                          size={20}
                          color={'#ABABAB'} />} />
            </View>
        </SafeAreaView>
    );
  } else
  {
    return (
      <View
        style={styles.activityIndicator}>
          <ActivityIndicator
            size="small"
            color={Colors.fernGreen}/>
      </View>
    )
  }
};
const mapStateToProps = (state) =>
{
  return {
    profile: state.Profile.profile,
    editProfile: state.EditProfile.editProfile,
  };
};
const mapDispatchToProps = (dispatch) =>
{
  return {
    profileAction: () => dispatch(ProfileAction()),
    editProfileAction: (profile_image) => dispatch(EditProfileAction(profile_image)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
 {/* <View
  style={styles.goBackIconContainer} >
    <Button
      onPress={() => navigation.goBack()}
      styleButton={styles.goBackIcon}
      children={<MaterialIcons
                  name="arrow-forward"
                  size={25}
                  color={'#FFFFFF'}/>} />
</View>
<View
  style={styles.nameScreenContainer}>
    <Text
      style={styles.nameScreenText}>الملف الشخصي</Text>
</View> */}
{/* <View
  style={styles.deleteAccountContainer} >
      <Button
        title={'ألغاء الحساب'}
        onPress={() => navigation.goBack()}
        titleStyle={styles.deleteAccountTitle}
        styleButton={styles.deleteAccountButton} />
</View> */}
