import {Dimensions, StyleSheet} from 'react-native';
const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    slider:
    {
        marginTop: 30,
        alignSelf:'center',
        height: 180,

    },
    imageCarousel:
    {
        width:width - 30,
        height: 180,
        borderRadius: 8,
    },
    PaginationContainer:
    {
        marginTop: 0,
        paddingVertical: 18,
    },
});

export default styles;
