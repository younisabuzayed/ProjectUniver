import axios from 'axios';
import { SIGNUP_FAILED, SIGNUP_STATE, SIGNUP_SUCCESS } from './ActionsTypes';
import api from '../../Api';
const onSignupActionsState = () =>
{
    return {
        type: SIGNUP_STATE,
    };
};
const onSignupActionsSuccess = (data) =>
{
    return {
        type: SIGNUP_SUCCESS,
        payload: data,
    };
};
const onSignupActionsFailed = (error) =>
{
    return {
        type: SIGNUP_FAILED,
        error: error,
    };
};
const handleResponse = (dispatch, data) => {
    if (!data.data) {
      onSignupActionsSuccess(dispatch, data);
    } else {
        onSignupActionsFailed(dispatch, data.data);
    }
};
const SignupActions = (email, password, phoneNumber) =>
{
    console.log(email, password);
    const parms = new FormData();
    parms.append('email', email);
    parms.append('password', password);
    parms.append('phone_number', phoneNumber);
    console.log('sdsds',parms);

    return async (dispatch) =>
    {
        dispatch(onSignupActionsState());
        try
        {
           const {data} = await axios.post(api + 'auth/local/register', parms);
           handleResponse(dispatch,data);
           console.log('sdsd',data);
        //    dispatch(onLoginActionsSuccess(data));
        } catch (error) {
            console.log('An error occurred:', error);
        }
    };
};
export default SignupActions;
