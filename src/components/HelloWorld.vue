<template>
    <div id="app">     
        <button value="-" @click="reduce">-</button>
            <span id = "showValue">{{count}}</span>      
        <button value="+" @click="add">+</button>    
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
     return{count:0}   
  },        
  methods:{          
      reduce:function(){this.count--},          
      add:function(){this.count++}        
  }      
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
