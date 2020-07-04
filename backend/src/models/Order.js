const mongoose = require ("mongoose")
const {Types, Schema} = mongoose
const OrderSchema = new Schema({
    userId:{type:Types.ObjectId, ref:"User"},
    businessId:{type:Types.ObjectId, ref:"Business"},
    customerId:{type:Types.ObjectId, ref:"Customer"},
    productId:{type:Types.ObjectId, ref:"Product"},
    quantity:{type:Number, required:true,default:0},
    amount:{type:Number, required:true,default:0},
    address:{type:String, required:true},
    phoneNumber:{type:String, required:true}
},{
    timestamps:true
})
const Order = mongoose.model("Order",OrderSchema)
module.exports = Order