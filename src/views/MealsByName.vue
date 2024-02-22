<template>
    <div class="p-8 pb-0 flex">
        <input
            type="text"
            name="meals"
            v-model="keyword"
            class="rounded border-2 border-gray-200 w-full"
            placeholder="search for meals "
            @change="searchMeals"
        />
        <!-- <button
            class="px-3 py-2 text-white rounded border-2 border-red-600 bg-red-500 hover:bg-red-600 transition-colors"
            @click="searchMeals"
        >
            click
        </button> -->
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
</template>
<script setup>
import { computed } from "@vue/reactivity";
import store from "../store";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import MealItem from "../components/MealItem.vue";

const route = useRoute();
const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
    store.dispatch("searchMeals", keyword.value);
}

onMounted(() => {
    keyword.value = route.params.name;
    if (keyword.value) searchMeals();
});
</script>
