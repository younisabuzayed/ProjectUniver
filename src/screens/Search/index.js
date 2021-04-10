import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const Search = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    const navigation = useNavigation();
    return (
        <View
          style={styles.searchContainer}>
            <View
              style={styles.headerSearch} >
            <TouchableOpacity
              style={styles.buttonBack}
              onPress={() => navigation.goBack()} >
                <Ionicons
                  name="arrow-forward"
                  size={25} />
            </TouchableOpacity>
            <Searchbar
              placeholder="ابحث عن المنتج الذي تريده"
              onChangeText={onChangeSearch}
              value={searchQuery}
              style={styles.searchbar}
              inputStyle={styles.textInput}
              clearIcon={<Ionicons name="search" size={10}  style={{transform: [{rotateY: '180deg'}]}}/>} />
            </View>
            <View
              style={styles.historyByResearchContainer}>

            </View>
        </View>
    );
};

export default Search;

