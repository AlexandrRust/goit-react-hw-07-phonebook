import { configureStore } from '@reduxjs/toolkit';
import { contactApi } from './contactSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import filterSlice from './filterSlice';

export const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
    filter: filterSlice,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactApi.middleware,
  ],
});

setupListeners(store.dispatch);
