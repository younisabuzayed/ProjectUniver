import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

//Compoenet
import { Button } from '../../../components';

//Styles and Icons
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';

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
            </View>
        </SafeAreaView>
    );
};

export default Dashboard;
