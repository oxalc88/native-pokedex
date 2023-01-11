import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FavoriteScreen from "../screens/Favorite";
import PokemonScreen from "../screens/Pokemon";

const Stack = createNativeStackNavigator();

const FavoriteNavigaton = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FavoriteStack"
        component={FavoriteScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Pokemon"
        component={PokemonScreen}
        options={{
          title: "",
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default FavoriteNavigaton;
