const mongoose = require("mongoose")
const usersSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    username: String,
    password: String
}, {collection: "users"})

module.exports = usersSchema