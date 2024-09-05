import * as io from 'socket.io-client';

export class YourClassName {

  constructor() {
    this.socket = io(this.url);
    this.socket.on('new-message', m =>{alert(m);
    });
  }

  
}