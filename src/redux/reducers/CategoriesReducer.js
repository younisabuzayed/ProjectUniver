import { CATEGORIES_FAILED, CATEGORIES_STATE, CATEGORIES_SUCCESS } from '../actions/ActionsTypes';

const initialState =
{
    categories: null,
    error: '',
    isLoading: false,
};

const CategoriesReducer = (state = initialState, action) =>
{
    switch (action.type)
    {
        case CATEGORIES_STATE:
            return {
                ...state,
                isLoading: true,
            };
        case CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: action.payload,
                isLoading: false,
            };
        case CATEGORIES_FAILED:
            return {
                ...state,
                error: action.error,
                isLoading: false,
            };
        default: return state;
    }
};

export default CategoriesReducer;
