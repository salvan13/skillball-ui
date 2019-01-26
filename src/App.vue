<template>
  <div id="app">
    <h1 id="title">SkillBall</h1>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Pitch />
  </div>
</template>

<script>
import Pitch from './components/Pitch.vue'
import Game from './libs/game';

export default {
  data: () => {
    return {
      game: null
    };
  },
  name: 'app',
  components: {
    Pitch
  },
  created() {
    this.game = new Game();
    this.game.start();
  }
}
</script>

<style>
html {
  margin: 0;
  background-color: green;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#title {
  font-size: 60px;
}
</style>
