const Message = require('../models/message');

const query = 'donald';

exports.getSearchMessageQuery = function(req, res, next) {
  Message.find({ message: { $regex: query, $options: 'ix' } }, function(
    err,
    messages
  ) {
    if (err) {
      return next(err);
    }
    res.status(200).json({ messages: messages });
  });
};
