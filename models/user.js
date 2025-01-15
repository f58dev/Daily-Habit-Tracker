const mongoose = require("mongoose");

const HabitSchema = new mongoose.Schema({
  habits: {
    type: String, 
  },
  title: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
  },
  postingLink: {
    type: String,
  },
  status: {
    type: String,
    enum: ['not_started', 'in_progress', 'completed', 'skipped'],
  },
});

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  habits: [HabitSchema], 
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
