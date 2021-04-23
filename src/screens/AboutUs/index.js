import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Animated } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import * as Animatable from 'react-native-animatable';

//Styles and Icons
import styles from './styles';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
const BACON_IPSUM =
  'Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs. Picanha beef prosciutto meatball turkey shoulder shank salami cupim doner jowl pork belly cow. Chicken shankle rump swine tail frankfurter meatloaf ground round flank ham hock tongue shank andouille boudin brisket. ';

const CONTENT = [
  {
    title: 'آلية العمل',
    content: BACON_IPSUM,
  },
  {
    title: 'شروط العمل',
    content: BACON_IPSUM,
  },
  {
    title: 'شروط الارجاع',
    content: BACON_IPSUM,
  },
];

const description = 'تطبيق  لبيع المنتجات التي عليها عروض وخصومات وهو مشروع تخرج شباب جامعي قاموا بتكوين فريق لانجاز المشروع تم انشاءه في سنة 2021';
const AboutUs = () => {
  const [activeSections, setActiveSections] = React.useState([]);
  const setSections = sections => {
    setActiveSections(sections);
  };
  const renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={styles.headerTerms} >
        <Text style={styles.headerTextTerms}>{section.title}</Text>
        <SimpleLineIcons name={isActive ? 'arrow-down' : 'arrow-up'} />
      </Animatable.View>
    );
  };

  const renderContent = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={styles.contentTerms}>
        <Animatable.Text
          animation={isActive ? 'bounceIn' : undefined}
          style={styles.contentTextTerms}>
          {section.content}
        </Animatable.Text>
      </Animatable.View>
    );
  }
    return (
        <SafeAreaView
          style={styles.aboutusContainer}>
            <View
             style={styles.descriptionContainer}>
                <Text
                  style={styles.descriptionTitle}>تطبيق سلة</Text>
                <Text
                  style={styles.descriptionText}>{description}</Text>
            </View>
            <Accordion
              activeSections={activeSections}
              sections={CONTENT}
              touchableComponent={TouchableOpacity}
              renderHeader={renderHeader}
              renderContent={renderContent}
              duration={400}
              onChange={setSections} />
        </SafeAreaView>
    );
};

export default AboutUs;
