<template>
  <div id="app">
    <strong>SkillBall</strong>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <div class="container">
      <MessageBoard :moves="game.state.moves" :goal="game.state.goal" />
      <ScoreBoard :turn="game.state.turn" :score="game.state.score" />
    </div>
    <Pitch :animation="game.state.animation" />
  </div>
</template>

<script>
import Pitch from './components/Pitch.vue'
import MessageBoard from './components/MessageBoard.vue'
import ScoreBoard from './components/ScoreBoard.vue'
import Game from './libs/game';

export default {
  data: () => {
    return {
      game: null
    };
  },
  name: 'app',
  components: {
    MessageBoard,
    ScoreBoard,
    Pitch
  },
  created() {
    this.game = new Game();
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
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2% 6%;
}
</style>
