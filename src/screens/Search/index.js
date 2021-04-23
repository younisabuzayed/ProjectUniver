/* eslint-disable no-alert */
import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
//Components
import { Button } from '../../components';
//Styles and Icons
import styles, { height } from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Colors from '../../../assets/colors';

const Search = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    const [more, setMore] = React.useState(false);
    const navigation = useNavigation();
    return (
        <SafeAreaView
          style={styles.searchContainer}>
            <View
              style={styles.headerSearch} >
                <TouchableOpacity
                  style={styles.buttonBack}
                  onPress={() => navigation.goBack()} >
                    <Ionicons
                      name="arrow-forward"
                      size={25}
                      color="#AFAFAF" />
                </TouchableOpacity>
                <View
                  style={styles.searchbarAndVioceContainer}>
                    <Searchbar
                      placeholder="ابحث عن المنتج الذي تريده"
                      onChangeText={onChangeSearch}
                      value={searchQuery}
                      style={styles.searchbar}
                      inputStyle={styles.textInput}
                      clearIcon={<Ionicons name="search" size={10}  style={{transform: [{rotateY: '180deg'}]}}/>} />
                    <View
                      style={styles.iconVoiceContainer} >
                        <TouchableWithoutFeedback
                          onPress={() => alert('Not Avalibale')} >
                            <FontAwesome
                              name="microphone"
                              color="#8E8E93"
                              size={20} />
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </View>
            <View
              style={[styles.historyByResearchContainer,more && {height: height / 4}]} >
                <Button
                  title="المزيد"
                  onPress={() => setMore(!more)}
                  children={<SimpleLineIcons
                              name={more ? 'arrow-down' : 'arrow-up'}
                              size={13}
                              color={Colors.more} />}
                  styleButton={styles.moreButton}
                  titleStyle={styles.moreText} />
                <View
                  style={styles.historySearch} >
                    <Text
                      style={styles.titleHistory} >جاكيت رجالي </Text>
                    <TouchableOpacity>
                      <Ionicons
                        name="ios-close-sharp"
                        size={20}
                        color="#C2C2C2" />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Search;

