import React from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import ItemProduct from '../../components/ItemProduct';
import ProductsAction from '../../redux/actions/ProductsAction';
import styles from './styles';

const Favorite = ({products}) => {
    const navigation = useNavigation();
    return (
        <View
          style={styles.favoriteContainer} >
            <FlatList
              data={products}
              keyExtractor={(item) => item.id}
              contentContainerStyle={styles.itemProductsContainer}
              columnWrapperStyle={styles.columnWrapperStyle}
              numColumns={2}
              maxToRenderPerBatch={5}
              disableVirtualization={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) =><ItemProduct item={item} navigation={navigation} />} />
        </View>
    );
};

const mapStateToProps = (state) =>
{
    return {
        products: state.Products.products,
    };
};
const mapDispatchToProps = (dispatch) =>
{
    return {
        productsAction: () => dispatch(ProductsAction()),
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(Favorite);
