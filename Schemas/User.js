const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    firstname: {
      type: String,
      required: [true, "Firstname is requred!"],
      minlength: [4, "Firstname must have at least 4 characters"],
      maxlength: [8, "Firstname must have at least 4 characters"],
    },
    role: {
      type: String,
      required: true,
      enum: ["user", "admin"],
    },
  },
  { timestamps: true }
);

const User = model("User", UserSchema);
module.exports = User;
