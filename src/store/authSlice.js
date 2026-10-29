import { createSlice } from "@reduxjs/toolkit";

const savedAuth = JSON.parse(localStorage.getItem("auth")) || null;

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: savedAuth?.user || null,
    token: savedAuth?.token || null,
  },
  reducers: {
    signupSuccess: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;

      localStorage.setItem("auth", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      state.token = null;

      localStorage.removeItem("auth");
    },
  },
});

export const { signupSuccess, logout } = authSlice.actions;
export default authSlice.reducer;