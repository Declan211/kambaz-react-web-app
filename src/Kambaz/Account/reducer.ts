import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentUser: null,
  isFaculty: null
};
const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    setIsFaculty: (state, action) => {
        state.isFaculty = action.payload;
      },
  },
});
export const { setCurrentUser } = accountSlice.actions;
export default accountSlice.reducer;