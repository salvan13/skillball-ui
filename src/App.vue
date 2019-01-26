<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Game from './libs/game';

import HelloWorld from './components/HelloWorld.vue'

export default {
  data: () => {
    return {
      game: null
    };
  },
  name: 'app',
  components: {
    HelloWorld
  },
  created() {
    this.game = new Game();
    this.game.start();
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
