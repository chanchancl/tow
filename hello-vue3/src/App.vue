<template>
  <div class="common-layout">
    <el-container>
      <el-main id="main">
        <img alt="Vue logo" src="./assets/logo.png">
        <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
        <MyComponentVue/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import MyComponentVue from './components/MyComponent.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    MyComponentVue
  }
}
</script>

<style>

html, body, #app {
  height: 100%;
  margin: 0px;
  padding: 0px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#main {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  background-color: antiquewhite;
}

</style>
