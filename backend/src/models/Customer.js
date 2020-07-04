const mongoose = require("mongoose")
const {Schema, Types} = mongoose
const CustomerSchema = new Schema({
    userId: {type: Types.ObjectId, ref: "User"},
    address: {type: String, required: "Address is required"},
    phoneNumber: {type: String, required: "Phone Number is required"},
}, {
    timestamps: true
})
const Customer = mongoose.model("Customer", CustomerSchema)
module.exports = Customer