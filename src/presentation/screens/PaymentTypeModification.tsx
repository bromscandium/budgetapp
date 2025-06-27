import React from 'react';
import {Text, ScrollView} from 'react-native';
import AppHeader from "@/src/presentation/components/AppHeader";
import {SafeAreaView} from "react-native-safe-area-context";

export default function PaymentTypeModificationScreen() {
    return (
        <SafeAreaView className="flex-1 bg-white dark:bg-dark-background">
            <AppHeader />
            <ScrollView className="px-6">
                <Text className="text-2xl font-bold text-black dark:text-white">
                    PaymentTypeModification
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
}
