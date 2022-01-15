import React from "react";
import { Text, TextInput, View, StyleSheet, Button, Alert } from "react-native";
import useForm from "../../hooks/useForm";
import config from '../../config';

const Register = ({ navigation }) => {
  const initialState = {
    email: "",
    password: ""
  };
  const onSubmit = (values) => {
    fetch(`${config.SERVERLESS_DELILUNCHER_API_BASE_URL}/api/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify(values)
    })
    .then(x => x.text())
    .then(x => {
      if (x === 'User was created successfuly') {
        return Alert.alert('Successfully', x, [
          {
            text: 'Go to Index',
            onPress: () => navigation.navigate('Login')
          }
        ]);
      }

      Alert.alert('Error', x);
    });
  }

  const { subscribe, handleSubmit, inputs } = useForm(initialState, onSubmit);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
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
      <Button title="Register" onPress={handleSubmit}></Button>
      <Button
        title="Back"
        onPress={() => navigation.navigate("Login")}
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

export default Register;
