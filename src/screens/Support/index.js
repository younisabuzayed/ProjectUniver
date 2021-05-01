import React from 'react';
import { View, Text } from 'react-native';
import { Selection } from '../../components';
import styles from './styles';

const Support = () => {
    const [supportSelection, setSupportSelection] = React.useState('');
    return (
        <View
          style={styles.selectionContainer}>
            <Text
              style={styles.supportText}>
                {`اذا  واجهتك مشاكل في  التطبيق 
يجيب عليك تحديد المشكلة وكتابة التفاصيل المشكلة `}
            </Text>
            <Selection
              items={['مشكلة تقنية', 'مشكلة عدم استلام','مشكلة منتجات','مشكلة عند التسليم']}
              styleButton={styles.buttonSelection}
              style={styles.selection}
              onChange={(support) => setSupportSelection(support)} />
        </View>
    );
};

export default Support;
