// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  // _data: [],

  // // TODO: Define methods which allow you to add rooms, update the list,
  // // mark a room as selected, etc.
  // store: function(info) {
  //   if (typeof info.roomname === 'string' && info.roomname.length !== 0 && info.roomname !== null && !Rooms._data.includes(info.roomname)) {
  //     Rooms._data.push(info.roomname);
  //   }
  // },
  // retrieve: function() {
  //   return Rooms._data;
  // },
  // add: function(roomname) {
  //   console.log('add roomname', roomname);
  //   Rooms._data.push(Messages.escapeHTML(roomname));
  //   RoomsView.render();
  //   //console.log('rooms _data', Rooms._data);
  // }
  _data: new Set(),
  selected: 'lobby',
  items: function () {
    return [...Rooms._data];
  },
  isSelected: function (roomname = 'lobby') {
    return roomname === Rooms.selected;
  },
  add: function (roomname, callback = () => {}) {
    console.log('add roomname', roomname);
    Rooms._data.add(roomname);
    Rooms.selected = roomname;
    //console.log(Rooms.items());
    callback(Rooms.items());
  },
  update: function (messages, callback = () => {}) {
    messages.forEach(message => {
      Rooms._data.add(message.roomname);
    });
    //console.log('update rooms', Rooms.items());
    callback(Rooms.items());
  }


};