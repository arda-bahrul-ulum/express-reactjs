//import express
const express = require("express");

//init express router
const router = express.Router();

//import verifyToken
const verifyToken = require("../middleware/auth");

//import register controller
const registerController = require("../controllers/RegisterController");

//import login controller
const loginController = require("../controllers/LoginController");

//import user controller
const userController = require("../controllers/UserController");

//import validate register and login
const { validateRegister, validateLogin } = require("../utils/validators/auth");

//import validate user
const { validateUser } = require("../utils/validators/user");

//define route for register
router.post("/register", validateRegister, registerController.register);

//define route for login
router.post("/login", validateLogin, loginController.login);

//define route for user
router.get("/users", verifyToken, userController.findUsers);

//define route for user create
router.post(
  "/users/create",
  verifyToken,
  validateUser,
  userController.createUser
);

//define route for user by id
router.get("/users/find/:id", verifyToken, userController.findUserById);

//define route for user update
router.put(
  "/users/update/:id",
  verifyToken,
  validateUser,
  userController.updateUser
);

//define route for user delete
router.delete("/users/delete/:id", verifyToken, userController.deleteUser);

//export router
module.exports = router;
