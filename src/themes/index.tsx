import themes from "./themes.json";

interface themesInterface {
  defaultTheme: object;
  secondaryTheme: object;
}

export const theme = (themes: themesInterface) => {
  const { defaultTheme, secondaryTheme } = themes;

  const theme = {
    ...defaultTheme,
    colors: {
      ...secondaryTheme,
      primary: "tomato",
      secondary: "yellow"
    }
  };

  return theme;
};
