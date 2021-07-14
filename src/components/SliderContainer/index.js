import React from 'react';
import { Dimensions, Image, View} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import styles from './styles';
import Colors from '../../../assets/colors';
export const {width, height} = Dimensions.get('window');
const ENTRIES1 = [
    {
        illustration: require('../../../assets/images/slider1.png'),
    },
    {
        illustration: require('../../../assets/images/slider2.png'),
    },
    {
        illustration: require('../../../assets/images/slider1.png'),
    },
  ];
const SliderContainer = () =>
    {
        const sliderRef = React.useRef();
        const [activeDot, setActiveDot] = React.useState(0);
        return (
         <>
            <View
              style={styles.slider} >
             <Carousel
               ref={sliderRef}
               data={ENTRIES1}
               itemWidth={width - 30}
               sliderWidth={width - 30}
               firstItem={activeDot}
               loop={true}
               autoplay={true}
               renderItem={({item}) =>
               {
                  return (
                      <View>
                        <Image
                          source={item.illustration}
                          style={styles.imageCarousel} />
                      </View>
                  );
               }}
               onSnapToItem={(index) => setActiveDot(index)} />
            </View>
            <Pagination
               dotsLength={ENTRIES1.length}
               activeDotIndex={activeDot}
               inactiveDotStyle={{width: 7}}
               dotColor={Colors.fernGreen}
               dotStyle={{height: 7, width: 25}}
               inactiveDotColor={Colors.gray}
               inactiveDotOpacity={0.4}
               inactiveDotScale={0.6}
               carouselRef={sliderRef}
               tappableDots={!!sliderRef}
               containerStyle={styles.PaginationContainer} />
         </>
        );
    };

export default SliderContainer;
