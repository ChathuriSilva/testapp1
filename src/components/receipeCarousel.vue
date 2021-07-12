<template>
  <div class="q-pa-md q-gutter-sm">
    <q-carousel
      animated
      v-model="slide"
      infinite
    >
      <q-carousel-slide name="soft-jazz">
        <q-video
          class="absolute-full"
          src="https://www.youtube.com/embed/k3_tw44QsZQ"
        />
      </q-carousel-slide>

      <q-carousel-slide name="Rihanna">
        <q-video
          class="absolute-full"
          src="https://www.youtube.com/embed/nZDBocBhXNk"
        />
      </q-carousel-slide>

    </q-carousel>

    <div class="row justify-right">
      <q-btn-toggle color="grey-4" text-color="purple" unelevated icon="camera_enhance"
        v-model="slide"
        :options="[
          { label: 'Photos', value: 'soft-jazz' },
          { label: 'Youtube', value: 'Rihanna' }
        ]"
      />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      slide: ref('Rihanna')
    }
  }
}
</script>