import React from 'react';

import {useNavigation, DrawerActions} from '@react-navigation/native';
import {useTheme, Icon} from '@rneui/themed';

export const HamburgerIcon = () => {
  const {theme} = useTheme();
  const navigation = useNavigation();

  return (
    <Icon
      containerStyle={{paddingHorizontal: theme.spacing.md}}
      name="menu-outline"
      type="ionicon"
      onPress={() => {
        navigation.dispatch(DrawerActions.toggleDrawer());
      }}
    />
  );
};
