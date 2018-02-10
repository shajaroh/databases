var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get().then(function(results) {
        res.send({results: results});
      });
    }, 


    // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req.body).then(function(results) {
        res.send(results);
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log(req.body);
    },
    post: function (req, res) {
      console.log(req.body);
      models.users.post(req.body);
    }
  }
};

