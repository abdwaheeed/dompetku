import React from 'react';
import MainNavigator from './routes/HomeStack';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './routes/TabNavigator';
import { View } from 'react-native';

const App = () => {
  return (
    <TabNavigator/>
  );
};

export default App;
