import axios from 'axios';
import { LOGIN_FAILED, LOGIN_STATE, LOGIN_SUCCESS } from './ActionsTypes';
import api from '../../Api';
import AsyncStorage from '@react-native-async-storage/async-storage';
const onLoginActionsState = () =>
{
    return {
        type: LOGIN_STATE,
    };
};
const onLoginActionsSuccess = (data) =>
{
    AsyncStorage.setItem('data_token', JSON.stringify(data.jwt));
    return {
        type: LOGIN_SUCCESS,
        payload: data,
    };
};
const onLoginActionsFailed = (error) =>
{
    return {
        type: LOGIN_FAILED,
        error: error,
    };
};
// const handleResponse = (dispatch, data) => {
//     if (!data.data) {
//       onLoginActionsSuccess(dispatch, data);
//     } else {
//         onLoginActionsFailed(dispatch, data.data);
//     }
// }
const LoginActions = (email, password) =>
{
    const parms = new FormData();
    parms.append('identifier', email);
    parms.append('password', password);

    return async (dispatch) =>
    {
        dispatch(onLoginActionsState());
        try
        {
           const {data} = await axios.post(api + 'auth/local', parms);
           console.log('sdsd',data.jwt);
        //    handleResponse(dispatch,data)
           dispatch(onLoginActionsSuccess(data));
        } catch (error) {
            dispatch(onLoginActionsFailed(error));
            // console.log('An error occurred:', error);
        }
    }
};
export default LoginActions;
