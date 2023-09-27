<template>
    <div class="collapsible mb-5">
        <h3  @click="toggleCollapsible" class="text-lg px-4" style="cursor: pointer;">
            <span>{{ title }}</span>
            <v-icon icon="mdi-chevron-up" v-if="isOpen"></v-icon>
            <v-icon icon="mdi-chevron-down" v-if="!isOpen"></v-icon>
        </h3>
        <div v-if="isOpen" >
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps(['title'])
const isOpen = ref(true)

const toggleCollapsible = () => {
    isOpen.value = !isOpen.value;
}

</script>

<style scoped lang="scss">

</style>