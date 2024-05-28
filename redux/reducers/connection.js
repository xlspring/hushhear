import { createSlice } from "@reduxjs/toolkit";

const connectionSlice = createSlice({
  name: "connection",
  initialState: {
    ip: "",
    token: "",
  },
  reducers: {
    setGlobalIp(state, action) {
      state.ip = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
  },
});

export const { setGlobalIp, setToken } = connectionSlice.actions;
export default connectionSlice.reducer;
