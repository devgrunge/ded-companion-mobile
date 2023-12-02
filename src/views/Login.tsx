import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "react-native-paper";
import useLogin from "../hooks/uselogin";
import { APIURL } from "../.env/index";

const Login = () => {
  const theme = useTheme();
  const { apiConnect, message } = useLogin(APIURL);

  return (
    <View style={styles.container}>
      <Text>{apiConnect ? message : "Not connnected"}</Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
