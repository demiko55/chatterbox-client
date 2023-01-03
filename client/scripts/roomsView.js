// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  // initialize: function () {
  //   // TODO: Perform any work which needs to be done
  //   // when this view loads.
  //   RoomsView.handleChange();
  //   RoomsView.handleClick();

  // },

  // render: function () {
  //   // TODO: Render out the list of rooms.
  //   let rooms = Rooms.retrieve();
  //   //rooms.unshift('please select a room');
  //   console.log('render rooms', rooms);
  //   RoomsView.$select.empty();
  //   for (let i = 0; i < rooms.length; i++) {
  //     RoomsView.renderRoom(rooms[i]);
  //   }
  // },

  // renderRoom: function (roomname) {
  //   // TODO: Render out a single room.
  //   var $option = $('<option>').val(roomname).text(roomname);
  //   RoomsView.$select.append($option);
  // },

  // handleChange: function (event) {
  //   // TODO: Handle a user selecting a different room.
  //   RoomsView.$select.change(function() {
  //     let roomname = RoomsView.$select.val();
  //     console.log('roomname', roomname);
  //     $('#chats').empty();
  //     MessagesView.render(roomname);
  //   });
  // },

  // handleClick: function (event) {
  //   // TODO: Handle the user clicking the "Add Room" button.
  //   RoomsView.$button.click(function() {
  //     var room = prompt('enter a room name please');
  //     Rooms.add(room);
  //     RoomsView.$select.val(room);

  //   });
  // }
  initialize: function () {
    RoomsView.$select.on('change', RoomsView.handleChange);
    RoomsView.$button.on('click', RoomsView.handleClick);
  },
  render: function () {
    RoomsView.$select.html('');
    let rooms = Rooms.items();
    rooms.forEach(room => {
      RoomsView.renderRoom(room);
    });
    RoomsView.$select.val(Rooms.selected);
  },
  renderRoom: function (roomname) {
    var $option = $('<option>').val(roomname).text(roomname);
    RoomsView.$select.append($option);
  },
  handleChange: function (event) {
    Rooms.selected = RoomsView.$select.val();
    //console.log('rooms selected', Rooms.selected);
    MessagesView.render(Rooms.selected);
  },
  handleClick: function () {
    var roomname = prompt('Enter a room name please');

    if (roomname) {
      Rooms.add(roomname, () => {
        RoomsView.render();
        MessagesView.render();
      });
    }
  }
};
