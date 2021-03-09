import { PRODUCTS_FAILED, PRODUCTS_STATE, PRODUCTS_SUCCESS } from '../actions/ActionsTypes';

const initialState =
{
    products: null,
    error:'',
    isLoading: false,
};

const ProductsReducer = (state = initialState, action) =>
{
    switch (action.type)
    {
        case PRODUCTS_STATE:
            return {
                ...state,
                isLoading: true,
            };
        case PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload,
                isLoading: false,
            };
        case PRODUCTS_FAILED:
            return {
                ...state,
                error: action.error,
                isLoading: false,
            };
        default:
            return state;
    }
};

export default ProductsReducer;
