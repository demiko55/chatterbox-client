// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.

  _data: {},

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.

  //messages sent to API server via POST requests should be in the following format:
  // var message = {
  //   username: 'shawndrost',
  //   text: 'trololo',
  //   roomname: '4chan',
  // };
  items: function() {
    return Object.values(Messages._data);
  },
  add: function (message, callback = () => {}) {
    let message1 = Messages.conform(message);
    //smessage1.username = Messages.escapeHTML(message1.username);
    message1.roomname = Messages.escapeHTML(message1.roomname);
    message1.text = Messages.escapeHTML(message1.text);
    Messages._data[message.message_id] = message1;
    if (Rooms.isSelected()) {
      callback();
    } else {
      callback(Rooms.selected);
    }
  },
  update: function(messages, callback = () => {}) {
    for (const message of messages) {
      Messages.add(message);
    }
    //console.log('selected', Rooms.isSelected());
    if (Rooms.isSelected()) {
      callback();
    } else {
      callback(Rooms.selected);
    }

  },
  conform: function(message) {
    message.text = message.text || '';
    message.username = message.username || '';
    message.roomname = message.roomname || '';
    return message;
  },

  escapeHTML: function (str) {
    return String(str).replace(/[^\w. ]/gi, function (c) {
      return '&#' + c.charCodeAt(0) + ';';
    });

  },

  // store: function (info) {
  //   //each info object: campus, created_at, github_handle, message_id, roomname, text, updated_at, username
  //   if (typeof info.text !== 'string' || info.text === null || info.text.length === 0 || info.roomname === null) {
  //     return;
  //   }
  //   if (Messages._data[info.message_id] !== undefined) {
  //     return;
  //   }
  //   let newMessageObj = {};
  //   newMessageObj.username = Messages.escapeHTML(info.username);
  //   newMessageObj.text = Messages.escapeHTML(info.text);
  //   newMessageObj.roomname = Messages.escapeHTML(info.roomname);
  //   //console.log('newMessageObj: ', newMessageObj);
  //   Messages._data[info.message_id] = newMessageObj;
  // },

  // retrieve: function (roomname) { //retrieves all messages in database
  //   let allMessages = [];
  //   if (roomname === undefined) {
  //     for (let info of Object.keys(Messages._data)) {
  //       allMessages.push(Messages._data[info]);
  //     }
  //   } else {
  //     //console.log('messages', Messages._data);
  //     for (let info of Object.keys(Messages._data)) {
  //       if (Messages._data[info].roomname === roomname) {
  //         allMessages.push(Messages._data[info]);
  //       }
  //     }
  //   }
  //   return allMessages;
  // }

};