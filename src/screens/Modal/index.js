import React, { Fragment } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import useFetch from "../../hooks/useFetch";
import config from "../../config";

const Modal = ({ navigation }) => {
  const id = navigation.getParam("_id");
  const { loading, data } = useFetch(
    `${config.SERVERLESS_DELILUNCHER_API_BASE_URL}/api/meals/${id}`
  );
  const onCancel = () => navigation.navigate("Meals");
  const onAccept = () => {
    fetch(`${config.SERVERLESS_DELILUNCHER_API_BASE_URL}/api/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        mealId: id,
        userId: "userId"
      })
    }).then(() => {
      alert("The order was generated");
      navigation.navigate("Meals");
    });
  };
  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <Fragment>
          <Text>{data._id}</Text>
          <Text>{data.name}</Text>
          <Text>{data.description}</Text>
          <Button title="Accept" onPress={onAccept} />
          <Button title="Cancel" onPress={onCancel} />
        </Fragment>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Modal;
