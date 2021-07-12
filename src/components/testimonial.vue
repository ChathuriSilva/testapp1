<template>
    <div class="q-pa-md row items-start q-gutter-md">
        <q-card class="my-card" style="max-width:400px">
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar2.jpg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>Chathu Resha</q-item-label>
        </q-item-section>
      </q-item>
      <q-card-section>
        <q-rating v-model="stars" :max="5" size="32px" />
        <div class="text-subtitle1 text-grey">
          A awsome receipe, thanku  and very helpfull. I love it and it was great
        </div>
      </q-card-section>
    </q-card>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup () {
    return {
      stars: ref(4),
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>