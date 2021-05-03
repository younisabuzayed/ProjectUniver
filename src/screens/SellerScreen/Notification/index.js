import React from 'react';
import { View, Text, SafeAreaView, FlatList } from 'react-native';

//Component
import { Button } from '../../../components';

//Styles and Icons
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const notificationData = [
    {
        id: '1',
        content: 'يوجد لديك طلب غير مسلم  بعد',
    },
    {
        id: '2',
        content: 'يوجد لديك طلب غير مسلم  بعد',
    },
    {
        id: '3',
        content: 'يوجد لديك طلب غير مسلم  بعد',
    },
    {
        id: '4',
        content: 'يوجد لديك طلب غير مسلم  بعد',
    },
];
const Notification = () => {
    const [data, setData] = React.useState(notificationData);
    console.log(data);
    const removeNotification = (el) => {
        let hardCopy = [...data];
        hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
        setData(hardCopy);
      };
    return (
        <SafeAreaView
          style={styles.notificationContainer}>
            {data && data.length > 0 ?
            <View
              style={styles.innerNotificationContainer}>
                <FlatList
                  data={data}
                  keyExtractor={(item) => item.id}
                  renderItem={({item}) =>
                  {
                      return (
                        <View
                          style={styles.notificationButton}>
                            <Text
                              style={styles.titleNotification}>{item.content}</Text>
                            <Button
                              styleButton={styles.closeButton}
                              onPress={() => removeNotification(item)}
                              children={<MaterialIcons
                                          name="close"
                                          size={10} />} />
                        </View>

                      );
                  }} />
            </View>
            : <View
                style={styles.noNotifications}>
                  <Text
                    style={styles.titleNoNotifications}>لا توجد إشعارات</Text>
            </View>}
        </SafeAreaView>
    );
};

export default Notification;
