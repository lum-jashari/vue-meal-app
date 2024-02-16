import Navbar from './Navbar.vue'

<template>
    <navbar />
    <div class="bg-gray-100 h-full">
        <main>
            <router-view />
        </main>
    </div>
</template>

<script setup>
import Navbar from "./Navbar.vue";
</script>
