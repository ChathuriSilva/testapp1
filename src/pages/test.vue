<template>
    <div>
        <h2>{{test}}</h2>
         <q-btn @click="clickone" round color="primary" :label="text"/>
    </div>
</template>

<script>

export default{
   data(){
       return {
        test: 'hello',
        text: 'button'
       }
   },
   created: function(){
       console.log('h')
   },
   methods:{
       clickone(){
           console.log('h')
       }
   }
}
</script>
