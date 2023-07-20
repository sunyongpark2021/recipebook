import { FlatList, View, ImageBackground, StyleSheet } from "react-native";
import { CATEGORIES } from "../assets/data/dummy_data";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function presshandler({}) {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id, //name "categoryId" is up to you
        categoryPhoto: itemData.item.photo,
      });
    }
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={presshandler}
      />
    );
  }

  return (
    <ImageBackground
      source={require("../assets/images/foodbackground.png")}
      style={styles.backgroundImage}
    >
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </ImageBackground>
  );
}

export default CategoriesScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "contain",
  },
});
