<template >
  <v-app>
    <v-main dir="rtl" class="py-10 px-8">

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
import MembersSection from './sections/MembersSection.vue'
import PerformanceIndicatorsSection from './sections/PerformanceIndicatorsSection.vue'
import SubcommitteesSection from './sections/SubcommitteesSection.vue'
import InformationBoardSection from './sections/InformationBoardSection.vue'

onMounted(() => {
  document.documentElement.lang = 'ar';
})

</script>

<style lang="scss">
.v-main {
  background-color: #F5F5F3;
}
</style>