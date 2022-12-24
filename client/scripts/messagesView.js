// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function () {
    // TODO: Render _all_ the messages.
    //Messages._data
    // for all messages //renderMessage(message)
    let data = Messages.retrieve();
    console.log(data);
    let html = '';
    for (let i = 0; i < data.length; i++) {
      let h = MessagesView.renderMessage(data[i]);
      html += h;
    }
    console.log('html to append: ', html);
    $('#chats').append(html);
  },

  renderMessage: function (message) {
    // TODO: Render a single message.
    let html = '';
    html += MessageView.render(message);
    return html;
    //append here
  },

  handleClick: function (event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};