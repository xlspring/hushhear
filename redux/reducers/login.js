import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
	name: 'login',
	initialState: {
		isLoggedIn: true,
	},
	reducers: {
		setLogin(state, action) {
			state.isLoggedIn = action.payload;
		}
	}
})

export const { setLogin } = loginSlice.actions;
export default loginSlice.reducer;