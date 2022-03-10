const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://mana:mana_123@cluster0.duupc.mongodb.net/fw12345?retryWrites=true&w=majority"
  );
};

module.exports = connect;
