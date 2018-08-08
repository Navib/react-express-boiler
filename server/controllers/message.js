const Message = require('../models/message');

exports.sendMessage = function(req, res, next) {
  const body = req.body.body;
  const sentBy = req.body.sentBy;
  const timeSent = req.body.timeSent;
  const messageId = req.body.messageId;
  // Create New Message record
  const message = new Message({
    message: body,
    sentBy: sentBy,
    messageSent: timeSent,
    messageId: messageId
  });

  message.save(function(err) {
    if (err) {
      return next(err);
    }
  });

  // Send Successful response back
  res.send({ messageWasSent: true });
};

exports.getMessages = function(req, res, next) {
  // Get list of all User messages
  let userSort = {};
  if (req.params.user != 'all') {
    userSort = { sentBy: req.params.user };
  }
  Message.find(userSort, null, { sort: { messageSent: -1 } }, function(
    err,
    messages
  ) {
    if (err) {
      return next(err);
    }
    // return user messages
    res.json({ messages: messages });
  });
};

exports.deleteMessage = function(req, res, next) {
  Message.findOneAndRemove({
    messageId: req.params.id
  })
    .then(response => {
      res.json({ deleted: response });
    })
    .catch(err => {
      console.error(err);
    });
};
