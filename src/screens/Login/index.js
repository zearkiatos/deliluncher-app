import React from "react";
import { Text, TextInput, View, StyleSheet, Button } from "react-native";
import useForm from '../../hooks/useForm';

const Login = ({ navigation }) => {
  const initialState = {
    email: "",
    password: ""
  };
  const onSubmit = (values) => {
    console.log(values);
  };
  const { subscribe, inputs, handleSubmit } = useForm(initialState, onSubmit);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log in</Text>
      <TextInput
        value={inputs.email}
        style={styles.input}
        placeholder="Email"
        onChangeText={subscribe('email')}
      />
      <TextInput
        value={inputs.password}
        style={styles.input}
        placeholder="Password"
        onChangeText={subscribe('password')}
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
