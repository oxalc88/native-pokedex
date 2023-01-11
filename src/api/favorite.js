import AsyncStorage from "@react-native-async-storage/async-storage";
import { includes, pull } from "lodash";
import { FAVORITE_STORAGE } from "../utils/costants";

export const getPokemonsFavorite = async () => {
  try {
    const response = await AsyncStorage.getItem(FAVORITE_STORAGE);
    const responseJason = JSON.parse(response);
    return responseJason ? responseJason : [];
  } catch (error) {
    throw error;
  }
};

export const addPokemonFavorite = async (id) => {
  try {
    const favorites = await getPokemonsFavorite();
    favorites.push(id);
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));
  } catch (error) {
    throw error;
  }
};

export const isPokemonFavorited = async (id) => {
  try {
    const response = await getPokemonsFavorite();
    return includes(response, id);
  } catch (error) {
    throw error;
  }
};

export const removePokemonFavorited = async (id) => {
  try {
    const favorites = await getPokemonsFavorite();
    const newFavorites = pull(favorites, id);
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(newFavorites));
  } catch (error) {
    throw error;
  }
};
