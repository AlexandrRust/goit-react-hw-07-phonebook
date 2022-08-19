import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62fdf1f7a85c52ee482c37c3.mockapi.io/api/v1/',
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
