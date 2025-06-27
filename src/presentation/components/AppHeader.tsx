import React from 'react';
import { View, Text, Image } from 'react-native';

const AppHeader = () => {
    return (
        <View className="flex-row items-center justify-between px-6 py-3 bg-panel dark:bg-dark-panel">
            <Text className="text-xxl font-bold text-primary-dark dark:text-primary-light">
                MyBudget
            </Text>
            <Image
                source={require('@/src/assets/images/icon.png')}
                className="w-12 h-12"
                resizeMode="contain"
            />
        </View>
    );
};

export default AppHeader;
