import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import ScreenNames from './ScreenNames';
import SplashScreen from '../screens/SplashScreen';
import IntroductionScreen from '../screens/IntroductionScreen';
import FaceUploadScreen from '../screens/FaceUploadScreen';
import SuccessScreen from '../screens/SuccessScreen';
import {NavigationRef} from './RouterServices';
import HomeScreen from '../screens/HomeScreen';
import ProductDetails from '../screens/HomeScreen/ProductDetails';
const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer ref={NavigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
        }}
        initialRouteName={ScreenNames.SplashScreen}>
        <Stack.Screen
          name={ScreenNames.SplashScreen}
          component={SplashScreen}
        />
        <Stack.Screen
          name={ScreenNames.IntroductionScreen}
          component={IntroductionScreen}
        />
        <Stack.Screen
          name={ScreenNames.FaceUploadScreen}
          component={FaceUploadScreen}
        />

        <Stack.Screen
          name={ScreenNames.SuccessScreen}
          component={SuccessScreen}
        />
        <Stack.Screen name={ScreenNames.HomeScreen} component={HomeScreen} />
        <Stack.Screen
          name={ScreenNames.ProductDetails}
          component={ProductDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
