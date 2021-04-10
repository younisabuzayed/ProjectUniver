import React from 'react';
import {TouchableOpacity, Image } from 'react-native';
import styles from './styles';

const EyeShow = ({onPress, name}) =>
{
    const EyeIcon = () =>
    {
        if (name === 'show')
        {
        return (
            <Image
            source={require('../../../assets/images/iconEye.png')}
            style={styles.iconEyeButton} />
        );}
        if (name === 'hide')
        {
        return (
            <Image
            source={require('../../../assets/images/iconEye.png')}
            style={styles.iconEyeButton} />
            );}
        };
    return (
    <TouchableOpacity
        onPress={onPress}>
        <EyeIcon />
    </TouchableOpacity>
    );
};

export default EyeShow;

