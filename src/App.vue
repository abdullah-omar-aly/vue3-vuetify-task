<template >
  <v-app>
    <v-main dir="rtl" class="py-10">

      <!-- members section -->
      <MembersSection />
      

      <!-- Performance indicators section -->
      <PerformanceIndicatorsSection />

      
      <!-- Subcommittees section -->
      <SubcommitteesSection />


      <!-- Information board section -->
      <InformationBoardSection />

    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import MembersSection from './sections/members-section.vue'
import PerformanceIndicatorsSection from './sections/performance-indicators-section.vue'
import SubcommitteesSection from './sections/subcommittees-section.vue'
import InformationBoardSection from './sections/information-board-section.vue'

onMounted(() => {
  document.documentElement.lang = 'ar';
})

</script>

<style lang="scss">
.v-main {
  background-color: #F5F5F3;
}
</style>