const Koa = require("koa");
const bodyparser = require("koa-bodyparser");
const UserRouter = require("./Routes/UserRoutes");
const Mongoose = require("mongoose");
const HandleError = require("./Middlewares/HandleError");
require("dotenv").config();

// koa init
const app = new Koa();

app.use(bodyparser());

//Error handling middleware
app.use(HandleError);

app.use(UserRouter.routes()).use(UserRouter.allowedMethods());

const StartApp = async () => {
  try {
    // connect mongo db
    await Mongoose.connect(process.env.APP_DB, {
      useFindAndModify: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Connected to database");
    // listen to koa app
    app.listen(process.env.APP_PORT, () =>
      console.log("App is running on port", process.env.APP_PORT)
    );
  } catch (error) {
    console.log("Database Error");
    StartApp();
  }
};

StartApp();
