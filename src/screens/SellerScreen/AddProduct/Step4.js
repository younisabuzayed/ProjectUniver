import React from 'react';
import { View, Text, Image } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import { Button } from '../../../components';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../../../assets/colors';

const ImageShow = ({data}) =>
     {
       return (
        data === null
        ? <MaterialIcons
            name="add-a-photo"
            size={25}
            color={'#656565'} />
        : <Image
            source={{uri: data.uri}}
            resizeMode="contain"
            style={styles.imagePickerShow} />
       );
     };
const Step4 = () => {
    const [responsePhotoProduct, setResponsePhotoProduct] = React.useState(null);
    const onPressResponsePhotoProduct = () =>
    {
      ImagePicker.launchImageLibrary(
        {
          mediaType: 'photo',
          includeBase64: false,
          maxHeight: 200,
          maxWidth: 200,
        },
        (response) => {
            setResponsePhotoProduct(response);
        },
      );
    };
    return (
        <View
          style={styles.step4Container} >
            <Text
              style={styles.titlePhotoProduct}>صور المنتج</Text>
            <Button
              styleButton={styles.buttonImagePicker}
              backgroundColor={Colors.white}
              children={<ImageShow
                        data={responsePhotoProduct} />}
              onPress={onPressResponsePhotoProduct} />
        </View>
    );
};

export default Step4;
