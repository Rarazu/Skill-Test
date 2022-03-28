const express = require(`express`)
const app = express()
app.use(express.json())

let userController = require(`../controllers/userController`)

app.get("/", userController.getDataUser)
app.post("/", userController.addDataUser)
app.post("/auth", userController.authentication)

module.exports = app