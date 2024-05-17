import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createMaterialBottomTabNavigator();

import HomeScreen from "./home";
import NoicesScreen from "./noices";
import EQScreen from "./eq";

export default function AppScreens() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={"Home"}
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name={"Noices"}
        component={NoicesScreen}
        options={{
          tabBarLabel: 'Noices',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="waveform" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name={"EQ"}
        component={EQScreen}
        options={{
          tabBarLabel: 'EQ',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="sine-wave" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}