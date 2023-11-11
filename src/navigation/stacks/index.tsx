import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../views/home"
import App from "../../../App";
import { index } from "../screenNames";

const MyStack = createStackNavigator();
const Stack = () => {
  return (
    <MyStack.Navigator screenOptions={{ headerShown: false }}>
      <MyStack.Screen name={index} component={Home} />
    </MyStack.Navigator>
  );
};

export default Stack;
