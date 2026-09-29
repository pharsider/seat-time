import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SeatTime</Text>

      <Text style={styles.subtitle}>
        Find your next motorsports event.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111111",
    padding: 24,
    justifyContent: "center",
  },

  title: {
    color: "white",
    fontSize: 36,
    fontWeight: "700",
  },

  subtitle: {
    color: "#aaaaaa",
    fontSize: 18,
    marginTop: 8,
  },
});