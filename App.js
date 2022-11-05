import * as React from "react";
import { Text } from "react-native";
import { theme } from "./src/infrastructure/theme";
import { ThemeProvider } from "styled-components";
import { ResturantsScreen } from "./src/features/restaurants/screens/RestaurantsScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";

const Tab = createBottomTabNavigator();
const Settings = () => <Text>Settings</Text>;
const Map = () => <Text>Map</Text>;
function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={createScreenOptions}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "grey",
      }}
    >
      <Tab.Screen name="Restaurants" component={ResturantsScreen} />
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [OswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [LatoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!OswaldLoaded || !LatoLoaded) {
    return;
  } else {
    return (
      <>
        <ThemeProvider theme={theme}>
          <NavigationContainer>
            <MyTabs />
          </NavigationContainer>
        </ThemeProvider>
      </>
    );
  }
}

const TAB_ICON = {
  Restaurants: "ios-restaurant-sharp",
  Restaurants_OutLine: "ios-restaurant-sharp",

  Map: "ios-map-sharp",
  Map_OutLine: "ios-map-outline",

  Settings: "ios-settings-sharp",
  Settings_OutLine: "ios-settings-outline",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];

  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};
