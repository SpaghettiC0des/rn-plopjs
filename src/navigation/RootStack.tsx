import {useEffect} from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {useThemeMode} from '@rneui/themed';
import {useColorScheme} from 'react-native';

import {Navigators} from '@src/constants';
import {useAppSelector} from '@src/state';
import {authSelectors} from '@src/state/slices';

import {AuthStackNavigator} from './AuthStack';
import {MainDrawerNavigator} from './MainDrawer';
import type {RootStackParamList} from './types';

const {Navigator, Screen} = createStackNavigator<RootStackParamList>();

export const RootStackNavigator = () => {
  const isLoggedIn = useAppSelector(authSelectors.isLoggedIn);

  const {setMode, mode} = useThemeMode();
  const colorScheme = useColorScheme();

  useEffect(() => {
    if (mode !== colorScheme) {
      setMode(colorScheme ?? 'light');
    }
  }, [colorScheme, setMode, mode]);

  return (
    <Navigator id={Navigators.RootStack} screenOptions={{headerShown: false}}>
      {isLoggedIn ? (
        <Screen component={MainDrawerNavigator} name={Navigators.MainDrawer} />
      ) : (
        <Screen component={AuthStackNavigator} name={Navigators.AuthStack} />
      )}
    </Navigator>
  );
};
