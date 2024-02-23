<template>
    <div class="p-8 pb-0 flex">
        <input
            type="text"
            name="meals"
            v-model="keyword"
            class="rounded border-2 mb-4 bg-white border-gray-200 w-full focus:ring-orange-500 focus:border-orange-500"
            placeholder="search for meals "
            @change="searchMeals"
        />
    </div>
    <Meals :meals="meals" />
</template>
<script setup>
import store from "../store";
import Meals from "../components/Meals.vue";
import { computed } from "@vue/reactivity";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
    if (keyword.value) {
        store.dispatch("searchMeals", keyword.value);
    } else {
        store.commit("setSearchedMeals", []);
    }
}

onMounted(() => {
    keyword.value = route.params.name;
    if (keyword.value) searchMeals();
});
</script>
