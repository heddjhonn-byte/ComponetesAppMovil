import { Alert, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Button } from "../components/Boton";
import { HeroHeader } from "../components/hear";

export default function WelcomePage() {
  const handlePress = () => {
    Alert.alert("CryptX", "¡Acción ejecutada correctamente!");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.logo}>
          Crypt<Text style={{ color: "#5F52FF" }}>X</Text>
        </Text>
      </View>

      <View style={styles.content}>
        <HeroHeader
          title="Jump start your crypto portfolio"
          subtitle="Take your investment portfolio to the next level"
        />
        <View style={styles.spacing} />
        <Button title="Get Started" onPress={handlePress} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#000000",
    paddingHorizontal: 24,
  },
  header: {
    height: 60,
    justifyContent: "center",
    marginTop: 10,
  },
  logo: {
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 40,
  },
  spacing: {
    height: 32, // Espacio exacto entre textos y botón
  },
});
