import React, { useEffect } from "react";
import { ActivityIndicator, AsyncStorage, View } from "react-native";

const AuthLogin = ({ navigation }) => {
  useEffect(() => {
    AsyncStorage.getItem("token").then((x) => {
      navigation.navigate(x ? "Root" : "OnBoarding");
    });
  });
  return (
    <View>
      <ActivityIndicator />
    </View>
  );
};

export default AuthLogin;
