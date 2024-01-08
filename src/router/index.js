import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/components/DefaultLayout.vue';
import Home from '@/views/Home.vue';
import MealsByNameVue from '@/views/MealsByName.vue';
import MealsByLetterVue from '@/views/MealsByLetter.vue';
import MealsByIngredientsVue from '@/views/MealsByIngredients.vue';
import GuestLayoutVue from '@/components/GuestLayout.vue';
import MealDetailsVue from '@/views/MealDetails.vue';
import Ingredients from '@/views/Ingredients.vue';
const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children:  [
            {
                path: '/',
                name: 'home',
                component: Home,
            },
            {
                path: '/by-name/:name?',
                name: 'byName',
                component: MealsByNameVue,
            },
            {
                path: '/by-letter/:letter?',
                name: 'byLetter',
                component: MealsByLetterVue,
            },
            {
                path: '/ingredients/',
                name: 'ingredients',
                component: Ingredients,
            },
            {
                path: '/by-ingredient/:ingredient',
                name: 'byIngredient',
                component: MealsByIngredientsVue,
            },
            {
                path: '/meal/:id?',
                name: 'mealDetails',
                component: MealDetailsVue,
            }
        ]
    },
    {
        path: '/guest',
        component: GuestLayoutVue,
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;