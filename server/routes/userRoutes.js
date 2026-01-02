const userController = require("../controller/userController")
const express = require("express")

const routes = express.Router()

routes.post('/postData', userController.user)
routes.get('/getData' , userController.readUser)
routes.get('/getData/:id', userController.readUserById)
routes.post("/postAuthData", userController.postAuthUser)
routes.post("/LoginUser", userController.LoginUser)
routes.post("/authToken", userController.postUser)
routes.patch('/updateUserData/:id', userController.userUpdate)
routes.delete('/deleteUser/:id', userController.deleteUser)
routes.post("/order",userController.paymentIntegration)
routes.post("/order/validate",userController.validateOrder)

 
module.exports = routes

