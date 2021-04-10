import { SIGNUP_FAILED, SIGNUP_STATE, SIGNUP_SUCCESS } from '../actions/ActionsTypes';

const initialState =
{
    user: null,
    error: '',
    isLoading: false,
};

const SignupReducer = (state = initialState, action) =>
{
    switch (action.type)
    {
        case SIGNUP_STATE:
            return {
                ...state,
                isLoading: true,
            };
        case SIGNUP_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isLoading: false,
            };
        case SIGNUP_FAILED:
            return {
                ...state,
                error: action.error,
                isLoading: false,
            };
        default: return state;
    }
};

export default SignupReducer;
