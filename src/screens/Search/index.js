/* eslint-disable no-alert */
import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, TouchableWithoutFeedback, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
//Components
import { Button, ItemProduct } from '../../components';
//Styles and Icons
import styles, { height } from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Colors from '../../../assets/colors';
import { connect } from 'react-redux';
import CategoriesAction from '../../redux/actions/CategoriesAction';
import ProductsAction from '../../redux/actions/ProductsAction';

const Search = ({products, productsAction}) => {
    React.useEffect(() =>
    {
      productsAction();
    },[]);
    const [searchQuery, setSearchQuery] = React.useState('');
    const [productSearch, setProductSearch] = React.useState([]);
    const onChangeSearch = query => setSearchQuery(query);
    const filterProducts = products.filter(i => i.title.includes(searchQuery));
    console.log(products.categories);
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
                      onChangeText={onChangeSearch}
                      value={searchQuery}
                      style={styles.searchbar}
                      inputStyle={styles.textInput}
                      clearIcon={<Ionicons name="search" size={10}  style={{transform: [{rotateY: '180deg'}]}}/>} />
                    <View
                      style={styles.iconVoiceContainer} >
                        <TouchableWithoutFeedback
                          onPress={() => alert('Not Avalibale')} >
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
              data={filterProducts}
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

