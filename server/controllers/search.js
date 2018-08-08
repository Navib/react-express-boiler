const Message = require('../models/message');

exports.getSearchMessageQuery = function(req, res, next) {
  Message.find(
    { message: { $regex: req.params.query, $options: 'ix' } },
    function(err, messages) {
      if (err) {
        return next(err);
      }
      res.status(200).json({ messages: messages });
    }
  );
};
