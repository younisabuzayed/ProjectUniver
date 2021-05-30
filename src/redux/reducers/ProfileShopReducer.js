import { PROFILESHOP_FAILED, PROFILESHOP_STATE, PROFILESHOP_SUCCESS } from '../actions/ActionsTypes';

const initialState =
{
    profileShop: null,
    error: '',
    isLoading: false,
};

const ProfileShopReducer = (state = initialState, action) =>
{
    switch (action.type)
    {
        case PROFILESHOP_STATE:
            return {
                ...state,
                isLoading: true,
            };
        case PROFILESHOP_SUCCESS:
            return {
                ...state,
                profileShop: action.payload,
                isLoading: false,
            };
        case PROFILESHOP_FAILED:
            return {
                ...state,
                error: action.error,
                isLoading: false,
            };
        default: return state;
    }
};

export default ProfileShopReducer;
