import React , { FC, useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTheme, TextInput } from "react-native-paper";
// import { useApi } from "../hooks/useApi";

const EmailInput = () => {
  const [text] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');
}
const PassInput = () => {
  const [text] = React.useState('Useless Text');
  const [number] = React.useState('');
}
 
const Home : FC<React.ReactElement> = () => {
  const theme = useTheme();
  const [text] = React.useState();
  const [number, onChangeNumber] = React.useState('');

  const themeStyle = {
    colors: theme.colors
  };

  return (
    <View style={styles.container}>
      <View>
      <TextInput
      label="Email"
      placeholder="Email"
      value={text}
  
    />
          <TextInput
      caretHidden={true}
      label="Password"
      placeholder="Password"
      value={text}
    />
    
    
    
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding:20,
    alignItems: "center",
    justifyContent: "space-between",
    
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10}
});
