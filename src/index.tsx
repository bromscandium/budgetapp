import {registerRootComponent} from "expo";
import React from "react";
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {store} from './state/store'
import MainNavigator from "@/src/presentation/routes/routes";

const Root = () => (
    <Provider store={store}>
        <SafeAreaProvider>
            <NavigationContainer>
                <MainNavigator />
            </NavigationContainer>
        </SafeAreaProvider>
    </Provider>
);

registerRootComponent(Root);