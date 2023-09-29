<template>
  <Collapsible title="مؤشرات الأداء">
    <v-row no-gutters>
      <v-col v-for="n in 4" :key="n" cols="12" sm="6" md="4" lg="3">
        <v-sheet class="card elevation-3">
          <div class="card__header">
            <h5>عنوان النتائج</h5>
            <button>
              <v-icon icon="mdi-pencil-outline"></v-icon>
            </button>
          </div>
          <div class="card__body">
            <p>24%</p>
            <div>
              <span>0.5%+</span>
              <span>منذ العام الماضي</span>
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

<style scoped lang="scss">
.card {
  border-radius: var(--rounded-primary);
  margin: 1rem;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid lightgray;
    padding: 1rem;

    h5 {
      color: gray
    }

    button {
      border: 1px solid lightgray;
      border-radius: 50%;
      padding: 0.3rem;
      font-size: 12px;
      display: grid;
      place-content: center;
      color: gray
    }
  }

  &__body {
    display: flex;
    justify-content: space-between;
    padding: 1rem;

    p {
      font-size: 24px;
      font-weight: bolder;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: end;

      span:first-of-type {
        color: #AEDAC7;
        font-size: 14px;
      }

      span:last-of-type {
        font-size: 12px;
        font-weight: bold;
        color: gray
      }
    }
  }
}</style>