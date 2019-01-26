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
      animation: {
        active: false,
        goalkeeper: 0,
        ball: 0
      }
    };

    this.socket = new WebSocket('ws://skillball.herokuapp.com/ws');

    this.socket.onopen = () => {
      console.log('connected');
      this.nextTurn();
    };

    this.socket.onmessage = e => {
      console.log('socket message', JSON.parse(e.data), e);
    };

    this.socket.onerror = error => {
      console.log('socket error', error);
      this.state.error = error;
    };

  }

  send(obj) {
    this.socket.send(JSON.stringify(obj));
  }

  nextTurn() {
    this.state.turn++;
    this.send({type: 'next_turn'});
  }

}
