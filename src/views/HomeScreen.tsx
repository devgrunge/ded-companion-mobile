import React, { memo } from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";
import { Navigation } from "./types";
import { LOGIN_PAGE, CREATE_ACCOUNT } from "../navigation/screenNames";
import BaseboardText from "../components/BaseboardText";

type Props = {
  navigation: Navigation;
};

const HomeScreen = ({ navigation }: Props) => (
  <Background>
    <Logo />
    <Header>Welcome back!</Header>

    <Paragraph>
      This is a board game assistant for rpg players, have a nive game!
    </Paragraph>
    <Button mode="contained" onPress={() => navigation.navigate(LOGIN_PAGE)}>
      Login
    </Button>
    <Button mode="outlined" onPress={() => navigation.navigate(CREATE_ACCOUNT)}>
      Sign Up
    </Button>
    <BaseboardText>Made with love by devgrunge ❤️</BaseboardText>
  </Background>
);

export default memo(HomeScreen);
