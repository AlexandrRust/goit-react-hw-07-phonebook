import { configureStore } from '@reduxjs/toolkit';
import { contactApi } from './contacts';
import { setupListeners } from '@reduxjs/toolkit/query';
import filterSlice from './contacts';

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
