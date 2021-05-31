import React from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import ItemProduct from '../../components/ItemProduct';
import ProductsAction from '../../redux/actions/ProductsAction';
import styles from './styles';
import Colors from '../../../assets/colors';

const Favorite = ({products}) => {
    const navigation = useNavigation();
    if (products !== null)
    {
        const select_products = products.filter((_) => _.favorite === true);
        console.log(select_products);
        return (
        <View
          style={styles.favoriteContainer} >
            <FlatList
              data={select_products}
              keyExtractor={(item) => item.id}
              contentContainerStyle={styles.itemProductsContainer}
              columnWrapperStyle={styles.columnWrapperStyle}
              numColumns={2}
              maxToRenderPerBatch={5}
              disableVirtualization={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) =><ItemProduct
                                       item={item}
                                       navigation={navigation}
                                       onChange={(bool) => console.log(bool) } />} />
        </View>
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
