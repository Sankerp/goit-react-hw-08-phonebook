import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './contactsOperations';
import { handlePending, handleRejected } from '../auth/userReducer';

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
  filter: '',
};

const stateArr = [fetchContacts, addContact, deleteContact];

const handler = status => {
  return stateArr.map(item => item[status]);
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    filterContact: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder =>
    builder

      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = action.payload;
      })

      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts.push(action.payload);
      })

      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        const deletedContactIndex = state.contacts.findIndex(
          contact => contact.id === action.payload.id
        );
        state.contacts.splice(deletedContactIndex, 1);
      })

      .addMatcher(isAnyOf(...handler('rejected')), handleRejected)
      .addMatcher(isAnyOf(...handler('pending')), handlePending),
});

export const contactsReducer = contactsSlice.reducer;
export const { filterContact } = contactsSlice.actions;
