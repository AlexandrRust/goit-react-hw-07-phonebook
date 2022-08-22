import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createSlice } from '@reduxjs/toolkit';
import { BASE_URL } from 'constants/constants';

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ['contact'],
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['contact'],
    }),
    deleteContacts: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: ['DELETE'],
      }),
      invalidatesTags: ['contact'],
    }),
    craeteContacts: builder.mutation({
      query: newContact => ({
        url: `/contacts`,
        method: ['POST'],
        body: newContact,
      }),
      invalidatesTags: ['contact'],
    }),
  }),
});
export const {
  useFetchContactsQuery,
  useDeleteContactsMutation,
  useCraeteContactsMutation,
} = contactApi;

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    addFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addFilter } = filterSlice.actions;

export default filterSlice.reducer;

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     items: [],
//     filter: '',
//   },
//   reducers: {
//     add: (state, action) => {
//       state.items.push(action.payload);
//     },
//     remove: (state, action) => {
//       state.items = state.items.filter(({ id }) => id !== action.payload);
//     },
//     addFilter: (state, action) => {
//       state.filter = action.payload;
//     },
//   },
// });

// export const { add, remove, addFilter } = contactsSlice.actions;

// export default contactsSlice.reducer;
