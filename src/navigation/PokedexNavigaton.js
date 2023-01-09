import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PokedexScreen from "../screens/Pokedex";
import PokemonScreen from "../screens/Pokemon";

const Stack = createNativeStackNavigator();

const PokedexNavigaton = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PokedexStack"
        component={PokedexScreen}
        options={{
          headerShown: false,
          title: "",
          headerTransparent: true,
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

export default PokedexNavigaton;
