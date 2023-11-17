import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  useTheme,
  TextInput,
  Button,
  ActivityIndicator
} from "react-native-paper";
import { useApiGet } from "../hooks/useApi";
import { useNavigation } from "@react-navigation/native";
import { REACT_NATIVE_APP_API_URL } from "../../dotenv";

const Home: FC<React.ReactElement> = () => {
  const apiUrl = REACT_NATIVE_APP_API_URL;

  const { data, error } = useApiGet(apiUrl);
  const theme = useTheme();
  let text: string;

  const navigation = useNavigation();
  console.log("my data ===>", data);

  const handleNavigation = () => {
    navigation.navigate("register" as never);
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "600",
          color: theme.colors.primary
        }}
      >
        Login with your account
      </Text>
      {error && <Text>Error: {error}</Text>}
      {data && (
        <>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
              color: theme.colors.primary
            }}
          >
            {data.success}
          </Text>
          {/* Other UI elements */}
        </>
      )}
      {/* Loading spinner */}
      {!data && !error && (
        <ActivityIndicator size="large" color={theme.colors.primary} />
      )}
      <TextInput
        style={{
          width: "80%",
          color: theme.colors.shadow,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25
        }}
        label="Email"
        placeholder="Email"
        value={text}
      />
      <TextInput
        style={{
          width: "80%",
          color: theme.colors.shadow,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25
        }}
        caretHidden={true}
        label="Password"
        placeholder="Password"
        value={text}
      />
      <Button
        onPress={handleNavigation}
        style={{
          backgroundColor: theme.colors.primaryContainer,
          padding: 20,
          alignItems: "center",
          width: "80%",
          borderRadius: 25,
          borderColor: theme.colors.shadow,
          borderWidth: 1
        }}
        icon="login"
      >
        <Text style={{ color: theme.colors.shadow }}>Login</Text>
      </Button>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e7e7e7",
    padding: 20,
    alignItems: "center",
    justifyContent: "space-around"
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  }
});
