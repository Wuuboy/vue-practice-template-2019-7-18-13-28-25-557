<template>
    <div id="app">     
        <input v-model.number="countersNumber" placeholder="input the number of counters"> 
        <p>The counters number is :{{countersNumber}}</p>
        <br>
        <Counter v-for="item in countersNumber" :key="item"></Counter>
    </div>
</template>

<script>
import Counter from './Counter.vue'
export default {
  name: 'countersNumber',
  components:{Counter},
  data(){
    return{
        countersNumber:0,
     }   
  },       
  methods:{           
  }      
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
