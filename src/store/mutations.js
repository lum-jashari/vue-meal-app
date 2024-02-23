export function setSearchedMeals(state, meals) {
    console.log("inside mutations1");
    state.searchedMeals = meals || [];
}
export function setMealsByLetter(state, meals) {
    console.log("inside mutations1");
    state.mealsByLetter = meals || [];
}
export function setMealsByIngredients(state, meals) {
    console.log("inside mutations1");
    state.mealsByIngredient = meals || [];
}
export function setIngredient(state, ingredient) {
    state.ingredient = ingredient;
}
