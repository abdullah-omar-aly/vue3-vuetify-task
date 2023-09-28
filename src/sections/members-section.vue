<template>
    <Collapsible title="الأعضاء">
        <div style="display: flex;">
            <ul ref="container" class="d-flex"
                style="height: 150px ;list-style: none;flex-grow: 1 ;flex-wrap: wrap;overflow: hidden;">
                <template v-for="member in members" :key="member.id">

                    <!-- card -->
                    <v-hover v-slot="{ isHovering, props }">
                        <v-card tag="div" :style="isHovering ? 'background-color: white' : 'background-color: transparent'"
                            style="flex-grow:1;min-width:115px;height: calc(100% - 10px);margin-bottom: 30px ;cursor: pointer;padding:1.4rem ;"
                            :elevation="isHovering ? 2 : 0" class="rounded-lg  text-center"
                            :class="{ 'on-hover': isHovering }" v-bind="props">
                            <v-avatar icon="$vuetify" style="border: 3px solid lightgray;" class="border-gray-500"
                                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPLus1qayz4hD9hJ8xxZBaIjEkrm62BNiS5g&usqp=CAU"
                                size="50"></v-avatar>
                            <p style="font-weight:bolder;font-size: 14px;margin-top: 0.5rem;">{{ member.name }}</p>
                            <p class="text-xs" style="font-size: 12px;">{{ member.title }}</p>
                        </v-card>
                    </v-hover>
                </template>
            </ul>
            <div class="hidden-cards" style="min-width: 115px; padding-top: 20px;" v-if="hiddenCardCount > 0">

                <button style="width: 100%;cursor: pointer;">
                    <div
                        style="border: 3px solid lightgray;background-color: gray;color: white;border-radius: 50%;width: 50px;height: 50px;display: grid;place-content: center;margin: auto;">
                        +{{ hiddenCardCount }}
                    </div>
                    <p style="font-weight:bolder;font-size: 16px;margin-top: 0.5rem;">الكل</p>
                </button>
            </div>
        </div>
    </Collapsible>
</template>

<script setup lang="ts">
import Collapsible from '../components/collapsible.vue';
import { onBeforeUnmount } from 'vue';
import { ref, onMounted } from 'vue';
import { reactive } from 'vue';


const initialValue = [
    { id: '1', name: "اسم العضو", title: "الرئيس" },
    { id: '2', name: "اسم العضو", title: "نائب الرئيس" },
    { id: '3', name: "اسم العضو", title: "" },
    { id: '4', name: "اسم العضو", title: "" },
    { id: '5', name: "اسم العضو", title: "" },
    { id: '6', name: "اسم العضو", title: "" },
    { id: '7', name: "اسم العضو", title: "" },
    { id: '8', name: "اسم العضو", title: "" },
    { id: '9', name: "اسم العضو", title: "" },
    { id: '10', name: "اسم العضو", title: "" },
    { id: '11', name: "اسم العضو", title: "" },
    { id: '12', name: "اسم العضو", title: "" },
    { id: '13', name: "اسم العضو", title: "" },
    { id: '14', name: "اسم العضو", title: "" },
    { id: '15', name: "اسم العضو", title: "" },
    { id: '16', name: "اسم العضو", title: "" },
    { id: '17', name: "اسم العضو", title: "" },
    { id: '18', name: "اسم العضو", title: "" },
    { id: '19', name: "اسم العضو", title: "" },
    { id: '20', name: "اسم العضو", title: "" },
]
const container = ref(null)
const hiddenCardCount = ref(0);
const members = reactive(initialValue)

const updateHiddenCardsCount = () => {

    //@ts-ignore
    const containerWidth = container.value.offsetWidth
    //@ts-ignore
    const cardWidth = container.value.firstElementChild.offsetWidth
    const maxVisibleCards = Math.floor(containerWidth / (cardWidth));
    //@ts-ignore
    hiddenCardCount.value = Math.max(0, members.length - maxVisibleCards);

};

onMounted(() => {

    window.addEventListener('resize', updateHiddenCardsCount);
    updateHiddenCardsCount();

});


onBeforeUnmount(() => {
    window.removeEventListener('resize', updateHiddenCardsCount);
});
</script>

<style scoped></style>