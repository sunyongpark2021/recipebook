import { FlatList } from "react-native";

import { CATEGORIES } from "../assets/data/dummy_data";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function presshandler({}) {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id, //name "categoryId" is up to you
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
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
