import { LOGIN_FAILED, LOGIN_STATE, LOGIN_SUCCESS } from '../actions/ActionsTypes';

const initialState =
{
    user: null,
    error: '',
    isLoading: false,
};

const LoginReducer = (state = initialState, action) =>
{
    switch (action.type)
    {
        case LOGIN_STATE:
            return {
                ...state,
                isLoading: true,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isLoading: false,
            };
        case LOGIN_FAILED:
            return {
                ...state,
                error: action.error,
                isLoading: false,
            };
        default: return state;
    }
};

export default LoginReducer;
