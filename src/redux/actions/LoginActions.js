import axios from 'axios';
import { LOGIN_FAILED, LOGIN_STATE, LOGIN_SUCCESS } from './ActionsTypes';
import api from '../../Api';
const onLoginActionsState = () =>
{
    return {
        type: LOGIN_STATE,
    };
};
const onLoginActionsSuccess = (data) =>
{
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
const handleResponse = (dispatch, data) => {
    if (!data.data) {
      onLoginActionsSuccess(dispatch, data);
    } else {
        onLoginActionsFailed(dispatch, data.data)
    }
}
const LoginActions = (email, password) =>
{
    console.log(email, password);
    const parms = new FormData();
    parms.append('identifier', email);
    parms.append('password', password);
    console.log('sdsds',parms);

    return async (dispatch) =>
    {
        dispatch(onLoginActionsState());
        try
        {
           const {data} = await axios.post(api + 'auth/local', parms);
           console.log('sdsd',data.jwt);
           handleResponse(dispatch,data);
           dispatch(onLoginActionsSuccess(data));
        } catch (error) {
            console.log('An error occurred:', error);
        }
    }
};
export default LoginActions;
