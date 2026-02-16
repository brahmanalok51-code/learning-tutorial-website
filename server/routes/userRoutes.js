const userController = require("../controller/userController")
const express = require("express")

const routes = express.Router()



routes.post("/postAuthData", userController.postAuthUser)
routes.post("/LoginUser", userController.LoginUser)
routes.post("/authToken", userController.postUser)
routes.post("/Order",userController.createOrder)
routes.post("/order/validate",userController.validateOrder)
routes.post("/contact", userController.saveMessage)

 
module.exports = routes

