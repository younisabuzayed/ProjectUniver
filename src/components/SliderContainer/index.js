import React from 'react';
import { Dimensions, Image, Text, View} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import styles from './styles';
import Colors from '../../../assets/colors';
export const {width, height} = Dimensions.get('window');
const ENTRIES1 = [
  {
      title: 'Beautiful and dramatic Antelope Canyon',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
      illustration: 'https://i.imgur.com/UYiroysl.jpg',
  },
  {
      title: 'Earlier this morning, NYC',
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
  },
  {
      title: 'White Pocket Sunset',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
      illustration: 'https://i.imgur.com/MABUbpDl.jpg',
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
                          source={{uri: item.illustration}}
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
