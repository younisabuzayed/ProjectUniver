/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-alert */
import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, TouchableWithoutFeedback, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
//Components
import { Button, Choose, ItemProduct, Selection } from '../../components';
//Styles and Icons
import styles, { height } from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Colors from '../../../assets/colors';
import { connect } from 'react-redux';
import CategoriesAction from '../../redux/actions/CategoriesAction';
import ProductsAction from '../../redux/actions/ProductsAction';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { AirbnbRating } from 'react-native-ratings';
import { useToast } from 'react-native-fast-toast';
import Fonts from '../../../assets/fonts';

const Search = ({products, productsAction, categories, categoriesAction}) => {
    const [dataSearch, setDataSearch] = React.useState(null);
    const [isVisible, setIsVisible] = React.useState(false);
    const [searchQuery, setSearchQuery] = React.useState('');
    const [categortyData, setCategortyData] = React.useState(null);
    const [foodSize, setFoodSize] = React.useState(null);
    const [clothSize, setClothSize] = React.useState(null);
    const [grnder, setGrnder] = React.useState(null);
    const [season, setSeason] = React.useState(null);
    const toast = useToast();


    React.useEffect(() =>
    {
      productsAction();
      categoriesAction();
    },[]);
    React.useEffect(() =>
    {
       filters();
    },[searchQuery]);
    const onChangeSearch = query => setSearchQuery(query);
    const getCategories = () =>
    {
      return categories.map((i) => i.name);
    };
    console.log(categortyData);
    const filters = () =>
    {
      let filterProducts;
      if (products)
      {
        filterProducts = products.filter(i => i.title.includes(searchQuery));
      }
      if (categortyData !== null)
      {
        filterProducts = filterProducts.filter((i) => i.categories[0].name === categortyData );
      }
      setDataSearch(filterProducts);
    };
    const onChangeMenu = (num) => {
      setCategortyData(num);
    };
    const onChangeFilter = (index, state) => {
      state(index);
    };
    const onPressButtonSearch = () =>
    {
      filters();
      setIsVisible(!isVisible);
    };
    const onPressAlertCart = () =>
    {
      toast.show(
        'سيتوفر قريبا',
        {
          style: styles.toastContainer,
          textStyle: styles.toastText});
    };
    const [more, setMore] = React.useState(true);
    const navigation = useNavigation();
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
                      placeholderTextColor="#6D6D6D"
                      onChangeText={onChangeSearch}
                      value={searchQuery}
                      style={styles.searchbar}
                      inputStyle={styles.textInput}
                      selectionColor={Colors.balck}
                      theme={{fonts:{regular: {fontFamily: Fonts.Cairo_Regular}}}}
                      clearIcon={<Ionicons
                                   name="search" size={10}
                                   color="#8E8E93"
                                   style={{transform: [{rotateY: '180deg'}]}}/>} />
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
                <Button
                  onPress={() => setIsVisible(!isVisible)}
                  styleButton={styles.buttonMenu}
                  children={<MaterialIcons
                              name="tune"
                              size={25}
                              color={Colors.iconTune} />} />
                <Choose
                  isVisible={isVisible}
                  onBackdropPress={() => setIsVisible(!isVisible)}
                  timeOut={500} >
                    <View
                      style={styles.choosesContainer}>
                        <Selection
                          items= {getCategories()}
                          onChange={onChangeMenu}
                          styleButton={styles.selectionMenuButton}
                          style={styles.selectionMenu} />
                        {categortyData === 'وجبات سريعة'
                          && <View
                               style={styles.foodSizeContainer}>
                                 <Text
                                   style={styles.titleFilters}>الحجم</Text>
                                     <Selection
                                       items={['L', 'M', 'S']}
                                       style={styles.selectionsStyle}
                                       onChange={(size) => onChangeFilter(size, setFoodSize)} />
                             </View>}
                        {categortyData === 'الملابس'
                          && <View
                               style={styles.foodSizeContainer}>
                                 <Text
                                   style={styles.titleFilters}>المقاسات</Text>
                                 <Selection
                                   items={['XL', 'L', 'M', 'S', 'XS']}
                                   style={styles.selectionsStyle}
                                   onChange={(size) => onChangeFilter(size, setClothSize)} />
                                 <Text
                                  style={styles.titleFilters}>الجنس</Text>
                                 <Selection
                                   items={['رجالي','حريمي']}
                                   style={styles.selectionsStyle}
                                   styleButton={styles.selectionButton}
                                   onChange={(select) => onChangeFilter(select, setGrnder)} />
                                 <Text
                                  style={styles.titleFilters}>الموسم</Text>
                                 <Selection
                                   items={['صيفي','شتوي']}
                                   style={styles.selectionsStyle}
                                   styleButton={styles.selectionButton}
                                   onChange={(seasons => onChangeFilter(seasons, setSeason))} />
                             </View>}
                             <View
                               style={styles.ratingContainer}>
                                  <Text
                                    style={styles.titleFilters}>التقيم</Text>
                                  <AirbnbRating
                                      starContainerStyle={styles.starContainerStyle}
                                      count={5}
                                      defaultRating={5}
                                      size={25}
                                      showRating={false}
                                      onFinishRating={(s) => console.log(s)} />
                              </View>
                    </View>
                    <View
                      style={styles.buttonSearchContainer}>
                        <Button
                          active
                          backgroundColor={Colors.buttonSearch}
                          styleButton={styles.buttonSearch}
                          title="ابحث"
                          onPress={onPressButtonSearch} />
                    </View>
                </Choose>
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
    };
};
const mapDispatchToProps = (dispatch) =>
{
    return {
        categoriesAction: () => dispatch(CategoriesAction()),
        productsAction: () => dispatch(ProductsAction()),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);

