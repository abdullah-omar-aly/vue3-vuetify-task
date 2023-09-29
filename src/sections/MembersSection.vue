<template>
    <Collapsible title="الأعضاء">
        <div style="display: flex;">
            <ul ref="container" class="cards-container" style=";">
                <!-- member card -->
                <template v-for="member in members" :key="member.id">
                    <v-hover v-slot="{ isHovering, props }">
                        <v-card tag="div" :style="isHovering ? 'background-color: white' : 'background-color: transparent'"
                            :elevation="isHovering ? 2 : 0" class="member-card" :class="{ 'on-hover': isHovering }"
                            v-bind="props">
                            <v-avatar icon="$vuetify" class="member-card__avatar" :image="member.avatar"
                                size="50"></v-avatar>
                            <p class="member-card__name">{{ member.name }}</p>
                            <p class="member-card__title">{{ member.title }}</p>
                        </v-card>
                    </v-hover>
                </template>
            </ul>

            <v-dialog v-model="dialog" scrollable width="100%" max-width="500px">
                <template v-slot:activator="{ props }">
                    <button class="hidden-members-btn" v-bind="props" v-if="hiddenCardCount > 0">
                        <button class="hidden-members-btn__count">
                            +{{ hiddenCardCount }}
                        </button>
                        <p class="hidden-members-btn__label">الكل</p>

                    </button>
                </template>
                <v-card class="all-members-dialog">
                    <v-card-title>كل الأعضاء</v-card-title>
                    <v-divider></v-divider>
                    <v-card-text>
                        <div v-for="member in members" :key="member.id" class="all-members-dialog__body">
                            <h4>{{ member.name }}</h4>
                            <v-avatar icon="$vuetify" :image="member.avatar" size="50"
                                style="border: 3px solid gray;"></v-avatar>
                        </div>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                        <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                            اغلق
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </div>
    </Collapsible>
</template>

<script setup lang="ts">
import Collapsible from '../components/Collapsible.vue';
import { onBeforeUnmount } from 'vue';
import { ref, onMounted } from 'vue';
import { reactive } from 'vue';
import { membersInfo } from '../data/membersData'
const dialog = ref(false)


const container = ref(null)
const hiddenCardCount = ref(0);
const members = reactive(membersInfo)

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

<style scoped lang="scss">
.cards-container {
    display: flex;
    height: 150px;
    list-style: none;
    flex-grow: 1;
    flex-wrap: wrap;
    overflow: hidden
}

.member-card {
    flex-grow: 1;
    min-width: 115px;
    height: calc(100% - 10px);
    margin-bottom: 30px;
    cursor: pointer;
    padding: 1.4rem;
    text-align: center;
    border-radius: var(--rounded-primary);

    &__avatar {
        border: 3px solid lightgray;
    }

    &__name {
        font-weight: bolder;
        font-size: 14px;
        margin-top: 0.5rem;
    }

    &__title {
        font-size: 12px;
    }
}

.hidden-members-btn {
    flex-grow: 1;
    min-width: 115px;
    height: calc(100% - 10px);
    margin-bottom: 30px;
    padding: 1.4rem;
    text-align: center;
    border-radius: var(--rounded-primary);

    &__count {
        border: 3px solid lightgray;
        background-color: gray;
        color: white;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        display: grid;
        place-content: center;
        margin: auto;
    }

    &__label {
        font-weight: bolder;
        font-size: 16px;
        margin-top: 0.5rem
    }
}

.all-members-dialog {
    text-align: right;
    border-radius: var(--rounded-primary);

    &__body {
        display: flex;
        gap: 1rem;
        justify-content: end;
        align-items: center;
        padding-bottom: 0.8rem;
    }
}
</style>