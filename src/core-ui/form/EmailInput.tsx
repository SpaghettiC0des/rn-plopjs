import React, {forwardRef, useMemo} from 'react';

import {IconProps, useTheme} from '@rneui/themed';
import {TextInput as RNTextInput} from 'react-native';

import {TextInput, TextInputProps} from './TextInput';

type Props = TextInputProps & {
  isValid?: boolean;
};

export const EmailInput = forwardRef<RNTextInput, Props>(
  ({isValid = false, ...props}, ref) => {
    const {theme} = useTheme();
    const validIcon = useMemo<IconProps | undefined>(
      () =>
        isValid
          ? {
              type: 'ionicon',
              name: 'checkmark-outline',
              color: theme?.colors.green5,
            }
          : undefined,
      [isValid, theme?.colors.green5],
    );

    return (
      <TextInput
        ref={ref}
        accessibilityHint="Enter your email"
        accessibilityLabel="Email input"
        autoCapitalize="none"
        keyboardType="email-address"
        label="Email *"
        rightIcon={validIcon}
        textContentType="emailAddress"
        {...props}
      />
    );
  },
);

declare module '@rneui/themed' {
  export interface ComponentTheme {
    EmailInput: Partial<Props>;
  }
}
