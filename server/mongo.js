const mongoose = require("mongoose");
const DB =
  "mongodb+srv://Ankitha:ankitha@cluster0.zxuiba0.mongodb.net/taskmanager?retryWrites=true&w=majority";
mongoose
  .connect(DB, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log("mongoDB connected");
  })
  .catch((error) => {
    console.log("Failed to connect");
  });

const newSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cpassword: {
    type: String,
    required: true,
  },
});

const collection = mongoose.model("users", newSchema);
module.exports = collection;
