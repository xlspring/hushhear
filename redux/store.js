import { configureStore } from "@reduxjs/toolkit";

import login from "./reducers/login";
import headphones from "./reducers/headphones";
import menu from "./reducers/menu";

export const store = configureStore({
  reducer: {
    login: login,
    headphones: headphones,
    menu: menu,
  },
});
