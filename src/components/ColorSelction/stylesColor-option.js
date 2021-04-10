import {Dimensions, StyleSheet} from 'react-native';
const { width } = Dimensions.get('window');
let scaledWidth = width * 0.025;

const styles = StyleSheet.create({
    colorOption: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 30,
        height: 30,
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 15,
        elevation: 5,
        shadowOffset: { width: 2, height: 2 },
        shadowColor: 'black',
        shadowOpacity: 0.25,
      },
scaleToWindow:
{
    width: width * 0.07,
    height: width * 0.07,
    marginHorizontal: scaledWidth,
    marginVertical: scaledWidth,
    borderRadius: scaledWidth * 2,
},
});

export default styles;
