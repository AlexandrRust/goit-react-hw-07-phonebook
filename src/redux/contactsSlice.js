import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    add: (state, action) => {
      state.items.push(action.payload);
    },
    remove: (state, action) => {
      state.items = state.items.filter(({ id }) => id !== action.payload);
    },
    addFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { add, remove, addFilter } = contactsSlice.actions;

export default contactsSlice.reducer;
