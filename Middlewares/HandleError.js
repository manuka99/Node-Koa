const Mongoose = require("mongoose");

function* HandleError(next) {
  try {
    yield next;
  } catch (err) {
    if (err instanceof Mongoose.Error) {
      this.status = err.status || 422;
      this.body = err;
      this.app.emit("error", err, this);
    } else console.log(err);
  }
}
module.exports = HandleError;
