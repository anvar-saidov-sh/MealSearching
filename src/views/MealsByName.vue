<script setup>
import axiosClient from '@/axiosClient';
import MenuIcon from 'vue-material-design-icons/Menu.vue';
import store from '@/store';
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import Meals from '@/components/Meals.vue';

const route = useRoute();
const keyword = ref('');
const meals = computed(() => store.state.searchedMeals)

function searchMeals() {
    // axiosClient.get(`search.php?s=${keyword.value}`)
    if (keyword.value) {
        store.dispatch('searchMeals', keyword.value)
    }else
    {
        store.commit('setSearchedMeals', [])
    }
}

onMounted(() => {
    keyword.value = route.params.name
    if(keyword.value){
        searchMeals()
    }
})

</script>


<template>
    <div class="p-8">
        <input type="text" v-model="keyword" class="rounded border-2 bg-white border-gray-200 w-full focus:ring-orange-500 focus:border-orange-500" placeholder="Search for meals"
            @change="searchMeals">
    </div>
    <!-- <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal"/>
    </div> -->
    <Meals :meals="meals"/>
</template>

