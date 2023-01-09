import axios from "axios";
import { API_HOST } from "../utils/costants";

export const getPokemonsApi = async (endPointUrl) => {
  try {
    const url = `${API_HOST}/pokemon?limit=20&offset=0`;
    const response = await axios.get(endPointUrl || url);
    const result = response.data;
    return result;
  } catch (error) {
    throw error;
  }
};

export const getPokemonDetailsApi = async (url) => {
  try {
    const response = await axios.get(url);
    const result = response.data;
    return result;
  } catch (error) {
    throw error;
  }
};

export const getDetailPokemonById = async (id) => {
  try {
    const url = `${API_HOST}/pokemon/${id}`;
    const response = await axios.get(url);
    const result = response.data;
    return result;
  } catch (error) {
    throw error;
  }
};
