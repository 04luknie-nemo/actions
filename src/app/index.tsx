import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  const message: string = "Hello Github Actions";

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: 900,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
