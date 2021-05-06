import React from 'react';
import { View, Text, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryZoomContainer } from 'victory-native';

//Compoenet
import { Button } from '../../../components';

//Styles and Icons
import styles from './styles';
import Colors from '../../../../assets/colors';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const {width} = Dimensions.get('window');

const data = [
  { day: 0, earnings: 100 },
  { day: 1, earnings: 90 },
  { day: 2, earnings: 20 },
  { day: 3, earnings: 62 },
  { day: 4, earnings: 63 },
  { day: 5, earnings: 55 },
  { day: 6, earnings: 85 },
  { day: 7, earnings: 56 },
  { day: 8, earnings: 55 },
  { day: 9, earnings: 60 },
  { day: 10, earnings: 70 },
  { day: 11, earnings: 50 },
  { day: 12, earnings: 50 },
  { day: 13, earnings: 40 },
  { day: 14, earnings: 30 },
  { day: 15, earnings: 20 },
  { day: 16, earnings: 9 },
];

const TotalsContainer = ({total, title, icon, iconTitle}) =>
{
  return (
    <View
      style={styles.containerForTotals}>
      {iconTitle
       ? (<View
            style={styles.iconAndTitleiconContainer}>
              {icon}
              <Text
                style={styles.iconTitle}>{iconTitle}</Text>
          </View>)
       : icon}
      <View
        style={styles.totalsQuantityAndTitle}>
          <Text
            style={styles.quantityText}>{total}</Text>
          <Text
            style={styles.titleTotals}>{title}</Text>

      </View>
    </View>
  );
};
const Dashboard = () => {
    return (
        <SafeAreaView
          style={styles.dashboardContainer}>
            <View
              style={styles.innerDashboardContainer}>
                <View
                  style={styles.calendarContainer}>
                    <Text
                      style={styles.titleMonth}>النسب الشهرية</Text>
                    <Button
                      styleButton={styles.calendarButton}
                      children={<FontAwesome5
                                   name="calendar-alt"
                                   size={18} />} />
                </View>
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={styles.totalsContainer} >
                    <TotalsContainer
                      total="1000"
                      title="عملية شراء"
                      icon={<FontAwesome5
                              name="shopping-cart"
                              size={18}
                              color={Colors.fernGreen}
                              style={styles.icon} />} />
                    <TotalsContainer
                      iconTitle="الشهر هذا"
                      total="5500"
                      title="شيكل"
                      icon={
                        <FontAwesome5
                          name="dollar-sign"
                          size={18}
                          color={Colors.balck}
                          style={styles.iconIconTitle} />
                      } />
                    <TotalsContainer
                      total="55"
                      title="شخص"
                      icon={<MaterialIcons
                              name="favorite"
                              size={22}
                              color={Colors.carnation}
                              style={styles.icon} />} />
                    <TotalsContainer
                      total="550"
                      title="تقيم"
                      icon={<MaterialIcons
                              name="star"
                              size={22}
                              color={Colors.texasRose}
                              style={styles.icon} />} />
                </ScrollView>
                <View
                  style={styles.chartContainer}>
                    <Text
                    style={styles.chartTitle}>ارتفاع الارباح</Text>
                    <VictoryChart
                      containerComponent={
                        <VictoryZoomContainer
                          zoomDomain={{x: [0, 15], y: [0, 100]}} />}
                      width={width}
                      maxDomain={{x: 12}}
                      theme={VictoryTheme.material}>
                        <VictoryBar
                          data={data}
                          cornerRadius={{top: 8}}
                          animate={{
                            duration: 2000,
                            onLoad: { duration: 1000 },
                          }}
                          alignment="start"
                          x="day"
                          y="earnings"
                          barWidth={15}
                          width={width}
                          style={{data:{ fill: 'green'}, parent:{bottom:20}}} />
                    </VictoryChart>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Dashboard;
