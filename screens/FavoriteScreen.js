import { StyleSheet, Text, View } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../assets/data/dummy_data";
import { useSelector } from "react-redux";
import { ImageBackground } from "react-native";

function FavoriteScreen() {
  // const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  //using useSelector, it collets ids of the favoritemeals from the redux store
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <ImageBackground
        source={require("../assets/images/foodbackground.png")}
        style={styles.backgroundImage}
      >
        <View style={styles.rootContainer}>
          <Text style={styles.text}>
            You have not chosen any favorite food yet
          </Text>
        </View>
      </ImageBackground>
    );
  }
  return <MealsList items={favoriteMeals} />;
}

export default FavoriteScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "contain",
  },
});
