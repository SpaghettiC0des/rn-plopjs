import {createSlice} from '@reduxjs/toolkit';

import {State} from './types';

const initialState: State = {};

const {actions, reducer} = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    toggleLogin(s) {
      s.isLoggedIn = !s.isLoggedIn;
    },
  },
});

export const authActions = actions;
export const authReducer = reducer;
