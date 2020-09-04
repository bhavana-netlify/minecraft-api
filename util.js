export const formatRecipe = recipe => {
  const longestItemName = findItemInRecipeWithLongestName(recipe)
}

export const findItemInRecipeWithLongestName = recipe => {
  const allItems = recipe.reduce((items, row) => {
    return items + " " +  row
  }, "")
  return allItems.split(" ").reduce((longestItemName, item) => {
    if (item.length > longestItemName.length) {
      longestItemName = item
    }
    return longestItemName
  }, "");
}
