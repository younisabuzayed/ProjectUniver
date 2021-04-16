import React from 'react';
import { View, Text, Image, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button';
import styles from './styles';

const Access = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView
          style={styles.AccessContainer}>
            <View
              style={styles.HeaderContainer} >
                <Image
                  source={require('../../../assets/images/Iconbasket.png')}
                  style={styles.imageLogo}
                  resizeMode="contain" />
                <Text
                  style={styles.title} >اهلا وسهلا فيك في تطبيقنا</Text>

            </View>
            <View
              style={styles.BodyContainer} >
                <View
                  style={styles.imageBodyContainer} >
                  <Image
                    source={require('../../../assets/images/doorInto.png')}
                    style={styles.imageBody} />
                </View>
                <View
                  style={styles.buttonsContainer} >
                    <Button
                      active
                      title="تسجيل دخول"
                      styleButton={styles.buttonLogin}
                      titleStyle={styles.buttonLoginTitle}
                      onPress={() => navigation.navigate('Login')} />
                    <Button
                      active
                      title="انشاء حساب"
                      styleButton={styles.buttonSignup}
                      titleStyle={styles.buttonSignupTitle}
                      onPress={() => navigation.navigate('Address')} />
                    <Button
                      title="الدخول كزائر"
                      styleButton={styles.guestAccess}
                      titleStyle={styles.guestAccessTitle}
                      onPress={() => navigation.navigate('Main')} />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Access;
