import { configureStore } from "@reduxjs/toolkit";

import login from "./reducers/login";

export const store = configureStore({
	reducer: {
		login: login,
	}
});