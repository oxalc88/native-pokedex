import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

import Account from "../screens/Account";
import FavoriteScreen from "../screens/Favorite";
import FavoriteNavigaton from "./FavoriteNavigation";
import PokedexNavigaton from "./PokedexNavigaton";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator initialRouteName="Pokedex">
      <Tab.Screen
        name="Favorite"
        component={FavoriteNavigaton}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
          // headerTitle: "Favoritos",

          headerTitleAlign: "center",
        }}
      />
      <Tab.Screen
        name="Pokedex"
        component={PokedexNavigaton}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => renderPokeball(),
          // headerTitleAlign: "center",
          headerShown: false,

          // title: "",
          // headerTransparent: true,
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: "Cuenta",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
          headerTitle: "Cuenta",
          headerTitleAlign: "center",
        }}
      />
    </Tab.Navigator>
  );
};

//Auxiliar funtions and styles
const renderPokeball = () => {
  return (
    <Image
      source={require("../assets/pokeball.png")}
      style={{ width: 75, height: 75, top: -15 }}
    />
  );
};

export default Navigation;
