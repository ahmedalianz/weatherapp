import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {theme} from './app/constants';
import {
  CityDetailsScreen,
  CityHistoricalScreen,
  CityListScreen,
} from './app/screens';
import {store} from './app/store';

const Stack = createStackNavigator();

const App = () => {
  return (
    <GestureHandlerRootView>
      <Provider store={store}>
        <SafeAreaProvider>
          <StatusBar backgroundColor={theme.colors.primary} translucent />
          <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
              <Stack.Screen name="CityList" component={CityListScreen} />
              <Stack.Screen name="CityDetails" component={CityDetailsScreen} />
              <Stack.Screen
                name="CityHistorical"
                component={CityHistoricalScreen}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
