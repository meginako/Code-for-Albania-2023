/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

//  navigator = undefined;

const pls = () => {
    const navigator = useNavigation();

    React.useEffect(() => (
        navigator.navigate('Apply')
    ))
    return (<View></View>);
}
export default pls;