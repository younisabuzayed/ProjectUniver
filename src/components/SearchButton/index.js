import React from 'react';
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import styles from './styles';

const SearchButton = ({onPress}) => {
    return (
        <View
          style={styles.searchButtonContainer} >
            <View
              style={styles.iconVoiceContainer} >
                <TouchableWithoutFeedback
                  onPress={() => alert('Not Avalibale')} >
                    <Image
                      source={require('../../../assets/images/voice.png')}
                      style={styles.iconVoice} />
                </TouchableWithoutFeedback>
            </View>
            <View
            style={styles.button} >
                <TouchableWithoutFeedback
                  onPress={onPress} >
                  <View
                    style={styles.searchIconAndTextContainer} >
                    <Image
                      source={require('../../../assets/images/search.png')}
                      style={styles.iconSearch} />
                    <Text
                      style={styles.searchTitle} >ابحث عن المنتج الذي تريده</Text>
                  </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    );
};

export default SearchButton;
