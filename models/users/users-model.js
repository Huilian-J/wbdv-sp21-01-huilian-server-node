const userSchema = require("./users-schema")
const mongoose = require("mongoose")
const usersModel = mongoose.model("UserModel", userSchema)
model.exports = usersModel