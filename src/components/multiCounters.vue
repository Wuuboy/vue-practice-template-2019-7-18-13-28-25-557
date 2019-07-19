<template>
    <div id="app">     
        <input v-model.number="countersNumber" placeholder="input the number of counters"> 
        <p>The counters number is :{{countersNumber}}</p>
        <br>
        <Counter v-for="item in countersNumber" :key="item" @changeSum="changeSum"></Counter>
        <CounterSum :sum= "sum"></CounterSum>
    </div>
</template>

<script>
import Counter from './Counter.vue'
import CounterSum from './CounterSum.vue'
export default {
  name: 'countersNumber',
  components:{Counter,CounterSum},
  data(){
    return{
        countersNumber:0,
        sum:0
     }   
  },       
  methods:{   
        changeSum:function(changeCounter){
            this.sum += changeCounter;
        }      
  }      
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
