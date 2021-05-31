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
    activityIndicator:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default styles;
