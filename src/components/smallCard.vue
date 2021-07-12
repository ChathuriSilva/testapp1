<template>

    <div  class="q-pa-md row items-start q-gutter-md ">
      <div class="row">
                
                <div class="col-10">
                  <q-card class="my-card" style="border-radius: 7%; width:120%" >
      <q-card-section horizontal>
        <q-img
          class="col-5"
          src="../assets/1.jpg"
        />

        <q-card-section>
          {{ lorem }}
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="event" />
        <q-btn flat>
          5:30PM
        </q-btn>
        <q-btn flat>
          7:00PM
        </q-btn>
        <q-btn flat color="primary" @click="viewReceipe" to="/receipePage">
          Reserve
        </q-btn>
      </q-card-actions>
    </q-card>
                </div>
                <div class="col-1"></div>
              </div>
        
    </div>

</template>

<script>
export default {
  setup () {
    return {
      lorem: 'didunt utsadsad sadsad asdsaf safsaf sadgjsa, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  },
  methods:{
       viewReceipe(){
           console.log('h')
       }
   }
}
</script>

<style lang="sass" scoped>
.my-card

  width: 100%
  max-width: 350px
</style>