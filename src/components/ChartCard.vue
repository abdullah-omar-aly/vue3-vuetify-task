<template>
    <v-col cols="12" sm="12" md="6"  lg="4" >
        <v-sheet class="ma-5 rounded-lg elevation-3" height="100%">
            <h5 style="border-bottom: 1px solid lightgray; " class="pa-4 mb-10">
                <v-icon :icon="icon.name" class="rounded-lg px-7 py-5" style="color:white;width: 50px;"
                    :style="icon.style"></v-icon>
                <span class="mr-4">{{ title }}</span>
            </h5>
            <div>
                <slot></slot>
            </div>
        </v-sheet>
    </v-col>
</template>

<script setup lang="ts">

defineProps(['title', 'icon'])

</script>

<style scoped lang="scss"></style>