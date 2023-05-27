import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Dompetku from '../pages/dompetku';
import Home from '../pages/home';
import AddDompetForm from '../component/forms/add_dompet_form';
import { createStackNavigator } from '@react-navigation/stack';
import HomeNavigator from './HomeStack';
import DompetKuStack from './DompetkuStack';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    
  return (
    <NavigationContainer>
        <Tab.Navigator
            screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
                let iconName;

                if (route.name === 'Home') {
                iconName = focused
                    ? require('../../assets/HomeFocused.png')
                    : require('../../assets/HomeNotFocused.png');
                } else if (route.name === 'Dompetku') {
                iconName = focused
                    ? require('../../assets/DompetkuFocused.png')
                    : require('../../assets/DompetkuNotFocused.png');
                }
                return (
                <Image source={iconName} style={{width: size, height: size}} />
                );
            },
            })}>
            <Tab.Screen name="Home" component={HomeNavigator} options={{ headerShown: false }}/>
            <Tab.Screen name="Dompetku" component={DompetKuStack} options={{ headerShown: false }}/>
            {/* <Tab.Screen name="Add Dompet" component={AddDompetForm}/> */}
        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default TabNavigator

const styles = StyleSheet.create({})