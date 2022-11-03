import {createSelector} from '@reduxjs/toolkit';

import type {RootState} from '@src/state/store';

const authState = (s: RootState) => s.auth;

export const authSelectors = {
  isLoggedIn: createSelector(authState, auth => !!auth.isLoggedIn),
};
