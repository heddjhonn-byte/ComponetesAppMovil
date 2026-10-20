import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface HeroHeaderProps {
  title: string;
  subtitle: string;
}

export const HeroHeader: React.FC<HeroHeaderProps> = ({ title, subtitle }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 12,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 36,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#A0A0A0",
    fontSize: 16,
    lineHeight: 24,
  },
});
