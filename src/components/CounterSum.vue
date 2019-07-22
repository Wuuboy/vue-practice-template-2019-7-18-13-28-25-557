<template>
    <div id="app">     
        <p>The counters sum number is :{{$store.state.sum}}</p>
    </div>
</template>

<script>
export default {
  name: 'multiCounters',
  // props:['sum'],
  data(){
    return{
      // sum:0
     }   
  },       
  methods:{           
  }      
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
