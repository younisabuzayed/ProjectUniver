import axios from 'axios';
import { CATEGORIES_FAILED, CATEGORIES_STATE, CATEGORIES_SUCCESS } from './ActionsTypes';
import api from '../../Api';
const onCategoriesActionState = () =>
{
    return {
        type: CATEGORIES_STATE,
    };
};
const onCategoriesActionSuccess = (data) =>
{
    return {
        type: CATEGORIES_SUCCESS,
        payload: data,
    };
};
const onCategoriesActionFailed = (error) =>
{
    return {
        type: CATEGORIES_FAILED,
        error: error,
    };
};

const CategoriesAction = () =>
{


    return async (dispatch) =>
    {
        dispatch(onCategoriesActionState());
        try
        {
           const {data} = await axios.get(api + 'categories');
           console.log('sdsd',data);
           dispatch(onCategoriesActionSuccess(data));
        } catch (error) {
            console.log('An error occurred:', error);
            onCategoriesActionFailed(error);
        }
    };
};
export default CategoriesAction;
