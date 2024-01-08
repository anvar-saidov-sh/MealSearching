<script setup>
import Meals from '@/components/Meals.vue';
import store from '@/store';
import { computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';



const route = useRoute();
const letters = 'ABCDEFGHIGKLMNOPQRTSUVXYZ'.split("");
const meals = computed(() => store.state.mealsByLetter)

watch(route, () => {
    store.dispatch('searchMealsByLetter', route.params.letter)
})


onMounted(() => {
    store.dispatch('searchMealsByLetter', route.params.letter)
})

</script>
<template>
    <div class="p-8 pb-0">
        <h1 class="text-4xl font-bold mb-4 text-orange-500">Meals by Letter</h1>
    </div>
    <div class="flex gap-3 flex-wrap justify-center mb-6 px-8">
        <router-link :to="{
            name: 'byLetter',
            params: { letter }
        }" v-for="letter of letters" class="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all">
            {{ letter }}
        </router-link>
    </div>
    <!-- <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal"/>
    </div> -->
    <Meals :meals="meals"></Meals>
</template> 