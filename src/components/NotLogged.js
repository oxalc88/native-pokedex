import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Button } from "react-native";

const NotLogged = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.content}>
      <Text style={styles.text}>
        Para ver tus favoritos debees iniciar sesion
      </Text>
      <Button
        title="Ir al Login"
        onPress={() => navigation.navigate("Account")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    marginVertical: 50,
    paddingHorizontal: 50,
  },
  text: {
    textAlign: "center",
    marginBottom: 10,
  },
});

export default NotLogged;
