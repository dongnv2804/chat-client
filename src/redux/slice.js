import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  rooms: [],
  messages: [],
};

const slice = createSlice({
  name: "home",
  initialState,
  reducers: {
    loginSucess: (state, action) => ({
      ...state,
      user: action.payload,
    }),
  },
});

export const { loginSucess } = slice.actions;
export default slice.reducer;
