<template>
  <div>
    <NavBarT />
    <router-view />
  </div>
</template>
  
<script>
  /* eslint-disable */
    import NavBarT from "./components/NavBarT.vue"
    
    export default {
      name: "App",
    
      components: {
        NavBarT,
      }
    }
</script>
  
<style>
  body, #app{
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    text-align: center;
    color: black;
    background-color:antiquewhite;
  }
</style>