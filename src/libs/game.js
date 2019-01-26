import referee from '../assets/sounds/referee-whistle.mp3';
import goal from '../assets/sounds/goal.mp3';
import save from '../assets/sounds/save.mp3';


export default class Game {

  constructor() {

    this.state = {
      ended: false,
      error: null,
      turn: 0,
      score: {
        goalkeeper: 0,
        striker: 0
      },
      moves: {
        p0: null,
        p1: null
      },
      animation: {
        active: false,
        goalkeeper: '',
        ball: '',
        goal: ''
      },
      goal: ''
    };

    this.socket = new WebSocket('ws://localhost:3000/ws');

    this.socket.onopen = () => {
      console.log('connected');
      this.nextTurn();
    };

    this.socket.onmessage = e => {
      const msg = JSON.parse(e.data);
      console.log('message', msg);
      this.onMessage(msg);
    };

    this.socket.onerror = error => {
      console.log('socket error', error);
      this.state.error = error;
    };

  }

  onMessage(msg) {
    if(!this.state.moves[`p${msg.player}`]) {
      this.state.moves[`p${msg.player}`] = msg;
    }
    if(this.state.moves.p0 && this.state.moves.p1) {
      
      const isGoal = this.state.moves.p0.move !== this.state.moves.p1.move;

      this.state.animation = {
        active: true,
        goalkeeper: this.state.moves.p0.move,
        ball: this.state.moves.p1.move,
        goal: isGoal ? '1' : ''
      }

      new Audio(isGoal ? goal : save).play();

      setTimeout(() => {
        if(this.state.moves.p0.move === this.state.moves.p1.move) {
          this.state.score.goalkeeper++;
        } else {
          this.state.score.striker++;
        }
        this.state.goal = isGoal ? 'GOOOOOAL!!!' : 'Amazing save!!'
        
        setTimeout(() => {
          this.nextTurn();
        }, 2000);

      }, 2000);

    }

  }

  nextTurn() {

    new Audio(referee).play();

    this.state.animation = {
      active: false,
      goalkeeper: '',
      ball: '',
      goal: ''
    };
    this.state.moves = {
      p0: null,
      p1: null
    };
    this.state.goal = '';
    this.state.turn++;
  }

}
