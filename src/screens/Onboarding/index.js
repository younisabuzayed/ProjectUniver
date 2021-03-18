/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  Animated,
  Dimensions,
  StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button';
import styles from './styles';
import Colors from '../../../assets/colors';
const {width, height} = Dimensions.get('window');
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const DATA = [
  {
    'key': '3571572',
    'feature':'الميزة الاولى',
    'title': 'أسعار منافسة',
    'description': 'نوفر في تطبيقنا أسعار منافسة ومناسبة لكم على منتجاتنا المتوفرة في تطبيقنا بأصناف متنوعة التي عليها عروض وخصومات في السوق ',
    'image': require('../../../assets/images/featureOne.png'),
  },
  {
    'key': '3571747',
    'feature':'الميزة الثانية',
    'title': 'سرعة التوصيل',
    'description': 'سوف نوصل الك طلبك أينما كنت ضمن منطقة عملنا بسرعة وسهولة عالية',
    'image': require('../../../assets/images/featureTwo.png'),
  },
  {
    'key': '3571680',
    'feature':'الميزة الثالثة',
    'title': 'الأمان والموثوقية',
    'description': 'نوفر في تطبيقنا للمستخدم الأمان والموثوقية العالية والحفاظ على خصوصياته',
    'image': require('../../../assets/images/featureThree.png'),
  },
];
const Indicator = ({scrollX}) =>
{
    return (
        <View
          style={{
              flexDirection: 'row',
          }} >
            {DATA.map((_, i) =>{
                const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
                const scale = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.8, 1.4, 0.8],
                    extrapolate: 'clamp',
                });
                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.5, 1, 0.5],
                    extrapolate: 'clamp',
                });
                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [10, 25, 10],
                    extrapolate: 'clamp',
                });
                return (
                    <Animated.View
                      key={`indicator-${i}`}
                      style={[{
                          height: 4,
                          width: 18,
                          borderRadius: 5,
                          backgroundColor: Colors.fernGreen,
                          margin: 10,
                          transform:[{scale}],
                          opacity},{width: dotWidth, height: 5}]} />
                );
            })}
        </View>
    );
};

const Onboarding = () => {
    const [counter, setCounter] = React.useState(0);
    const scrollX = React.useRef(new Animated.Value(0)).current;
    const ref = React.useRef();
    const navigation = useNavigation();
    const onPressButtonNext = () =>
    {

        ref.current?.scrollToIndex({index: counter + 1, animated: true});
        setCounter(counter + 1);
    };
    const onPressButtonPrev = () =>
    {
        ref.current?.scrollToIndex({index: counter - 1, animated: true});
        setCounter(counter - 1);
    };
    return (
        <View
          style={styles.container}>
            {/* <Backdrop scrollX ={scrollX} /> */}
            {/* <Square scrollX={scrollX} /> */}
            <Animated.FlatList
              ref={ref}
              data={DATA}
              horizontal
              inverted
              pagingEnabled
              scrollEventThrottle={32}
              onScroll={Animated.event(
                  [{nativeEvent: {contentOffset: {x: scrollX}}}],
                  {useNativeDriver: false}
              )}
              showsHorizontalScrollIndicator={false}
              style={styles.FlatListContainer}
              keyExtractor={(item) => item.key}
              renderItem={({item}) => {
                  return (
                      <View
                        style={styles.viewOnboard} >
                        <View
                          style={styles.titleAndBack}>
                        <View
                          style={{flex: 1}}>
                            <Text
                              style={styles.titleOnboard}>{item.feature}</Text>
                        </View>
                        </View>
                         <View
                           style={styles.viewImagesOnboard} >
                            <Image
                              source={item.image}
                              style={styles.imageOnboard}
                              resizeMode="contain" />
                         </View>
                         <View
                           style={styles.viewTextOnboard}>
                             <Text
                               style={styles.titleOnboard}>{item.title}</Text>
                             <Text
                               style={styles.descriptionOnboard}>{item.description}</Text>
                         </View>
                      </View>
                  );
              }} />
            <View
              style={styles.nextContainer} >
              <View>
                  <Indicator scrollX={scrollX} />
              </View>
              {counter >= 0 && counter <= 1
              ? <Button
                  title="التالي"
                  active
                  backgroundColor={Colors.fernGreen}
                  onPress={onPressButtonNext}
                  styleButton={styles.nextButton}
                  titleStyle={styles.nextButtonTitle} />
              : <Button
                  title="ابدا"
                  active
                  onPress={() => navigation.navigate('Access')}
                  backgroundColor={Colors.fernGreen}
                  styleButton={styles.nextButton}
                  titleStyle={styles.nextButtonTitle} />}
            </View>
        </View>
    );
};

export default Onboarding;
