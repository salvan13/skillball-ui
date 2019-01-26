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
      this.state.animation = {
        active: true,
        goalkeeper: this.state.moves.p0.move,
        ball: this.state.moves.p1.move,
        goal: this.state.moves.p0.move !== this.state.moves.p1.move ? '1' : ''
      }

      setTimeout(() => {
        if(this.state.moves.p0.move === this.state.moves.p1.move) {
          this.state.score.goalkeeper++;
        } else {
          this.state.score.striker++;
        }
        this.state.goal = this.state.moves.p0.move !== this.state.moves.p1.move ? 'GOOOOOAL!!!' : 'Amazing save!!'
        
        setTimeout(() => {
          this.nextTurn();
        }, 2000);

      }, 2000);

    }

  }

  nextTurn() {
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