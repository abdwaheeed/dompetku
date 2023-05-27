import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../pages/home';
import AddDompetForm from '../component/forms/add_dompet_form';
import AddDompet from '../component/button/add_dompet';

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name='Add Dompet' component={AddDompet}/>
      <Stack.Screen name="Add Dompet Form" component={AddDompetForm} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
