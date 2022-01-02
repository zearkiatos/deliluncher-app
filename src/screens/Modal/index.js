import React, { Fragment } from "react";
import { View, Text, StyleSheet } from "react-native";
import useFetch from "../../hooks/useFetch";
import config from "../../config";

const Modal = ({ navigation }) => {
  const id = navigation.getParam("_id");
  const { loading, data } = useFetch(
    `${config.SERVERLESS_DELILUNCHER_API_BASE_URL}/api/meals/${id}`
  );
  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <Fragment>
          <Text>{data._id}</Text>
          <Text>{data.name}</Text>
          <Text>{data.description}</Text>
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
