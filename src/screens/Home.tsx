import React from 'react';

import {Button} from '@rneui/themed';
import {View, Text} from 'react-native';

import {authActions, useAppDispatch} from '@src/state';

export const HomeScreen = () => {
  const dispatch = useAppDispatch();
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Sign out"
        onPress={() => dispatch(authActions.toggleLogin())}
      />
    </View>
  );
};
