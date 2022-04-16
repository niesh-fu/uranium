const UserModel = require("../models/userModel.js")
 const createUser = async function (req, res) {
    let data = req.body
    let saveData = await UserModel.create(data)
    res.send({ msg: saveData })

}
const getUsersData = async function (req, res) {
    let allUsers = await UserModel.find()
    res.send({ msg: allUsers }) // send back the data in response
}
module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
