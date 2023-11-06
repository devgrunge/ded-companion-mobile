import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "react-native-paper";

const App = () => {
  const [characters, setCharacters] = useState<any>([]);
  useEffect(() => {
    fetch("https://ded-companion.onrender.com/characters")
      .then((res) => res.json())
      .then((data) => setCharacters(data));
  }, [characters]);

  const theme = useTheme();
  
  return (
    <View style={styles.container}>
      {characters.map((item: any, index: number) => (
        <TouchableOpacity
          key={item.id}
          style={{
            flex: 0.4,
            backgroundColor: theme.colors.background,
            width: "80%",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={{ fontSize: 10, color: "black" }}>{item.name}</Text>
          <Text>Armor Class: {item.armor_class}</Text>
          <Text>Class: {item.class}</Text>
          <Text>Hitpoints: {item.hitpoints}</Text>
          {/* Acessando atributos */}
          <Text>Attributes:</Text>
          <Text>Carisma: {item.attributes.car}</Text>
          <Text>Constituição: {item.attributes.con}</Text>
          <Text>Destreza: {item.attributes.dex}</Text>
          <Text>Força: {item.attributes.for}</Text>
          <Text>Inteligência: {item.attributes.int}</Text>
          <Text>Sabedoria: {item.attributes.wis}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between"
  }
});
