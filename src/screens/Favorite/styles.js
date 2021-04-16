import {PixelRatio, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    favoriteContainer:
    {
        flex: 1,
        paddingTop: PixelRatio.get() === 3 ? 80 : 60,
    },
    itemProductsContainer:
    {
        justifyContent:'center',
        alignItems: 'center',
    },
    columnWrapperStyle:
    {
        marginRight: 6,
        marginLeft: 6,
    },
});

export default styles;
