import React from "react";
import {
  AsyncStorage,
  Text,
  TextInput,
  View,
  StyleSheet,
  Button,
  Alert
} from "react-native";
import useForm from "../../hooks/useForm";
import config from "../../config";

const Login = ({ navigation }) => {
  const initialState = {
    email: "",
    password: ""
  };
  const onSubmit = (values) => {
    fetch(`${config.SERVERLESS_DELILUNCHER_API_BASE_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify(values)
    })
      .then((x) => x.text())
      .then((x) => {
        try {
          return JSON.parse(x);
        } catch (ex) {
          throw ex;
        }
      })
      .then((x) => {
        AsyncStorage.setItem("token", x.token);
        navigation.navigate("Meals");
      })
      .catch((ex) => Alert.alert(`Error ${ex}`));
  };
  const { subscribe, inputs, handleSubmit } = useForm(initialState, onSubmit);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log in</Text>
      <TextInput
        autoCapitalize="none"
        value={inputs.email}
        style={styles.input}
        placeholder="Email"
        onChangeText={subscribe("email")}
      />
      <TextInput
        autoCapitalize="none"
        value={inputs.password}
        style={styles.input}
        placeholder="Password"
        onChangeText={subscribe("password")}
        secureTextEntry={true}
      />
      <Button title="Log in" onPress={handleSubmit}></Button>
      <Button
        title="Register"
        onPress={() => navigation.navigate("Register")}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    alignSelf: "stretch",
    marginBottom: 10,
    padding: 5
  },
  title: {
    fontSize: 24,
    marginBottom: 16
  }
});

export default Login;
