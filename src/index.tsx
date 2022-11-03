import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from '@rneui/themed';
import {Provider} from 'react-redux';

import {RNEUITheme} from './core-ui';
import {RootStackNavigator} from './navigation';
import {store} from './state';

export const Main = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={RNEUITheme}>
        <NavigationContainer>
          <RootStackNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
};
