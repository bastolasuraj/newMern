const {verify} = require("jsonwebtoken")
const {ACCESS_TOKEN} = require("../config")
const {User} = require("../models")
exports.auth = (req, res, next)=>{
    const authorization = req.headers.authorization
    console.log(authorization)
    // if(req.path==="/api/login"){
    //     next()
    //     return
    // }
    if(!authorization){
        throw new Error("No Access Tokens Generated")
    }
    const accessToken = authorization.split(" ")[1]
    // console.log(accessToken)
    const payload = verify(accessToken,ACCESS_TOKEN)
    console.log(payload)
    if(!payload){
        throw new Error("Access Token Not Verified")
    }
    if(payload.type!=='accessToken'){
        throw new Error("Forced Entry Exercised")
    }
    User.findById(payload.userId).then((user)=>{
        if(!user){
            throw new Error("Not a registered Users")
        }
    })

    next()

}
exports.roleChecker = (req, res, next)=>{
    next()
}