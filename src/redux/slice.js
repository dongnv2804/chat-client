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
    getRoomsSuccess: (state, action) => ({
      ...state,
      rooms: action.payload,
    }),
  },
});

export const { loginSucess, getRoomsSuccess } = slice.actions;
export default slice.reducer;
