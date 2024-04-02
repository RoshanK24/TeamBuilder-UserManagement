import { createSlice } from "@reduxjs/toolkit";

const myTeamSlice = createSlice({
  name: "myTeam",
  initialState: [],
  reducers: {
    addTeam(state, action) {
      state.push(action.payload);
    },
    deleteTeam(state, action) {
      return state.filter((user) => user.id !== action.payload);
    },
  },
});

export default myTeamSlice.reducer;
export const { addTeam, deleteTeam } = myTeamSlice.actions;
