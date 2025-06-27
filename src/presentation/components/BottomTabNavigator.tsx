import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import StatsScreen from '@/src/presentation/screens/Stats';
import ListScreen from '@/src/presentation/screens/List';
import SettingsScreen from '@/src/presentation/screens/Settings';
import { TouchableOpacity } from 'react-native';


const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
    const insets = useSafeAreaInsets();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                // @ts-ignore
                tabBarButton: (props) => <TouchableOpacity activeOpacity={1} {...props} />,
                tabBarIcon: ({ color, size }) => {
                    let iconName: any;

                    if (route.name === 'Stats') iconName = 'bar-chart';
                    else if (route.name === 'List') iconName = 'list';
                    else if (route.name === 'Settings') iconName = 'settings';

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#177EFE',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                    backgroundColor: '#171717',
                    borderTopWidth: 0,
                    height: 70 + insets.bottom,
                    paddingTop: 5,
                    paddingBottom: insets.bottom + 10,
                },
                tabBarLabelStyle: {
                    fontSize: 16,
                },
            })}
        >
            <Tab.Screen name="Stats" component={StatsScreen} />
            <Tab.Screen name="List" component={ListScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    );
}
