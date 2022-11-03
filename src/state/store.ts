import {AnyAction, configureStore, EnhancedStore} from '@reduxjs/toolkit';
import type {ThunkMiddlewareFor} from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import {setupListeners} from '@reduxjs/toolkit/query/react';

import {rootReducer} from './rootReducer';

export const store = configureStore({
  reducer: rootReducer,
  middleware(getDefaultMiddleware) {
    const middlewares = getDefaultMiddleware({
      serializableCheck: false,
    });

    return middlewares;
  },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = EnhancedStore<
  RootState,
  AnyAction,
  [ThunkMiddlewareFor<RootState>]
>['dispatch'];
