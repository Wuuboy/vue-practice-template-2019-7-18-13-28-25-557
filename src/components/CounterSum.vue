<template>
    <div id="app">     
        <p>The counters sum number is :{{sum}}</p>
    </div>
</template>

<script>
export default {
  name: 'multiCounters',
  props:['sum'],
  data(){
    return{
     }   
  },       
  methods:{           
  }      
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
