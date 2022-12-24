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

  add: function(info) {
    //each info object: campus, created_at, github_handle, message_id, roomname, text, updated_at, username
    console.log(info);
    let newMessageObj = {'username': info.username, 'text': info.text, 'roomname': info.roomname};
    //console.log('newMessageObj: ', newMessageObj);
    //let newMessageObj
    Messages._data[info['message_id']] = newMessageObj;
    //info.'message_id'

  },

  retrieve: function () { //retrieves all messages in database
    let allMessages = [];
    console.log('Messages._data: ', Messages._data);
    for (let info of Object.keys(Messages._data)) {
      allMessages.push(Messages._data[info]);
    }
    return allMessages;

  },

  update: function () {

  }

};