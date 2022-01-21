import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';

enableScreens()

import Home from '../screens/home/index'
import Login from '../screens/login/index'

const Stack = createStackNavigator();

const MyStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name='login' component={Login} />
                <Stack.Screen name='home' component={Home} />
            </Stack.Navigator>
        </NavigationContainer>


    );
};

export default (MyStack);