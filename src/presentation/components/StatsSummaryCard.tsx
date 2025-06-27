import React, { useMemo, useCallback } from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '@/src/state/store';

const StatsSummaryCard = () => {
    const receipts = useSelector((state: RootState) => state.receipt.receipts);
    const currencies = useSelector((state: RootState) => state.currency.currency);
    const settings = useSelector((state: RootState) => state.settings.settings);

    const defaultCurrency = useMemo(() => {
        if (!settings?.length) return undefined;
        return currencies.find(c => c.id === settings[0]?.currencyId);
    }, [currencies, settings]);

    const getRate = useCallback((currencyId: number): number => {
        const currency = currencies.find(c => c.id === currencyId);
        return currency?.rateToEur ?? 1;
    }, [currencies]);

    const { income, expenses, balance } = useMemo(() => {
        let income = 0;
        let expenses = 0;

        if (!defaultCurrency) return { income, expenses, balance: 0 };

        receipts.forEach((receipt) => {
            const fromRate = getRate(receipt.currencyId);
            const toRate = getRate(defaultCurrency.id);
            const converted = (receipt.amount / fromRate) * toRate;

            if (receipt.typeId === 1) {
                income += converted;
            } else {
                expenses += converted;
            }
        });

        const balance = income - expenses;
        return { income, expenses, balance };
    }, [receipts, getRate, defaultCurrency]);

    return (
        <View className="bg-card dark:bg-dark-card p-4 rounded-2xl shadow-md mb-4">
            <Text className="text-xl font-semibold text-text dark:text-dark-text mb-2">
                Balance
            </Text>
            <Text className="text-xxl font-bold text-success dark:text-success">
                {balance.toFixed(2)} {defaultCurrency?.title}
            </Text>
            <Text className="text-base text-muted mt-1">
                Income: {income.toFixed(2)} | Expenses: {expenses.toFixed(2)} {defaultCurrency?.title}
            </Text>
        </View>
    );
};

export default StatsSummaryCard;
