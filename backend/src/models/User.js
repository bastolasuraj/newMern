const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const {Schema} = mongoose
const UserSchema = new Schema({
    username: {type: String, required: "Username is required", unique: true},
    password: {type: String, required: "Password is required"},
    usertype: {type: String, enum: ['Customer', 'Business', 'SuperUser'], default: "Customer"}
}, {
    timestamps: true
})
UserSchema.pre('save', function (next) {
    const user = this
    if (!user.isModified('password')) next()
    bcrypt.hash(this.password, 12, function (error, hashed) {
        if (error) throw new Error("Password Hash Unsuccessful")
        user.password = hashed
        next()
    })
})
module.exports = mongoose.model('User', UserSchema)