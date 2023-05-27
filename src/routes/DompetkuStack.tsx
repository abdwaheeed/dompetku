import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../pages/home';
import AddDompetForm from '../component/forms/add_dompet_form';
import AddDompet from '../component/button/add_dompet';
import Dompetku from '../pages/dompetku';
import EditForm from '../component/forms/edit_dompet_form';
import History from '../component/history';

const Stack = createStackNavigator();

const DompetKuStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Dompetku" component={Dompetku} />
      <Stack.Screen name='Add Dompet' component={AddDompet}/>
      <Stack.Screen name="Add Dompet Form" component={AddDompetForm} />
      <Stack.Screen name="Edit Dompet Form" component={EditForm} />
      <Stack.Screen name="Lihat Riwayat" component={History} />
    </Stack.Navigator>
  );
};

export default DompetKuStack;
