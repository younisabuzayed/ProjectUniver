import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import api from '../../Api';
import { PRODUCTS_STATE, PROFILE_FAILED, PROFILE_SUCCESS } from './ActionsTypes';

const onProfileActionState = () =>
{
    return {
        type: PRODUCTS_STATE,
    };
};
const onProfileActionSuccess = (data) =>
{
    return {
        type: PROFILE_SUCCESS,
        payload: data,
    };
};
const onProfileActionFailed = (error) =>
{
    return {
        type: PROFILE_FAILED,
        payload: error,
    };
};

const ProfileAction = () =>
{

    return async (dispatch) =>
   {
       dispatch(onProfileActionState);
       try {
            const jsonValue = await AsyncStorage.getItem('data_token');
           const {data} = await axios.get(api + 'users/me',{
               headers: {
                Authorization: `Bearer ${jsonValue != null && JSON.parse(jsonValue)}`,
               },
           });
           dispatch(onProfileActionSuccess(data));
       } catch (error) {
        console.log('An error occurred:', error);
        dispatch(onProfileActionFailed(error));
       }
   };
};
export default ProfileAction;
