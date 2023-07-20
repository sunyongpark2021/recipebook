import { useLayoutEffect } from "react";
import { ImageBackground, StyleSheet, View, Image } from "react-native";
import { MEALS, CATEGORIES } from "../assets/data/dummy_data";
import MealsList from "../components/MealsList/MealsList";

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;
  const catPhoto = route.params.categoryPhoto;
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  }); //this will filter(return) the components of MEALS that only carry that specific categories ID.
  // if that categories ID exist in certain mealItem, its indexOf(catId) will be >=0 and mealItem will be returned

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);
  //navigation.setOptions changes the navigation header title to categoryTitle when useLayoutEffect is rendered
  console.log(catPhoto);
  return (
    <ImageBackground source={catPhoto} style={styles.backgroundImage}>
      <View style={styles.flex1}>
        <MealsList items={displayedMeals} />
      </View>
    </ImageBackground>
  );
}
export default MealsOverviewScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  flex1: {
    flex: 1,
    opacity: 1,
  },
});
