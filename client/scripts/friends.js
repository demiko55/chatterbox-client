// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = {
  // TODO: Define how you want to store your list of friends.

  // _data: [],

  // // TODO: Define methods which allow you to add, toggle,
  // // and check the friendship status of other users.
  // toggleStatus: function(friend) {
  //   if (Friends.checkIsFriend(friend)) {
  //     for (let i = 0; i < Friends._data.length; i++) {
  //       if (Friends._data[i] === friend) {
  //         Friends._data.splice(i, 1);
  //       }
  //     }
  //   } else {
  //     Friends._data.push(friend);
  //   }
  //   // $('#chats').empty();
  //   // let roomname = RoomsView.$select.val();
  //   // if (roomname === 'please select a room') {
  //   //   MessagesView.render();
  //   // } else {
  //   //   MessagesView.render(roomname);
  //   // }


  //   console.log('Friends data', Friends._data);
  // },
  // checkIsFriend: function(friend) {
  //   return Friends._data.includes(friend);
  // },
  _data: new Set(),
  items: function() {
    return [...Friends._data];//???
  },
  isFriend: function(name) {
    return Friends._data.has(name);
  },
  toggleStatus: function(name, callback = () => {}) {
    console.log('name', name);
    if (Friends.isFriend(name)) {
      Friends._data.delete(name);
    } else {
      Friends._data.add(name);
    }
    callback(Rooms.selected);

  }

};