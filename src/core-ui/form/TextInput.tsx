import React, {forwardRef, useMemo} from 'react';

import {Input, InputProps, useTheme} from '@rneui/themed';
import {TextInput as RNTextInput} from 'react-native';

export type TextInputProps = Omit<InputProps, 'shake'> & {
  shake?: InputProps['shake'];
};

export const TextInput = forwardRef<RNTextInput, TextInputProps>(
  ({shake = () => {}, disabled, inputContainerStyle, ...props}, ref) => {
    const {theme} = useTheme();

    const styles = useMemo(
      () => ({
        inputContainer: {
          paddingHorizontal: theme.spacing.md,
        },
        disabled: {
          backgroundColor: theme?.colors.grey5,
          borderColor: theme?.colors.grey5,
        },
      }),
      [theme?.colors.grey5, theme.spacing.md],
    );
    return (
      <Input
        ref={ref}
        disabled={disabled}
        inputContainerStyle={[
          styles.inputContainer,
          disabled ? styles.disabled : undefined,
          inputContainerStyle,
        ]}
        shake={shake}
        {...props}
      />
    );
  },
);

declare module '@rneui/themed' {
  export interface ComponentTheme {
    TextInput: Partial<TextInputProps>;
  }
}
