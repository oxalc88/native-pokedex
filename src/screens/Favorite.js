import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { Text } from "react-native";

import { getPokemonsFavorite } from "../api/favorite";
import { getDetailPokemonById } from "../api/pokemon";
import NotLogged from "../components/NotLogged";
import PokemonList from "../components/PokemonList";
import useAuth from "../hooks/useAuth";

const Favorite = () => {
  const [pokemons, setPokemons] = useState([]);
  const { auth } = useAuth();

  useFocusEffect(
    useCallback(() => {
      if (auth) {
        (async () => {
          const response = await getPokemonsFavorite();
          const pokemonsArray = [];
          for await (const id of response) {
            const pokemonDetails = await getDetailPokemonById(id);
            pokemonsArray.push({
              id: pokemonDetails.id,
              name: pokemonDetails.name,
              type: pokemonDetails.types[0].type.name,
              order: pokemonDetails.order,
              image:
                pokemonDetails.sprites.other["official-artwork"].front_default,
            });
          }
          setPokemons(pokemonsArray);
        })();
      }
    }, [auth])
  );

  return !auth ? <NotLogged /> : <PokemonList pokemons={pokemons} />;
};

export default Favorite;
