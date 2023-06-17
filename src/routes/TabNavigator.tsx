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
import Calculator from '../component/calculator';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';


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
                    : require('../../assets/Home.png');
                } else if (route.name === 'Dompetku') {
                iconName = focused
                    ? require('../../assets/DompetFocused.png')
                    : require('../../assets/Dompet.png');
                }else if (route.name === 'Calculator'){
                    iconName = focused
                    ? require('../../assets/CalculatorFocused.png')
                    : require('../../assets/Calculator.png')
                }
                return (
                <Image source={iconName} style={{width: size, height: size}} />
                );
            },
            })}>
            <Tab.Screen name="Home" component={HomeNavigator} options={{ headerShown: false }}/>
            <Tab.Screen name="Dompetku" component={DompetKuStack} options={{ headerShown: false }}/>
            <Tab.Screen name="Calculator" component={Calculator}/>
        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default TabNavigator

const styles = StyleSheet.create({})