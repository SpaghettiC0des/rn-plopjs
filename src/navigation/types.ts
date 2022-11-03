import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import type {StackScreenProps} from '@react-navigation/stack';

import {Navigators, Screens} from '@src/constants';

// __PARAMS_LIST__

export type AuthStackParamList = {
  // __AUTH_STACK__
  [Screens.Welcome]: undefined;
  [Screens.SignIn]: undefined;
  [Screens.SignUp]: undefined;
  [Screens.ForgotPassword]: {email: string};
};

export type MainStackParamList = {
  // __MAIN_STACK__
  [Screens.Home]: undefined;
};

export type MainDrawerParamList = {
  // __MAIN_DRAWER__
  [Screens.DrawerHome]?: NavigatorScreenParams<MainStackParamList>;
};

export type RootStackParamList = {
  // __ROOT_STACK__
  [Navigators.AuthStack]?: NavigatorScreenParams<AuthStackParamList>;
  [Navigators.MainDrawer]?: NavigatorScreenParams<MainDrawerParamList>;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

// __STACK_SCREEN_PROPS__
export type AuthStackScreenProps<T extends keyof AuthStackParamList> =
  CompositeScreenProps<
    StackScreenProps<AuthStackParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

export type MainDrawerScreenProps<T extends keyof MainDrawerParamList> =
  CompositeScreenProps<
    StackScreenProps<MainDrawerParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

export type MainStackScreenProps<T extends keyof MainStackParamList> =
  CompositeScreenProps<
    StackScreenProps<MainStackParamList, T>,
    MainDrawerScreenProps<keyof MainDrawerParamList>
  >;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
