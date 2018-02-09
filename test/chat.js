const assert = require('assert'),
      io = require('socket.io-client'),
      socketURL = 'http://0.0.0.0:8080',
      options ={
        transports: ['websocket'],
        'force new connection': true
      };

const app = require('../config/www');

describe('chat', () => {
  it('Should initialize', (done) => {
    let client = io.connect(socketURL, options);
    client.on('connect', (msg) => {
      client.on('initialize', (msg) => {
        assert.equal(msg, "Chat is runing..", 'Msg is not "Chat is runing.."');
        client.disconnect();
        done();
      });
    });
  });
  it('Should send a message', (done) => {
    let client = io.connect(socketURL, options);
    client.on('connect', (msg) => {
      client.emit('chat message', 'Hello');
      client.on('chat message', (msg) => {
        assert.equal(msg, "Hello", 'Msg is not "Hello"');
        done();
        client.disconnect();
      });
    });
  });
});
