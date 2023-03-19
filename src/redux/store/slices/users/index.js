import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    list: [],
    data: {},
  },
  reducers: {
    setUserList: (state, action) => {
      state.list = action.payload;
    },
    postUser: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setUserList, postUser } = userSlice.actions;

export default userSlice.reducer;
