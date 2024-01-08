<template>
    <a :href="href" target="_blank"
        class="px-3 py-2 rounded border-2  bg-orange-500 hover:bg-orange-600 text-white 
        transition-colors border-orange-600">
        <slot>Youtube</slot>
    </a>
</template>

<script setup>

const props =defineProps({
    href: String,
    
})
</script>