<template>
      <Collapsible title="اللجان الفرعية">
        <v-row no-gutters>

          <!-- card -->
          <v-col v-for="n in 6" :key="n" cols="12" sm="6" md="4" lg="3">
            <v-sheet class="ma-4 rounded-lg elevation-3" style="overflow: hidden;min-height: 300px;">
              <div style="height:100px; background-color: #186F83;position: relative;">
                <div
                  style="width: 50px;height: 50px;background-color: #186F83;border: 3px solid white;position: absolute;bottom: -25px;left:50%;transform: translateX(-50%);display: grid;place-content: center;"
                  class="rounded-lg">
                  <div style="width: 10px;height: 10px;border: 2px solid white;transform: rotateZ(45deg)"></div>
                </div>
              </div>
              <div>
                <h4 class="text-center py-12">مجلس الأدارة</h4>
              </div>
            </v-sheet>
          </v-col>

          <!-- add new clickable card -->
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-sheet class="ma-4 rounded-lg elevation-3" style="overflow: hidden;min-height: 300px;">
              <button style="min-height: 300px;display: grid;place-content: center;width: 100%;">
                <div>
                  <div class="rounded-lg mx-auto"
                    style="background-color: lightgray;width: 60px ; height: 50px;display: grid;place-content: center;">
                    +</div>
                  <p class="pt-5" style="font-weight: bold;">اضافة لجنة جديدة</p>
                </div>
              </button>
            </v-sheet>
          </v-col>
        </v-row>
      </Collapsible>
</template>

<script setup lang="ts">
import Collapsible from '../components/CollapsibleCard.vue';

</script>

<style scoped>

</style>