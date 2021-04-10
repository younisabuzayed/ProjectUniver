import { PROFILE_FAILED, PROFILE_STATE, PROFILE_SUCCESS } from '../actions/ActionsTypes';

const initialState =
{
    profile: null,
    error: '',
    isLoading: false,
};

const ProfileReducer = (state = initialState, action) =>
{
    switch (action.type)
    {
        case PROFILE_STATE:
            return {
                ...state,
                isLoading: true,
            };
        case PROFILE_SUCCESS:
            return {
                ...state,
                profile: action.payload,
                isLoading: false,
            };
        case PROFILE_FAILED:
            return {
                ...state,
                error: action.error,
                isLoading: false,
            };
        default: return state;
    }
};

export default ProfileReducer;
