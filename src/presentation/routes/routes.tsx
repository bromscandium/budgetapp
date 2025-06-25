import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CategoryModificationScreen from "@/src/presentation/screens/CategoryModification";
import ListScreen from "@/src/presentation/screens/List";
import ReceiptScreen from "@/src/presentation/screens/Receipt";
import StatsScreen from '@/src/presentation//screens/Stats';
import SettingsScreen from "@/src/presentation/screens/Settings";
import ThemeChoosingScreen from "@/src/presentation/screens/ThemeChoosing";

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
    return (
        <Stack.Navigator initialRouteName="Stats" screenOptions={{headerShown: false}}>
            <Stack.Screen name="CategoryModification" component={CategoryModificationScreen}/>
            <Stack.Screen name="List" component={ListScreen}/>
            <Stack.Screen name="Receipt" component={ReceiptScreen}/>
            <Stack.Screen name="Stats" component={StatsScreen}/>
            <Stack.Screen name="Settings" component={SettingsScreen}/>
            <Stack.Screen name="ThemeChoosing" component={ThemeChoosingScreen}/>
        </Stack.Navigator>
    );
}
