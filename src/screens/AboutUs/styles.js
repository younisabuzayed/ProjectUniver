import { PixelRatio, StyleSheet} from 'react-native';
import Colors from '../../../assets/colors';
import Fonts from '../../../assets/fonts';

const styles = StyleSheet.create({
    aboutusContainer:
    {
        flex: 1,
        backgroundColor: Colors.white,
        paddingTop: PixelRatio.get() === 3 ? 80 : 60,
    },
    descriptionContainer:
    {
        paddingTop: 60,
        paddingLeft: 25,
        paddingRight: 25,
    },
    descriptionTitle:
    {
        fontSize: 18,
        fontFamily: Fonts.Cairo_Bold,
        color: Colors.fernGreen,
        writingDirection: 'rtl',
    },
    descriptionText:
    {
        fontSize: 14,
        fontFamily: Fonts.Cairo_Regular,
        color: Colors.balck,
        writingDirection: 'rtl',
        width: 292,
        textAlign: 'left',
        marginTop: 17,
    },
    AccordionContainer:
    {
    },
    headerTerms:
    {
        backgroundColor: Colors.wildSand,
        height: 50,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginLeft: 15,
        marginRight: 15,
        paddingLeft: 20,
        paddingRight: 20,
    },
    headerTextTerms:
    {
        fontSize: 14,
        fontFamily: Fonts.Cairo_Bold,
        color: Colors.titleProduct,
        writingDirection: 'rtl',
    },
    contentTerms:
    {
        backgroundColor: Colors.wildSand,
        marginLeft: 15,
        marginRight: 15,
        paddingLeft: 10,
        paddingRight: 10,
    },
    contentTextTerms:
    {
        fontSize: 14,
        fontFamily: Fonts.Cairo_Regular,
        color: Colors.contentText,
        writingDirection: 'rtl',
    },
    sectionContentContainer:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    sectionContent:
    {
        writingDirection: 'rtl',
        fontFamily: Fonts.Cairo_Regular,
        textAlign:'left',
    },
    iconContainer:
    {
        justifyContent:'center',
        alignItems: 'center',
        width: 30,
    },
    iconNameText:
    {
        fontSize: 9,
        color: Colors.fernGreen,
    },
});

export default styles;
