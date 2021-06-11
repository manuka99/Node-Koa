const User = require("../Schemas/User");

exports.GetAllUsers = async (ctx) => {
  return (ctx.body = await User.find());
};

exports.GetUser = async (ctx) => {
  return (ctx.body = await User.findById(ctx.params.id));
};

exports.CreateUser = async (ctx) => {
  return (ctx.body = await User.create(ctx.request.body));
};

exports.UpdateUser = async (ctx) => {
  return (ctx.body = await User.findOneAndUpdate(ctx.request.body));
};

exports.DeleteUser = async (ctx) => {
  return (ctx.body = await User.findOneAndDelete(ctx.params.id));
};
