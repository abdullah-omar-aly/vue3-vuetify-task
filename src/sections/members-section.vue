<template>
    <Collapsible title="الأعضاء">
        <ul class="d-flex" style="list-style: none;">
            <template v-for="member in members" :key="member.id">

                <!-- card -->
                <v-hover v-slot="{ isHovering, props }">
                    <v-card tag="li" :style="isHovering ? 'background-color: white' : 'background-color: transparent'"
                        style="min-width:120px;cursor: pointer" :elevation="isHovering ? 2 : 0"
                        class="mx-2 rounded-lg pa-5  text-center" :class="{ 'on-hover': isHovering }" v-bind="props">
                        <v-avatar icon="$vuetify" style="border: 3px solid lightgray;" class="border-gray-500"
                            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPLus1qayz4hD9hJ8xxZBaIjEkrm62BNiS5g&usqp=CAU"
                            size="60"></v-avatar>
                        <p class="text-sm pt-2">{{ member.name }}</p>
                        <p class="text-xs">{{ member.title }}</p>
                    </v-card>
                </v-hover>

            </template>
        </ul>
    </Collapsible>
</template>

<script setup lang="ts">
import Collapsible from '../components/collapsible.vue';

import { ref } from 'vue';
const initialValue = [
  { id: '1', name: "أحمد عمران", title: "الرئيس" },
  { id: '2', name: "أحمد عمران", title: "نائب الرئيس" },
  { id: '3', name: "أحمد عمران", title: "" },
  { id: '4', name: "أحمد عمران", title: "" },
  { id: '5', name: "أحمد عمران", title: "" },
  { id: '6', name: "أحمد عمران", title: "" },
]
const members = ref(initialValue)
</script>

<style scoped></style>