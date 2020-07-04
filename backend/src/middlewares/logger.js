const {API_KEY} = require("../config")
exports.logger = (req, res, next)=>{
    req.appID = API_KEY
    next()
}