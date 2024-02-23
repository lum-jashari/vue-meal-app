export function setSearchedMeals(state, meals) {
    console.log("inside mutations");
    state.searchedMeals = meals || [];
}
export function setMealsByLetter(state, meals) {
    console.log("inside mutations");
    state.mealsByLetter = meals || [];
}
export function setMealsByIngredients(state, meals) {
    console.log("inside mutations");
    state.mealsByIngredient = meals || [];
}
