const Message = require('../models/message');

exports.sendMessage = function(req, res, next) {
  console.log('req', req.body);
  const body = req.body.body;
  const sentBy = req.body.sentBy;
  const timeSent = req.body.timeSent;
  // Create New Message record
  const message = new Message({
    message: body,
    sentBy: sentBy,
    messageSent: timeSent
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
  console.log('Get Message route', req.params.user);
  Message.find(
    { sentBy: req.params.user },
    null,
    { sort: { messageSent: -1 } },
    function(err, messages) {
      if (err) {
        return next(err);
      }
      // return user messages
      res.json({ messages: messages });
    }
  );
};
