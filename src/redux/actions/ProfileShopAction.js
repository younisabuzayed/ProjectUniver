import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import api from '../../Api';
import { PROFILESHOP_FAILED, PROFILESHOP_STATE, PROFILESHOP_SUCCESS } from './ActionsTypes';

const onProfileActionState = () =>
{
    return {
        type: PROFILESHOP_STATE,
    };
};
const onProfileActionSuccess = (data) =>
{
    return {
        type: PROFILESHOP_SUCCESS,
        payload: data,
    };
};
const onProfileActionFailed = (error) =>
{
    return {
        type: PROFILESHOP_FAILED,
        payload: error,
    };
};

const ProfileShopAction = () =>
{

    return async (dispatch) =>
   {
       dispatch(onProfileActionState);
       try {
           const {data} = await axios.get(api + 'sellers',{
            headers: {
                'Accept': 'application/json'
               }
           });
           dispatch(onProfileActionSuccess(data));
       } catch (error) {
        console.log('An error occurred:', error);
        dispatch(onProfileActionFailed(error));
       }
   };
};
export default ProfileShopAction;
