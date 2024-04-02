import { createSlice } from "@reduxjs/toolkit";

const pageUserSlice = createSlice({
  name: "pageUser",
  initialState: [], 
  reducers: {
    storePageUser(state, action) {
      return action.payload; 
    },
    deletePageUser(state, action) {
      const userId = action.payload;
      return state.filter((user) => user.id !== userId); 
    },
  },
});

export default pageUserSlice.reducer;
export const { storePageUser,  deletePageUser} = pageUserSlice.actions;
