import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: "users",
  initialState: [], // Assuming an empty array initially
  reducers: {
    storeUsers(state, action) {
      return action.payload; // Return the payload as the new state
    }
  }
});

export default usersSlice.reducer;
export const { storeUsers } = usersSlice.actions;
