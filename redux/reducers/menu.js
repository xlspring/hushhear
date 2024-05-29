import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    visible: false,
    deviceModalVisible: false,
  },
  reducers: {
    toggleMenu(state, action) {
      state.visible = action.payload;
    },
    toggleDeviceModal(state, action) {
      state.deviceModalVisible = action.payload;
    },
  },
});

export const { toggleMenu, toggleDeviceModal } = menuSlice.actions;
export default menuSlice.reducer;
