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
      moves: [],
      animation: {
        active: false,
        goalkeeper: '',
        ball: '',
        goal: ''
      }
    };

    this.socket = new WebSocket('ws://skillball.herokuapp.com/ws');

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


    /*setTimeout(() => {
        const msg1 = {
          player: 0,
          move: 'left'
        };

        const msg2 = {
          player: 1,
          move: 'left'
        };

        this.onMessage(msg1);
        this.onMessage(msg2);
    }, 2000);*/

  }

  onMessage(msg) {
    if(!this.state.moves[msg.player]) {
      this.state.moves[msg.player] = msg;
    }
    if(this.state.moves[0] && this.state.moves[1]) {
      if(this.state.moves[0].move === this.state.moves[1].move) {
        this.state.score.goalkeeper++;
      } else {
        this.state.score.striker++;
      }
      this.state.animation = {
        active: true,
        goalkeeper: this.state.moves[0].move,
        ball: this.state.moves[1].move,
        goal: this.state.moves[0].move !== this.state.moves[1].move ? '1' : ''
      }
    }

    setTimeout(() => {
      this.nextTurn();
    }, 5000);
  }

  nextTurn() {
    this.state.animation = {
      active: false,
      goalkeeper: '',
      ball: '',
      goal: ''
    };
    this.state.moves = [];
    this.state.turn++;
  }

}
