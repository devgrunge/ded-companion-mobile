import React, { useMemo } from "react";
import Stack from "./stacks";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "../store";
import { Provider } from "react-redux";
import { DefaultTheme, PaperProvider } from "react-native-paper";
import Stack from "./stacks";

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
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer onReady={callback}>
          <PaperProvider theme={DefaultTheme}>
            <StatusBar barStyle="light-content" />
            <Stack />
          </PaperProvider>
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
};

export default NavContainer;
