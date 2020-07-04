const mongoose = require("mongoose")
const {Schema, Types} = mongoose
const BusinessSchema = new Schema({
    userId:{type:Types.ObjectId, ref:"User"},
    businessName:{type:String, required:"Business Name is required"},
    address:{type:String, required:true},
    phoneNumber:{type:String, required:true}
},{
    timestamps:true
})
const Business = mongoose.model("Business",BusinessSchema)
module.exports = Business