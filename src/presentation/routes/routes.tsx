import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import StatsScreen from '../screens/Stats';

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
    return (
        <Stack.Navigator initialRouteName="Stats" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Stats" component={StatsScreen}/>
        </Stack.Navigator>
    );
}
