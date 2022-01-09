import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import MealsScreen from "./src/screens/Meals";
import LoginScreen from "./src/screens/Login";
import RegisterScreen from "./src/screens/Register";
import Modal from "./src/screens/Modal";

const OnBoardingNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null
      }
    },
    Register: {
      screen: RegisterScreen,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: "Login"
  }
);

const AppNavigator = createStackNavigator(
  {
    Meals: {
      screen: MealsScreen
    }
  },
  {
    initialRouteName: "Meals"
  }
);

const RootStack = createStackNavigator(
  {
    Main: AppNavigator,
    Modal: Modal
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

const BaseStack = createSwitchNavigator(
  {
    OnBoarding: OnBoardingNavigator,
    Root: RootStack
  },
  {
    initialRouteName: "OnBoarding"
  }
);

export default createAppContainer(BaseStack);
