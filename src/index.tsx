import React from "react";
import {registerRootComponent} from "expo";
import {useFonts} from 'expo-font';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import "../global.css"

import {store} from './state/store'
import MainNavigator from "@/src/presentation/routes/routes";

const Root = () => {
    useFonts({
        'SourceSans3-Regular': require('./assets/fonts/SourceSans3-Regular.ttf'),
        'SourceSans3-Bold': require('./assets/fonts/SourceSans3-Bold.ttf'),
        'SourceSans3-SemiBold': require('./assets/fonts/SourceSans3-SemiBold.ttf'),
        'SourceSans3-Medium': require('./assets/fonts/SourceSans3-Medium.ttf'),
        'SourceSans3-Light': require('./assets/fonts/SourceSans3-Light.ttf'),
        'SourceSans3-ExtraLight': require('./assets/fonts/SourceSans3-ExtraLight.ttf'),
        'SourceSans3-ExtraBold': require('./assets/fonts/SourceSans3-ExtraBold.ttf'),
        'SourceSans3-Black': require('./assets/fonts/SourceSans3-Black.ttf'),
    });

    return (
        <Provider store={store}>
            <SafeAreaProvider>
                <NavigationContainer>
                    <MainNavigator />
                </NavigationContainer>
            </SafeAreaProvider>
        </Provider>
    );
};

registerRootComponent(Root);