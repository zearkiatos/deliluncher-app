import React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import ListItem from "../../components/ListItem";
import config from "../../config";
import useFetch from "../../hooks/useFetch";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "flex-start",
    justifyContent: "flex-start"
  },
  list: {
    alignSelf: "stretch"
  }
});

const Meals = ({ navigation }) => {
  const { loading, data: meals } = useFetch(
    `${config.SERVERLESS_DELILUNCHER_API_BASE_URL}/api/meals`
  );
  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          style={styles.list}
          data={meals}
          keyExtractor={(x) => x._id}
          renderItem={({ item }) => (
            <ListItem
              onPress={() => navigation.navigate("Modal", { _id: item._id })}
              name={item.name}
            />
          )}
        ></FlatList>
      )}
    </View>
  );
};

Meals.navigationOptions = {
  title: "Food  availables"
};

export default Meals;
