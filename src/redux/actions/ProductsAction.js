import axios from 'axios';
import api from '../../Api';
import { PRODUCTS_FAILED, PRODUCTS_STATE, PRODUCTS_SUCCESS } from './ActionsTypes';

const onProductsActionState = () =>
{
    return {
        type: PRODUCTS_STATE,
    };
};

const onProductsActionSuccess = (data) =>
{
    return {
        type: PRODUCTS_SUCCESS,
        payload: data,
    };
};

const onProductsActionFailed = (error) =>
{
    return {
        type: PRODUCTS_FAILED,
        error,
    };
};

const ProductsAction = () =>
{
    return async dispatch =>
    {
        dispatch(onProductsActionState());
        try
        {
            const {data} = await axios.get(api + 'products');
            // console.log('ProductsAction', data);
            dispatch(onProductsActionSuccess(data));
        } catch (error)
        {
            dispatch(onProductsActionFailed(error));
        }
    };
};

export default ProductsAction;
