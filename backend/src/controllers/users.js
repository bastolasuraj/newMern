const {User} = require("../models")
const bcrypt = require("bcrypt")
const {sign, verify} = require("jsonwebtoken")
const {ACCESS_TOKEN,ACCESS_EXPIRY,REFRESH_TOKEN,REFRESH_EXPIRY} = require("../config")
exports.userList = async (req, res) => {
    const list = await User.find()
    res.status(200).send({
        data: list,
    })
}
exports.createUser = (req, res) => {
    console.log(req.body)
    new User(req.body)
        .save()
        .then((newUser) => {
            res.status(301).send({
                message: "Users Created Successfully",
                data: newUser,
            })
        })
        .catch((error) => {
            res.status(500).send({
                data: null,
                error: error.message
            })
        })
}
exports.updateUser = async (req, res) => {
    let user = await User.findById(req.params.id)
    if(user){
        console.log(req.body)
        user = await User.updateOne({_id: req.params.id},{$set:req.body})
    }
    res.send({
        data:user,
    })
}
exports.deleteUser = async (req, res) => {
    let user = await User.findById(req.params.id)
    if(user){
        user = await User.remove({_id:req.params.id})
    }
    res.send({
        data:user,
    })
}
exports.userDetail = async (req, res) => {
    const user = await User.findById(req.params.id)
    res.status(200).send({
        data: user,
    })
}
exports.login = async (req, res)=>{
    const user = await User.findOne({username: req.body.username})
    if(user) {
        let accessToken
        let refreshToken
        bcrypt.compare(req.body.password, user.password, (error, matched) => {
            if (error) throw new Error("Password Mismatched")
            if (matched) {
                accessToken = sign({
                    userId: user.id,
                    type: "accessToken"
                }, ACCESS_TOKEN, {expiresIn: ACCESS_EXPIRY})
                refreshToken = sign({
                    userId: user.id,
                    type: "refreshToken"
                }, REFRESH_TOKEN, {expiresIn: REFRESH_EXPIRY})
            }
            res.status(200).send({
                accessToken: accessToken,
                refreshToken: refreshToken,
                username: user.username,
                expiresIn: ACCESS_EXPIRY,
                usertype: user.usertype ? user.usertype : "Customer"
            })
        })
    }else {
        res.status(401).send({
            status: 401,
            data: null,
            message: "Unauthorized Access",
        });
    }
}