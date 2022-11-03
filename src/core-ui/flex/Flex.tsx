import React from 'react';

import {View, ViewProps} from 'react-native';

import {FlexStyles} from '../styles';

export const Flex: React.FC<ViewProps> = ({style, ...props}) => (
  <View {...props} style={[FlexStyles.flex1, style]} />
);
