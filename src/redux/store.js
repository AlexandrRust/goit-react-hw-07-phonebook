import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { serializableCheck } from 'constants/constants';
import contactsSlice from './contactsSlice';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['filter'],
};

export const persistedItemsReducer = persistReducer(
  persistConfig,
  contactsSlice
);

export const store = configureStore({
  reducer: {
    contacts: persistedItemsReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck,
    });
  },
});

export const persistor = persistStore(store);
