<template>
    <div class="flex flex-col p-8">
        <input
            type="text"
            name="meals"
            class="rounded border-2 border-gray-200 w-full"
            placeholder="search for meals "
        />
        <div class="flex justify-center gap-2 mt-2">
            <router-link
                class="hover:bg-purple-200 transition-colors"
                :to="{ name: 'byLetter', params: { letter } }"
                v-for="letter of letters"
                :key="letter"
                >{{ letter }}</router-link
            >
        </div>
    </div>
</template>
<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import axiosClient from "../axiosClient.js";

const ingredients = ref([]);
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

onMounted(async () => {
    const response = await axiosClient.get("list.php?i=list");
    ingredients.value = response.data;
});
</script>
