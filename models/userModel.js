const mongoose = require('mongoose');
const bcrpt = require('bcrypt');

var userSchema = new mongoose.Schema({
    lastName:{
        type: String,
        required: true
    },
    firstName: {
        type:String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role:{
        type: String,
        default: 'user'
    }
});

userSchema.pre("save", async function(next) {
    const salt = await bcrpt.genSaltSync(10);
    this.password = await bcrpt.hash(this.password, salt);
});

userSchema.methods.passwordMatched = async function(passwordEntered){
    return await bcrpt.compare(passwordEntered, this.password);
}


module.exports = mongoose.model("User", userSchema);