const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String
    },
    password: {
        type: String,
        required: [true, 'Password is required!']
    },
    bought: [{
        type: mongoose.Types.ObjectId,
        ref: 'Offer'
    }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;