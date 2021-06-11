/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Animated, TouchableOpacity, Image, FlatList, ActivityIndicator, ScrollView, ImageBackground, PixelRatio } from 'react-native';
import { connect } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';
//State Management
import CategoriesAction from '../../redux/actions/CategoriesAction';
import ProductsAction from '../../redux/actions/ProductsAction';

// Styles and Icon
import styles, { width } from './styles';
import { ItemProduct, SliderContainer } from '../../components';
const categoriesType = [
  {
    id: '1',
    name:'وجبات سريعة',
  },
  {
    id: '2',
    name:'وجبات عائلية',
  },
  {
    id: '3',
    name:'ساندوتش',
  },
  {
    id: '4',
    name:'مشروبات',
  }];
  const categoriesClothesType = [
    {
      id: '1',
      name:'نساء',
    },
    {
      id: '2',
      name:'رجال',
    },
    {
      id: '3',
      name:'اطفال',
    }];
    const categoriesElectType = [
      {
        id: '1',
        name:'غسالات',
      },
      {
        id: '2',
        name:'ثلاجات',
      },
      {
        id: '3',
        name:'أدوات تنظيف',
      }];
    const categoriesElectronType = [
        {
          id: '1',
          name:'لابتوبات',
        },
        {
          id: '2',
          name:'هواتف',
        },
        {
          id: '3',
          name:'تلفيزيونات',
        },
        {
          id: '4',
          name:'أدوات الكمبيونر',
        }];
        const categoriesCareType = [
          {
            id: '1',
            name:'المكياج',
          },
          {
            id: '2',
            name:'ماكينات حلاقة كهربائية',
          },
          {
            id: '3',
            name:'العناية بالشعر',
          },
          {
            id: '4',
            name:'العناية بالشعر',
          }];
const Category = ({categories,categoriesAction}) => {
    const navigation = useNavigation();
    const route = useRoute();
    React.useEffect(() => {
        categoriesAction();
        navigation.setOptions({headerTitle: route.params.name});
    }, []);
    const Categories = categories.filter((_, i) => _.category_id === route.params.idItems)[0];
    const productsSelected = Categories.products;
    console.log(Categories);
    const chooseInnterCategories = Categories.name === 'وجبات سريعة'
                                    ? categoriesType
                                    : Categories.name === 'الملابس'
                                    ? categoriesClothesType
                                    : Categories.name === 'الاجهزة الكهربائية'
                                    ? categoriesElectType
                                    : Categories.name === 'الاجهزة الالكترونية'
                                    ? categoriesElectronType
                                    : Categories.name === "مستحضرات التجميل"
                                    ? categoriesCareType
                                    : null;
    const renderItemCategories = ({item}) =>
    {
        return (
            <TouchableOpacity
              style={styles.categoriesContainer}
              onPress={() => navigation.navigate('AllProducts',{
                nameTab: route.params.name,
                name: item.name,
              })} >
             <Text
               style={styles.categoriesTitle} >{item.name}</Text>
            </TouchableOpacity>
        );
    };
    //Slider for Ads

    if (categories !== null)
    {
    return (
        <View
          style={styles.CategoryContainer} >
        <ScrollView>
         {/*Slider */}
         <SliderContainer />
         {/* FlatList Catgories */}
         <View
           style={styles.flatListCatgoriesContainer} >
            <FlatList
              data={chooseInnterCategories}
              keyExtractor={(item) => item.id}
              windowSize={5}
              maxToRenderPerBatch={5}
              updateCellsBatchingPeriod={30}
              removeClippedSubviews={false}
              initialNumToRender={7}
              onEndReachedThreshold={0.1}
              horizontal
              contentContainerStyle={styles.flatListCatgories}
              showsHorizontalScrollIndicator={false}
              renderItem={renderItemCategories} />
         </View>
         <View
           style={styles.productsContainer} >
            <Text
              style={styles.title}>المنتجات الجديدة</Text>
           <FlatList
              data={productsSelected.slice(0,4)}
              keyExtractor={(item) => item.id}
              windowSize={5}
              maxToRenderPerBatch={5}
              updateCellsBatchingPeriod={30}
              removeClippedSubviews={false}
              initialNumToRender={7}
              onEndReachedThreshold={0.1}
              contentContainerStyle={styles.itemProductsContainer}
              columnWrapperStyle={{marginRight: 6, marginLeft: 6}}
              numColumns={2}
              disableVirtualization={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => <ItemProduct item={item} navigation={navigation} />} />
          {/* {products.slice(0,5).map(renderItemProducts)} */}
         </View>
         <View
           style={[styles.productsContaine,{marginBottom: 20}]} >
            <Text
              style={styles.title} >أعلى طلبا</Text>
            <FlatList
              data={productsSelected.slice(0,4)}
              keyExtractor={(item) => item.id}
              contentContainerStyle={styles.itemProductsContainer}
              columnWrapperStyle={{marginRight: 6, marginLeft: 6}}
              numColumns={2}
              windowSize={5}
              maxToRenderPerBatch={5}
              updateCellsBatchingPeriod={30}
              removeClippedSubviews={false}
              initialNumToRender={7}
              onEndReachedThreshold={0.1}
              disableVirtualization={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) =><ItemProduct item={item} navigation={navigation} />} />
         </View>
        </ScrollView>
        </View>
    );
    }
    else {
        return (
            <View
              style={styles.activityIndicator}>
                <ActivityIndicator
                  color="#58b760"
                  size="large" />
            </View>
        );
    }
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
export default connect(mapStateToProps,mapDispatchToProps)(Category);
