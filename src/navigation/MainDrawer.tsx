import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {getFocusedRouteNameFromRoute, Route} from '@react-navigation/native';

import {Navigators, Screens} from '@src/constants';

// __CODE_GENERATOR_IMPORTS__
import {MainStackNavigator} from './MainStack';
import type {MainDrawerParamList} from './types';

const {Navigator, Screen} = createDrawerNavigator<MainDrawerParamList>();

function enableSwipeByRoute(route: Partial<Route<string>>) {
  const focusedRoute = getFocusedRouteNameFromRoute(route) ?? Screens.Home;

  return focusedRoute === Screens.Home;
}

export const MainDrawerNavigator = () => (
  <Navigator
    id={Navigators.MainDrawer}
    screenOptions={({route}) => ({
      headerShown: false,
      swipeEnabled: enableSwipeByRoute(route),
    })}>
    <Screen
      component={MainStackNavigator}
      name={Screens.DrawerHome}
      options={{drawerLabel: 'Dashboard'}}
    />
    {/* __CODE_GENERATOR__ */}
  </Navigator>
);
