import React from 'react';
import { View, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import * as Animatable from 'react-native-animatable';

//Styles and Icons
import styles from './styles';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../../../assets/colors';

const CONTENT = [
  {
    title: 'آلية العمل',
    content: [
      {
        id: '1',
        rule: 'بعد تحميل التطبيق من المتجر',
        icon: null,
      },
      {
        id: '2',
        rule: 'تقوم بتسجيل الدخول  او الدخول اذا كنت مسجل وممكن تدخل التطبيق كزائر',
        icon: null,
      },
      {
        id: '3',
        rule: 'من القائمة المنسدلة تنشأ حساب تاجر جديد',
        icon: 'menu',
      },
      {
        id: '4',
        rule: 'تقوم بإدخال بيانات المطلوبة لقبول حساب متجرك',
        icon: null,
      },
      {
        id: '5',
        rule: 'ممكن اختيار الطلبات القديمة والجديدة من خلال',
        icon: 'clipboard-list',
        iconName: 'الطلبات',
      },
      {
        id: '6',
        rule: 'ممكن اختار الملف الشخصي لبيانات متجرك',
        icon: 'person',
        iconName: 'صفحتي',
      },
      {
        id: '7',
        rule: 'ممكن تغير لغة التطبيق من خلال',
        icon: 'language',
      },
      {
        id: '8',
        rule: 'ممكن التواصل مع الدعم الفني من خلال',
        icon: 'send',
      },
      {
        id: '9',
        rule: 'ممكن الخروج من التطبيق من خلال',
        icon: 'sign-out-alt',
      },
    ],
  },
  {
    title: 'شروط العمل',
    content: [
      {
        id: '1',
        rule: 'الرجاء عدم التخفي باسمك الشخصي واسم شركتك لانه سوف لا يتم قبول الحساب ',
        icon: null,
      },
      {
        id: '2',
        rule: 'الرجاء  الانتباه للمنتجات واسعارها حتى لا تتسبب بمشاكل',
        icon: null,
      },
      {
        id: '3',
        rule: 'الرجاء الانتباه لتحديد  موقعك بعناية لكي  يستطيع الزبون التعرف عليك ',
        icon: null,
      },
      {
        id: '4',
        rule: 'الرجاء متابعة معلوماتك الشخصية وتحديثها عند  كل جديد في معلوماتك الشخصية',
        icon: null,
      },
      {
        id: '5',
        rule: 'الرجاء وضع الأسعار المنافسة لما في السوق لي يستمر نشر العرض ولكي لا تعرض للمسألة',
        icon: null,
      },
    ],
  },
  {
    title: 'شروط الارجاع',
    content: [
      {
        id: '1',
        rule: 'اذا لم تضع السعر المناسب والمنافس حسب الشروط سوف يتم الغاء المنتج من النشر ',
        icon: null,
      },
      {
        id: '2',
        rule: 'عند التسجيل باسم مستعار سوف لم يتم قبول حسابك ',
        icon: null,
      },
      {
        id: '3',
        rule: 'اذا تم عرض منتجات مضروبة سوف يتم ملاحقتك قانونيا',
        icon: null,
      },
    ],
  },
];

const description = 'تطبيق  لبيع المنتجات التي عليها عروض وخصومات وهو مشروع تخرج شباب جامعي قاموا بتكوين فريق لانجاز المشروع تم انشاءه في سنة 2021';
const AboutUsSeller = () => {
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
      <View
        style={styles.contentTerms}>
          <FlatList
            data={section.content}
            renderItem={({item}) =>
            {
              const iconSize = 15;
              return (
                <View
                  style={styles.sectionContentContainer}>
                    <Text
                      style={styles.sectionContent}>
                        {`${item.id}. ${item.rule}`}</Text>
                    {item.icon !== null
                      && <View
                           style={styles.iconContainer}>
                            {item.icon === 'favorite'
                              && <MaterialIcons
                                    name="favorite"
                                    size={iconSize}
                                    color={Colors.fernGreen}  />}
                            {item.icon === 'clipboard-list'
                              && <FontAwesome5
                                  name="clipboard-list"
                                  size={iconSize}
                                  color={Colors.fernGreen} />}
                            {item.icon === 'shopping-cart'
                              && <FontAwesome5
                                    name="shopping-cart"
                                    size={iconSize}
                                    color={Colors.fernGreen}  />}
                            {item.icon === 'person'
                              && <Ionicons
                                    name="person"
                                    size={iconSize}
                                    color={Colors.fernGreen} />}
                            {item.icon === 'language'
                              && <MaterialIcons
                                    name="language"
                                    size={iconSize}
                                    color={Colors.fernGreen}  />}
                            {item.icon === 'send'
                              && <MaterialIcons
                                    name="send"
                                    size={iconSize}
                                    color={Colors.fernGreen}  />}
                            {item.icon === 'sign-out-alt'
                              && <FontAwesome5
                                    name="sign-out-alt"
                                    size={iconSize}
                                    color={Colors.fernGreen}  />}
                            {item.icon === 'menu'
                              && <MaterialIcons
                                    name="menu"
                                    size={iconSize}
                                    color={Colors.fernGreen}  />}
                            {item.iconName
                              && <Text
                                  style={styles.iconNameText}>
                                    {item.iconName}
                                </Text>}
                        </View>}
                </View>
              );
            }} />
      </View>
    );
  };
    return (
        <View
          style={styles.aboutusContainer}>
            <ScrollView>
            <View
             style={styles.descriptionContainer}>
                <Text
                  style={styles.descriptionTitle}>تطبيق سلة</Text>
                <Text
                  style={styles.descriptionText}>{description}</Text>
            </View>
            <Accordion
              activeSections={activeSections}
              containerStyle={styles.AccordionContainer}
              sections={CONTENT}
              touchableComponent={TouchableOpacity}
              renderHeader={renderHeader}
              renderContent={renderContent}
              duration={400}
              onChange={setSections} />
            </ScrollView>
        </View>
    );
};

export default AboutUsSeller;
