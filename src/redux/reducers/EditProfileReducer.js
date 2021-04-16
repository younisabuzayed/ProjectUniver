import { EDITPROFILE_FAILED, EDITPROFILE_STATE, EDITPROFILE_SUCCESS } from '../actions/ActionsTypes';

const initialState =
{
    editProfile: null,
    error: '',
    isLoading: false,
};

const EidtProfileReducer = (state = initialState, action) =>
{
    switch (action.type)
    {
        case EDITPROFILE_STATE:
            return {
                ...state,
                isLoading: true,
            };
        case EDITPROFILE_SUCCESS:
            return {
                ...state,
                editProfile: action.payload,
                isLoading: false,
            };
        case EDITPROFILE_FAILED:
            return {
                ...state,
                error: action.error,
                isLoading: false,
            };
        default: return state;
    }
};

export default EidtProfileReducer;
