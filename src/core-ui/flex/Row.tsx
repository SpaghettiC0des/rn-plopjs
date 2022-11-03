import React from 'react';

import {View, ViewProps} from 'react-native';

import {FlexStyles} from '../styles';

export const Row: React.FC<ViewProps> = ({style, ...props}) => (
  <View {...props} style={[FlexStyles.fdRow, style]} />
);
