
<script setup>
import { computed, onMounted, ref } from 'vue';
import store from '@/store';
import Meals from "@/components/Meals.vue";
import axiosClient from '@/axiosClient.js';


// const meals = computed(() => store.state.meals)

// const letters = 'ABCDEFGHIGKLMNOPQRTSUVXYZ'.split("");
// const ingredients = ref([])
const meals = ref([]);
// onMounted(async () => {
//     const response = await axiosClient.get('/list.php?i=list');
//     // console.log(response.data);
//     ingredients.value = response.data;
// })
onMounted(async () => {
  for (let i = 0; i < 10; i++) {
    axiosClient
      .get(`random.php`)
      .then(({ data }) => meals.value.push(data.meals[0]));
  }
});

</script>


<template>
    <div class="flex p-8 flex-wrap justify-center flex-col">
        <!-- <input type="text" class="rounded border-2 border-gray-500 w-full" placeholder="Search for meals"> -->
        <!-- <div class="flex gap-2 justify-center mt-2">
            <router-link :to="{
                name: 'byLetter',
                params: { letter }
            }" v-for="letter of letters">
                {{ letter }}
            </router-link>
        </div> -->
    </div>
    <div class="p-8 pb-0 text-orange-500">
        <h1 class="text-4xl font-bold mb-4">Random Meals</h1>
    </div>
    <Meals :meals="meals" />
</template>

