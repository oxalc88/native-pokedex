import { useEffect, useState } from "react";
import Fontawesome5 from "react-native-vector-icons/FontAwesome5";
import Fontawesome from "react-native-vector-icons/FontAwesome";
import {
  addPokemonFavorite,
  isPokemonFavorited,
  removePokemonFavorited,
} from "../../api/favorite";

const Favorite = (props) => {
  const { id } = props;
  const [isFavorite, setIsFavorite] = useState(undefined);
  const [reloadCheck, setReloadCheck] = useState(false);

  const Icon = isFavorite ? Fontawesome : Fontawesome5;

  useEffect(() => {
    (async () => {
      try {
        const response = await isPokemonFavorited(id);
        setIsFavorite(response);
      } catch (error) {
        setIsFavorite(false);
      }
    })();
  }, [id, reloadCheck]);

  const onReloadCheckFavorite = () => {
    setReloadCheck((prev) => !prev);
  };

  const addFavorite = async () => {
    try {
      await addPokemonFavorite(id);
      onReloadCheckFavorite();
    } catch (error) {
      console.log(error);
    }
  };

  const removeFavorite = async () => {
    try {
      await removePokemonFavorited(id);
      onReloadCheckFavorite();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Icon
      name="heart"
      color={"#fff"}
      size={20}
      onPress={isFavorite ? removeFavorite : addFavorite}
      style={{ marginRight: 5, marginTop: 25 }}
    />
  );
};

export default Favorite;
