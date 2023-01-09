import {
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Platform,
} from "react-native";
import React from "react";
import PokemonCard from "./PokemonCard";

const PokemonList = (props) => {
  const { pokemons, loadPokemons, isNext } = props;

  const loadMore = () => {
    loadPokemons();
  };

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      key={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatlistContentContainer}
      onEndReached={isNext && loadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        isNext && (
          <ActivityIndicator
            size={"large"}
            style={styles.spinner}
            color={"#Aeaeae"}
          />
        )
      }
    />
  );
};

const styles = StyleSheet.create({
  flatlistContentContainer: {
    paddingHorizontal: 5,
    marginTop: Platform.OS === "android" ? 5 : 0,
  },
  spinner: {
    marginTop: 2,
    marginBottom: 60,
  },
});

export default PokemonList;
