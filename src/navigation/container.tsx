import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "../store";
import { Provider } from "react-redux";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider
} from "react-native-paper";
import Stack from "./stacks";

/**
 * Default Stack under stacks folders
 */
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "tomato",
    secondary: "yellow"
  }
};

interface INavConteiner {
  callback?: () => void;
}
const NavContainer = ({ callback }: INavConteiner) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer onReady={callback}>
          <PaperProvider theme={theme}>
            <StatusBar barStyle="light-content" />
            <Stack />
          </PaperProvider>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default NavContainer;
