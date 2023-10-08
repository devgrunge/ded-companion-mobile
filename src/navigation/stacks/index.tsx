import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import App from "../../views/index";
import { index } from "../screenNames";

const MyStack = createStackNavigator();
const Stack = () => {
  return (
    <MyStack.Navigator screenOptions={{ headerShown: false }}>
      <MyStack.Screen name={index} component={App} />
    </MyStack.Navigator>
  );
};

export default Stack;
