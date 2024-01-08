<script setup>
import axiosClient from '@/axiosClient';
import Meals from '@/components/Meals.vue';
import store from '@/store';
import { onMounted, ref, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const meals = computed(() => store.state.mealsByIngredient)
const ingredient = computed(() => store.state.ingredient)
onMounted(() => {
    // debugger;
    store.dispatch('searchMealsByIngredient', route.params.ingredient)
})
</script>
<template>
    <div class="p-8 pb-0">
        <h1 class="text-4xl font-bold mb-4 text-orange-500">Meals for {{ ingredient.strIngredient }}</h1>
    </div>

    <Meals :meals="meals" />
</template>