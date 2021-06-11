const Router = require("@koa/router");
const UserController = require("../Controllers/UserController");
const User = require("../Schemas/User");

const UserRouter = new Router({
  prefix: "/api/user",
});

//fetch all users
UserRouter.get("/", UserController.GetAllUsers);
//fetch user
UserRouter.get("/:id", UserController.GetUser);
//create new user
UserRouter.post("/", UserController.CreateUser);
//update user based on id
UserRouter.patch("/:id", UserController.UpdateUser);
//delete user
UserRouter.delete("/:id", UserController.DeleteUser);

module.exports = UserRouter;
