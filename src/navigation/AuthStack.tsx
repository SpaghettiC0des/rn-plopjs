import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {Navigators, Screens} from '@src/constants';
import {ForgotPasswordScreen, SignInScreen, SignUpScreen} from '@src/screens';
import {WelcomeScreen} from '@src/screens/Welcome';

import type {AuthStackParamList} from './types';

const {Navigator, Screen} = createStackNavigator<AuthStackParamList>();

export const AuthStackNavigator = () => (
  <Navigator id={Navigators.AuthStack}>
    {/* __CODE_GENERATOR__ */}
    <Screen
      component={WelcomeScreen}
      name={Screens.Welcome}
      options={{headerShown: false}}
    />
    <Screen component={SignInScreen} name={Screens.SignIn} />
    <Screen component={SignUpScreen} name={Screens.SignUp} />
    <Screen component={ForgotPasswordScreen} name={Screens.ForgotPassword} />
  </Navigator>
);
