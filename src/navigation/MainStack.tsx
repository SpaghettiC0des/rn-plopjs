import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {Navigators, Screens} from '@src/constants';
import {HomeScreen} from '@src/screens';

// __CODE_GENERATOR_IMPORTS__
import {HamburgerIcon} from './sharedConfig';
import type {MainDrawerScreenProps, MainStackParamList} from './types';

const {Navigator, Screen} = createStackNavigator<MainStackParamList>();

const headerLeft = () => <HamburgerIcon />;

export const MainStackNavigator = (
  _: MainDrawerScreenProps<Screens.DrawerHome>,
) => (
  <Navigator id={Navigators.AuthStack}>
    <Screen
      component={HomeScreen}
      name={Screens.Home}
      options={{
        title: 'Dashboard',
        headerLeft,
      }}
    />

    {/* __CODE_GENERATOR__ */}
  </Navigator>
);
