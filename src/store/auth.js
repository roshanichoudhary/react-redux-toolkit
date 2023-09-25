import { createSlice } from "@reduxjs/toolkit";

const initialAuthstate = { isAthinticated: false };

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthstate,
  reducers: {
    login(state) {
      state.isAthinticated = true;
    },
    logout(state) {
      state.isAthinticated = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
