<template>
    <div id="app">     
        <button value="-" @click="reduce">-</button>
            <span id = "showValue">{{count}}</span>      
        <button value="+" @click="add">+</button>    
    </div>
</template>

<script>

export default {
  name: 'Counter',
  data(){
     return{count:0}   
  },        
  methods:{          
      reduce:function(){
          this.count--;
          this.$store.commit('reduce',1);
      },       
      add:function(){
          this.count++;
        this.$store.commit('add',1);
        }   
  }    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
