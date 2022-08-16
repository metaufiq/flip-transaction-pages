import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TransactionList from './src/screens/TransactionList';
import TransactionDetail from './src/screens/TransactionDetail';
import { RootStackParamList } from './index.types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TransactionList" component={TransactionList} />
        <Stack.Screen name="TransactionDetail" component={TransactionDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
