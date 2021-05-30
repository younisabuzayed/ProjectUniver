/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { View, Text, SafeAreaView, FlatList, ActivityIndicator } from 'react-native';
import { Avatar } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Button, ItemProduct } from '../../components';
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
import ProfileShopAction from '../../redux/actions/ProfileShopAction';

const ProfileShop = ({profileShopAction, profileShop}) => {
    const [images, setImage] = React.useState(null);
    React.useEffect(()=> {
      profileShopAction();
    },[]);
    const route = useRoute();
    const navigation = useNavigation();
    const {id_shop, name_shop} = route.params;

    const shop_selected = Object.values(profileShop).filter((_)=> _);
    const selected = shop_selected.filter((_) => _.id === id_shop)[0];
    console.log(selected);
    React.useEffect(() => {
      if (profileShop !== null) {
        navigation.setOptions({
          headerTitle: name_shop,
          headerTitleStyle:styles.headerNavigation,
        });
      }
    }, []);
    if (selected !== undefined){
    return (
        <SafeAreaView
          style={styles.profileContainer}>
            <View
              style={styles.headerContainer} >
                <View
                  style={styles.profileImageContainer} >
                    <Avatar.Image
                      source={{
                        uri: images !== null ? images : 'https://image.flaticon.com/icons/png/512/147/147144.png',
                      }}
                      size={80} />
                </View>
                <View
                  style={styles.contentContainer} >
                    <View
                      style={styles.NameContainer} >
                        <Ionicons
                          name="person"
                          size={25}
                          color={Colors.fernGreen} />
                        <Text
                          style={styles.NameText}>{selected.shop_owner}</Text>
                    </View>
                    <View
                      style={styles.phoneNumberContainer} >
                        <FontAwesome
                          name="phone"
                          size={25}
                          color={Colors.fernGreen}
                          style={{transform: [{rotateY: '180deg'}]}} />
                        <Text
                          style={styles.phoneNumberText}>{selected.phone_number}</Text>
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
              style={styles.bodyContainer} />
               <FlatList
              data={selected.products}
              keyExtractor={(item) => item.id}
              contentContainerStyle={styles.itemProductsContainer}
              columnWrapperStyle={{marginRight: 6, marginLeft: 6}}
              numColumns={2}
              maxToRenderPerBatch={5}
              disableVirtualization={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) =><ItemProduct item={item} navigation={navigation} />} />
        </SafeAreaView>
    );}
    else
    {
      return (
        <View
          style={styles.activityIndicator} >
          <ActivityIndicator
            size="large" />
        </View>
    );}
};
const mapStateToProps = (state) =>
{
  return {
    profileShop: state.ProfileShop.profileShop,
  };
};
const mapDispatchToProps = (dispatch) =>
{
  return {
    profileShopAction: () => dispatch(ProfileShopAction()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProfileShop);
