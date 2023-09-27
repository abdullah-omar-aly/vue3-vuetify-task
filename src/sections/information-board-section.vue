<template>
    <Collapsible title="لوحة المعلومات">

        <v-row no-gutters>
            <v-col cols="12" sm="6" md="4">
                <v-sheet class="ma-4 rounded-lg elevation-3" style="overflow: hidden;min-height: 300px;">
                    <div>
                        <h5 style="border-bottom: 1px solid lightgray; " class="pa-4 mb-10">
                            <v-icon icon="mdi-checkbox-marked-circle-outline"
                                style="color: white; background-color: lightgray;width: 50px;"
                                class="rounded px-5 py-4"></v-icon>
                            <span class="mr-4">مؤشرات المهام</span>
                        </h5>
                        <!-- piechart -->
                        <div :style="pieStyle">
                            <div style="height: 110px;width: 110px;background-color: white;border-radius: 50%;"></div>
                        </div>
                    </div>
                </v-sheet>
            </v-col>

            <v-col cols="12" sm="6" md="4">
                <v-sheet class="ma-4 rounded-lg elevation-3" style="overflow: hidden;min-height: 300px;">
                    <div>

                        <h5 style="border-bottom: 1px solid lightgray; " class="pa-4 mb-10">
                            <v-icon icon="mdi-checkbox-marked-circle-outline"
                                style="color: white; background-color: lightgray;width: 50px;"
                                class="rounded px-5 py-4"></v-icon>
                            <span class="mr-4">مؤشرات المهام</span>
                        </h5>
                        <!-- halfpie chart -->
                        <div :style="halfPieStyle">
                            <div style="height: 140px;width: 140px;background-color: white;border-radius: 50%;"></div>
                        </div>

                    </div>
                </v-sheet>
            </v-col>
        </v-row>
    </Collapsible>
</template>

<script setup lang="ts">
import Collapsible from '../components/collapsible.vue';
import { reactive } from 'vue';

const pieStyle = reactive({
    display: "grid",
    placeContent: "center",
    width: "160px",
    height: "160px",
    borderRadius: "50%",
    backgroundColor: "blueviolet",
    backgroundImage: "repeating-conic-gradient(red 0deg 90deg, yellow 90deg 200deg, blue 200deg 360deg)",
    transform: "rotateZ(-90deg)",
    margin: "auto"
})

const halfPieStyle = reactive({
    display: "grid",
    placeContent: "center",
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    backgroundColor: "blueviolet",
    backgroundImage: "repeating-conic-gradient(red 0deg 90deg, yellow 90deg 120deg, blue 120deg 180deg , white 180deg 360deg)",
    transform: "rotateZ(-90deg)",
    margin: "auto"
})
</script>

<style scoped></style>