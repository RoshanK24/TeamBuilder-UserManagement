import { configureStore } from "@reduxjs/toolkit";
import usersSlices from "./slices/usersSlice";
import pageUserSlice from "./slices/pageUserSlice";
import teamSlice from "./slices/teamSlice";

const store = configureStore({
  reducer: {
    users: usersSlices,
    pageUser: pageUserSlice,
    myTeam: teamSlice
  },
});

export default store;
