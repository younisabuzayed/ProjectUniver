import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    cartContainer:
    {
        flex: 1,
    },
    bodyContainer:
    {
        flex: 3,
    },
    strok:
    {
        borderWidth: 2,
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 8,
        borderColor: 'rgba(112, 112, 112, 0.30)',
    },
    buttomContainer:
    {
        flex: 1,
    },
    totalContainer:
    {
        flexDirection: 'row',
        width: '100%',
        justifyContent:'space-between',
        padding: 10,
    },
    totalText:
    {
        fontSize: 18,
    },
    totalNumber:
    {
        fontSize: 18,
    },
});

export default styles;
