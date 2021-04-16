import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import api from '../../Api';
import { EDITPROFILE_FAILED, EDITPROFILE_STATE, EDITPROFILE_SUCCESS } from './ActionsTypes';

const onProfileActionState = () =>
{
    return {
        type: EDITPROFILE_STATE,
    };
};
const onProfileActionSuccess = (data) =>
{
    return {
        type: EDITPROFILE_SUCCESS,
        payload: data,
    };
};
const onProfileActionFailed = (error) =>
{
    return {
        type: EDITPROFILE_FAILED,
        payload: error,
    };
};

const EditProfileAction = (profile_image) =>
{

    return async (dispatch) =>
   {
       dispatch(onProfileActionState);
       let filename = profile_image.split('/').pop();
      let match = /\.(\w+)$/.exec(filename);
      let types = match ? `image/${match[1]}` : 'image';
      let formData = new FormData();
       formData.append('profile_image', { uri: profile_image, name: filename, type: types });
       try {
            const jsonValue = await AsyncStorage.getItem('data_token');
           const {data} = await axios.put(api + 'users/edit_profile',formData,{
               headers: {
                Authorization: `Bearer ${jsonValue != null && JSON.parse(jsonValue)}`,
               },
           });
           dispatch(onProfileActionSuccess(data));
       } catch (error) {
        console.log('An error occurred:', error.response);
        dispatch(onProfileActionFailed(error));
       }
   };
};
export default EditProfileAction;
