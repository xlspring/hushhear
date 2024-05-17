import {useEffect,} from "react";

import { StatusBar } from 'expo-status-bar';
import * as NavigationBar from 'expo-navigation-bar';

import {Provider} from "react-redux";
import {store} from "./redux/store";
import AppNavigation from "./screens";

export default function App() {

  useEffect(() => {
    NavigationBar.setPositionAsync("absolute");
    NavigationBar.setBackgroundColorAsync("#ffffff01");
  }, []);

  return (
    <Provider store={store}>
      <AppNavigation />
      <StatusBar />
    </Provider>
  );
}