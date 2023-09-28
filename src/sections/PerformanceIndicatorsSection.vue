<template>
      <Collapsible title="مؤشرات الأداء">
        <v-row no-gutters>
          <v-col v-for="n in 4" :key="n" cols="12" sm="6" md="4" lg="3">
            <v-sheet class="ma-4 rounded-lg elevation-3">
              <div class="d-flex justify-space-between align-center pa-4 " style="border-bottom: 1px solid lightgray;">
                <h5 style="color: gray">عنوان النتائج</h5>
                <button>
                  <v-icon icon="mdi-pencil-outline" size="16" color="grey" style="border: 1px solid lightgray;"
                    class="rounded-circle pa-3"></v-icon>
                </button>
              </div>
              <div class="d-flex justify-space-between pa-4 ">
                <p style="font-size: 24px;font-weight: bolder;">24%</p>
                <div class="d-flex flex-column align-end">
                  <span style="color: #AEDAC7">0.5%+</span>
                  <span style="font-size: 12px;font-weight: bold;color: gray">منذ العام الماضي</span>
                </div>
              </div>
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