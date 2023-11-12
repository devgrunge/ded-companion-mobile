import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../views/home";
import App from "../../../App";
import { index, registerScreen } from "../screenNames";
import RegisterScreen from "../../views/RegisterScreen";

const MyStack = createStackNavigator();
const Stack = () => {
  return (
    <MyStack.Navigator children screenOptions={{ headerShown: false }}>
      <MyStack.Group children>
        <MyStack.Screen name={index} component={Home} />
        <MyStack.Screen name={registerScreen} component={RegisterScreen} />
      </MyStack.Group>
    </MyStack.Navigator>
  );
};

export default Stack;
