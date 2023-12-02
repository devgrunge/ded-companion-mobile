import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { CREATE_ACCOUNT, DASHBOARD, HOMEPAGE, LOGIN_PAGE } from "../screenNames";
import { LoginScreen, RegisterScreen, ForgotPasswordScreen, Dashboard, HomeScreen } from "../../views/index";

const MyStack = createStackNavigator();
const Stack = () => {
  return (
    <MyStack.Navigator screenOptions={{ headerShown: false }}>
     
      <MyStack.Screen name={HOMEPAGE} component={HomeScreen} />
      <MyStack.Screen name={LOGIN_PAGE} component={LoginScreen} />
      <MyStack.Screen name={CREATE_ACCOUNT} component={RegisterScreen} />


      <MyStack.Screen name={DASHBOARD} component={Dashboard} />
    </MyStack.Navigator>
  );
};

export default Stack;
