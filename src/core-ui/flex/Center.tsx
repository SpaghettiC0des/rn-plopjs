import React from 'react';

import {View, ViewProps} from 'react-native';

import {FlexStyles} from '../styles';

export const Center: React.FC<ViewProps> = ({style, ...props}) => (
  <View {...props} style={[FlexStyles.center, style]} />
);
