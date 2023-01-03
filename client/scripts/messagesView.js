// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  // initialize: function () {
  //   // TODO: Perform any work which needs to be done
  //   // when this view loads.
  //   MessagesView.handleClick();
  // },
  initialize: function () {
    MessagesView.$chats.on('click', '.username', MessagesView.handleClick);
  },

  // render: function (roomname) {
  //   // TODO: Render _all_ the messages.
  //   //Messages._data
  //   // for all messages //renderMessage(message)
  //   var data = [];
  //   if (roomname === undefined) {
  //     data = Messages.retrieve();
  //   } else {
  //     data = Messages.retrieve(roomname);
  //     //console.log('room data', data);
  //   }
  //   console.log('data', data);
  //   $('#chats').empty();
  //   for (let i = 0; i < data.length; i++) {
  //     MessagesView.renderMessage(data[i]);
  //   }
  // },
  render: function (roomname) {
    MessagesView.$chats.html('');
    let messages = Messages.items();
    if (roomname === undefined) {
      messages.forEach(message => {
        MessagesView.renderMessage(message);
      });
    } else {
      messages.forEach(message => {
        if (message.roomname === roomname) {
          MessagesView.renderMessage(message);
        }
      });
    }

  },

  // renderMessage: function (message) {
  //   // TODO: Render a single message.
  //   let html = '';
  //   html += MessageView.render(message);
  //   //console.log('html', html);
  //   $('#chats').prepend(html);
  //   //append here
  // },
  renderMessage: function (message) {
    var $message = MessageView.render(message);
    //console.log('render message', $message);
    MessagesView.$chats.prepend($message);

  },

  // handleClick: function (event) {
  //   // TODO: handle a user clicking on a message
  //   // (this should add the sender to the user's friend list).
  //   MessagesView.$chats.on('click', '.username', function (event) {
  //     var username = event.currentTarget.textContent;
  //     Friends.toggleStatus(username);
  //   });
  // }
  handleClick: function(event) {
    var username = $(event.target).data('username');
    console.log('click name', username);
    Friends.toggleStatus(username, MessagesView.render);
  }

};