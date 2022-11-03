import React from 'react';

import {ViewProps} from 'react-native';

import {FlexStyles} from '../styles';
import {Row} from './Row';

export const FlexRow: React.FC<ViewProps> = ({style, ...props}) => (
  <Row {...props} style={[FlexStyles.flex1, style]} />
);
