import React from 'react';

import {Button} from '@rneui/themed';
import {noop} from 'lodash';
import {View, Text} from 'react-native';

import {Screens} from '@src/constants';
import {AuthStackScreenProps} from '@src/navigation/types';

export const SignInScreen = (_: AuthStackScreenProps<Screens.SignIn>) => {
  return (
    <View>
      <Text>SignInScreen</Text>
      <Button title="Simulate login" onPress={noop} />
    </View>
  );
};
