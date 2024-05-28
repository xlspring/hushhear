import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const tryLogin = createAsyncThunk("login", async (_, thunkAPI) => {
  try {
    console.log("Trying to log in...");

    const state = thunkAPI.getState();
    const userData = state.login.userData;

    console.log(state);

    const { email, password } = userData;

    if (!email || !password) {
      throw new Error("Email or password is missing");
    }

    console.log(state);

    const res = await axios.post(`http://${state.connection.ip}:3535/login`, {
      email,
      password,
    });

    thunkAPI.dispatch(setUserData(res.data));
    thunkAPI.dispatch(setLogin(true));
    console.log("Login success");
  } catch (e) {
    console.error(e);
  }
});

export const trySignUp = createAsyncThunk("signup", async (_, thunkAPI) => {
  try {
    console.log("Trying to sign up");

    const state = thunkAPI.getState();

    console.log(state);

    const { email, password, name, surname } = state.userData;

    const res = await axios.post(`http://${state.connection.ip}:3535/user`, {
      name,
      surname,
      email,
      password,
    });

    if (res.status === 200) {
      console.log("Sign up successful!");
      thunkAPI.dispatch(setLogin(true));
    }
  } catch (e) {
    console.error(e);
  }
});

const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLoggedIn: false,
    userData: {
      email: "",
      password: "",
    },
  },
  reducers: {
    setLogin(state, action) {
      state.isLoggedIn = action.payload;
    },
    setUserEmail(state, action) {
      state.userData.email = action.payload;
    },
    setUserPassword(state, action) {
      state.userData.password = action.payload;
    },
    setUserFirstName(state, action) {
      state.userData.name = action.payload;
    },
    setUserLastName(state, action) {
      state.userData.surname = action.payload;
    },
    setUserData(state, action) {
      state.userData = action.payload;
    },
  },
});

export const {
  setLogin,
  setUserEmail,
  setUserPassword,
  setUserData,
  setUserFirstName,
  setUserLastName,
} = loginSlice.actions;
export default loginSlice.reducer;
