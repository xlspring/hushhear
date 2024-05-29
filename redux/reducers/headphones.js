import { createSlice } from "@reduxjs/toolkit";

const headphonesSlice = createSlice({
  name: "headphones",
  initialState: {
    name: "HushHear Pro",
    pic: "../assets/headphones.png",
  },
  reducers: {
    setName(state, action) {
      state.name = action.payload;
    },
    setPic(state, action) {
      state.pic = action.payload;
    },
  },
});

export const { setLogin } = headphonesSlice.actions;
export default headphonesSlice.reducer;
