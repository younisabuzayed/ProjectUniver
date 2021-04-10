import React, { Fragment, Component } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Alert,
  Platform
} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from "expo-permissions";
import * as ImageManipulator from 'expo-image-manipulator';
import _ from 'lodash';

class UpdateImage extends Component {

  _pickImage = async () => {

    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status !== "granted") {
      if (Platform.OS === "ios") {
        Alert.alert('رفع صورة شخصية', 'تم رفع صورة شخصية', [
          {
            text: 'تم',
            onPress: () => this._pickImage()
          },
          'لا'
        ]);
        return;
      }
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images
    });
    if (!result.cancelled) {
      const minifiedImage = await ImageManipulator.manipulateAsync(
          result.uri,
          [{ resize: { width: 300, height: 300} }], { compress: 0.48 });
      this._uploadImageAsync(minifiedImage.uri);
    }
  };
  _uploadImageAsync = uri => {
    const uriParts = uri.split(".");
    const uriExt = uriParts[uriParts.length - 1];
    if (uri && !/(jpg|png|jpeg)$/gi.test(uriExt)) {
      if (uri) {

        Alert.alert('رفع صورة شخصية', 'تم رفع صورة شخصية', [
          {
            text: 'تم',
            onPress: () => this._pickImage()
          },
          'لا'
        ]);
      } else {

        Alert.alert('رفع صورة شخصية', 'تم رفع صورة شخصية', [
          {
            text: 'تم',
            onPress: () => this._pickImage()
          },
          'لا'
        ]);
      }
    } else {
      this.props.setPhoto({
        uri,
        name: `photo.${'ddfdf121212'}.${uriExt}`,
        type: `image/${uriExt}`
      });
    }
  };

  renderImage = () => {
    const {
      props: { image }
    } = this;
    console.log(image, 'image')
    return (<View style={styles.ImageContainer}>
          <Image style={styles.ImageProfile} source={{ uri: image }} />
        </View>);
  };

  render() {
    const {
      props: { loading }
    } = this;
    return (
          <TouchableOpacity onPress={this._pickImage}>
            {this.renderImage()}
            {loading && (
                <ActivityIndicator
                    color={'blue'}
                    style={styles.loading}
                    size="large"
                />
            ) }
          </TouchableOpacity>
    );
  }
}

export default UpdateImage;
const styles = StyleSheet.create({
  ImageContainer: {
    height: 100,
    width: 100,
    borderRadius: 100 / 2,
    borderWidth: 1,
    borderColor: 'white',
    marginRight: 11,
    justifyContent:'center',
    alignItems:'center',
    marginLeft: 11,
    marginBottom: 11,
    alignSelf: 'center'
  },
  ImageProfile: {
    width: '100%',
    height: '100%',
    margin: 10,
    borderRadius: 100 / 2,
    borderWidth: 1,
  },
  loading: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center"
  }
});
