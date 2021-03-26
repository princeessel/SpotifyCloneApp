import React from 'react';
import {
  StyleSheet,
} from 'react-native';

import BottomTabNavigatior from './src/navigation/BottomTabNavigatior';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';




const App: React.FC = () => {

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <BottomTabNavigatior />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default React.memo(App);
