import React, {useEffect} from 'react';
import {ScrollView} from 'react-native';
import {useAppDispatch} from '@/src/state/hooks';
import {fetchReceiptsFromApi} from '@/src/state/slice/receipt.slice';
import StatsSummaryCard from '@/src/presentation/components/StatsSummaryCard';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppHeader from "@/src/presentation/components/AppHeader";

export default function StatsScreen() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchReceiptsFromApi());
    }, [dispatch]);

    return (
        <SafeAreaView className="flex-1 bg-white dark:bg-dark-background">
            <AppHeader />
            <ScrollView className="px-6">
                <StatsSummaryCard/>
            </ScrollView>
        </SafeAreaView>
    );
}
