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
      reduce:function(){this.count--},          
      add:function(){this.count++}        
  },
  watch:{
    count:function(newValue, oldvalue){
        this.$emit('changeSum',newValue-oldvalue)
    }
  }     
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
