import React, { useMemo } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar, useColorScheme } from "react-native";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "../store";
import { Provider } from "react-redux";
import { DefaultTheme, PaperProvider } from "react-native-paper";
import Stack from "./stacks/index";
import { useMaterial3Theme } from "@pchmn/expo-material3-theme";

interface INavConteiner {
  callback?: () => void;
}
const NavContainer = ({ callback }: INavConteiner) => {
  const colorScheme = useColorScheme();
  const { theme } = useMaterial3Theme();

  const paperTheme = useMemo(
    () =>
      colorScheme === "dark"
        ? { ...theme, colors: theme.dark }
        : { ...theme, colors: theme.light },
    [colorScheme, theme]
  );

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer onReady={callback}>
          <PaperProvider theme={DefaultTheme}>
            <StatusBar barStyle="light-content" />
            <Stack />
          </PaperProvider>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default NavContainer;
