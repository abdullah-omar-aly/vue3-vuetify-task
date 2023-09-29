<template>
  <Collapsible title="اللجان الفرعية">
    <v-row no-gutters>

      <!-- card -->
      <v-col v-for="n in 6" :key="n" cols="12" sm="6" md="4" lg="3">
        <v-sheet class="card elevation-3">
          <div class="card__banner">
            <div class="box">
              <div></div>
            </div>
          </div>
          <div class="card__body">
            <h4 class="title">مجلس الأدارة</h4>
            <ul class="task-list">
              <li v-for="item in 2" :key="item">
                <div>
                  <span class="task-count">12</span>
                  <span>مهام مفتوحة</span>
                </div>
                <div>
                  <v-icon icon="mdi-chevron-left"></v-icon>
                </div>
              </li>
            </ul>
          </div>
        </v-sheet>
      </v-col>

      <!-- add new clickable card -->
      <v-col cols="12" sm="6" md="4" lg="3">
        <v-sheet class="card add-new elevation-3 ">
          <button>
            <div class="icon-container">
              <v-icon icon="mdi-plus"></v-icon>
            </div>
            <p class="label">اضافة لجنة جديدة</p>
          </button>
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
  overflow: hidden;


  &__banner {
    height: 100px;
    background-color: #186F83;
    position: relative;

    div.box {
      width: 60px;
      height: 60px;
      background-color: #186F83;
      border: 4px solid white;
      position: absolute;
      bottom: -30px;
      left: 50%;
      transform: translateX(-50%);
      display: grid;
      place-content: center;
      border-radius: 0.8rem;

      div {
        width: 13px;
        height: 13px;
        border: 2px solid white;
        transform: rotateZ(45deg)
      }
    }
  }

  &__body {
    h4.title {
      font-weight: bolder;
      font-size: 20px;
      text-align: center;
      margin: 2em;
    }

    ul.task-list {
      border-top: 1px solid lightgray;

      li {
        display: flex;
        justify-content: space-between;
        padding: 0.8rem 1.2rem;

        div:first-of-type {
          display: flex;
          gap: 0.5rem;
          align-items: center;
          font-size: 14px;

          span.task-count {
            background-color: gray;
            color: white;
            display: inline-flex;
            width: 2.2rem;
            height: 1.6rem;
            justify-content: center;
            align-items: center;
            border-radius: 1rem;
          }
        }

      }
    }
  }

  &.add-new {
    height: calc(100% - 32px);

    button {
      height: 100%;
      display: grid;
      place-content: center;
      width: 100%;


      .icon-container {
        background-color: lightgray;
        width: 70px;
        height: 60px;
        display: grid;
        place-content: center;
        border-radius: 1rem;
        margin: auto;
      }

      .label {
        font-weight: bold;
        padding-top: 1rem;
      }
    }
  }
}
</style>