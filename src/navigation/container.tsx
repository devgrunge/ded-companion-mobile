import React, { useMemo } from "react";
import Stack from "./stacks";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "../store";
import { Provider } from "react-redux";
import Toast from "react-native-toast-message";
import { useColorScheme } from "react-native";
import { useMaterial3Theme } from "@pchmn/expo-material3-theme";
import {
  MD3DarkTheme,
  MD3LightTheme,
  Provider as PaperProvider
} from "react-native-paper";

interface INavConteiner {
  callback?: () => void;
}
const NavContainer = ({ callback }: INavConteiner) => {
  const colorScheme = useColorScheme();
  const { theme } = useMaterial3Theme();

  const paperTheme = useMemo(
    () =>
      colorScheme === "dark"
        ? { ...MD3DarkTheme, colors: theme.dark }
        : { ...MD3LightTheme, colors: theme.light },
    [colorScheme, theme]
  );

  return (
    <NavigationContainer onReady={callback}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <PaperProvider theme={paperTheme}>
            <Toast />
            <StatusBar barStyle="light-content" />
            <Stack />
          </PaperProvider>
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
};

export default NavContainer;
