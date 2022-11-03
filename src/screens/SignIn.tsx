import React from 'react';

import {Button} from '@rneui/themed';
import {View, Text} from 'react-native';

import {Screens} from '@src/constants';
import {AuthStackScreenProps} from '@src/navigation/types';
import {authActions, useAppDispatch} from '@src/state';

export const SignInScreen = (_: AuthStackScreenProps<Screens.SignIn>) => {
  const dispatch = useAppDispatch();

  return (
    <View>
      <Text>SignInScreen</Text>
      <Button
        title="Simulate login"
        onPress={() => dispatch(authActions.toggleLogin())}
      />
    </View>
  );
};
