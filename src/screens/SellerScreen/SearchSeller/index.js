/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-alert */
import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, TouchableWithoutFeedback, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
//Components
import { Button, Choose, ItemProduct, Selection } from '../../../components';
//Styles and Icons
import styles, { height } from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Colors from '../../../../assets/colors';
import { connect } from 'react-redux';
import CategoriesAction from '../../../redux/actions/CategoriesAction';
import ProductsAction from '../../../redux/actions/ProductsAction';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { AirbnbRating } from 'react-native-ratings';
import ProfileShopAction from '../../../redux/actions/ProfileShopAction';
import ProfileAction from '../../../redux/actions/ProfileAction';
import { useToast } from 'react-native-fast-toast';

const SearchSeller = ({ profileShop, profileShopAction, profile, profileAction}) => {
    const [dataSearch, setDataSearch] = React.useState(null);
    const [isVisible, setIsVisible] = React.useState(false);
    const [searchQuery, setSearchQuery] = React.useState('');
    const [categortyData, setCategortyData] = React.useState(null);
    const [foodSize, setFoodSize] = React.useState(null);
    const [clothSize, setClothSize] = React.useState(null);
    const [grnder, setGrnder] = React.useState(null);
    const [season, setSeason] = React.useState(null);


    React.useEffect(() =>
    {
      profileShopAction();
      profileAction();
    },[]);
    React.useEffect(() =>
    {
       filters();
    },[searchQuery]);
    const onChangeSearch = query => setSearchQuery(query);
    console.log(categortyData);
    const [more, setMore] = React.useState(true);
    const navigation = useNavigation();
    const toast = useToast();

    const onPressAlertCart = () =>
    {
      toast.show(
        'سيتوفر قريبا',
        {
          style: styles.toastContainer,
          textStyle: styles.toastText});
    };
    const selected = profileShop.filter((_) => _.id === profile.seller)[0];
    const filters = () =>
    {
      let filterProducts;
      if (selected)
      {
        filterProducts = selected.products.filter(i => i.title.includes(searchQuery));
      }
      setDataSearch(filterProducts);
    };
    return (
        <SafeAreaView
          style={styles.searchContainer}>
            <View
              style={styles.headerSearch} >
                <TouchableOpacity
                  style={styles.buttonBack}
                  onPress={() => navigation.goBack()} >
                    <Ionicons
                      name="arrow-forward"
                      size={25}
                      color="#AFAFAF" />
                </TouchableOpacity>
                <View
                  style={styles.searchbarAndVioceContainer}>
                    <Searchbar
                      placeholder="ابحث عن المنتج الذي تريده"
                      onChangeText={onChangeSearch}
                      value={searchQuery}
                      style={styles.searchbar}
                      inputStyle={styles.textInput}
                      clearIcon={<Ionicons name="search" size={10}  style={{transform: [{rotateY: '180deg'}]}}/>} />
                    <View
                      style={styles.iconVoiceContainer} >
                        <TouchableWithoutFeedback
                          onPress={onPressAlertCart} >
                            <FontAwesome
                              name="microphone"
                              color="#8E8E93"
                              size={20} />
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </View>
            {searchQuery === '' && <View
              style={[styles.historyByResearchContainer,more && {height: height / 4}]} >
                <Button
                  title="المزيد"
                  onPress={() => setMore(!more)}
                  children={<SimpleLineIcons
                              name={more ? 'arrow-down' : 'arrow-up'}
                              size={13}
                              color={Colors.more} />}
                  styleButton={styles.moreButton}
                  titleStyle={styles.moreText} />
                <View
                  style={styles.historySearch} >
                    <Text
                      style={styles.titleHistory} >جاكيت رجالي </Text>
                    <TouchableOpacity>
                      <Ionicons
                        name="ios-close-sharp"
                        size={20}
                        color="#C2C2C2" />
                    </TouchableOpacity>
                </View>
            </View>}
            {searchQuery !== '' &&
            <FlatList
              data={dataSearch}
              keyExtractor={(item) => item.id}
              contentContainerStyle={styles.itemProductsContainer}
              columnWrapperStyle={{marginRight: 6, marginLeft: 6}}
              numColumns={2}
              maxToRenderPerBatch={5}
              disableVirtualization={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) =><ItemProduct item={item} navigation={navigation} />} />}
        </SafeAreaView>
    );
};
const mapStateToProps = (state) =>
{
    return {
        categories: state.Categories.categories,
        products: state.Products.products,
        profileShop: state.ProfileShop.profileShop,
        profile: state.Profile.profile,

    };
};
const mapDispatchToProps = (dispatch) =>
{
    return {
        categoriesAction: () => dispatch(CategoriesAction()),
        productsAction: () => dispatch(ProductsAction()),
        profileShopAction: () => dispatch(ProfileShopAction()),
        profileAction: () => dispatch(ProfileAction()),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchSeller);

