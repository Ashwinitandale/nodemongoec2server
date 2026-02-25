const mongoose = require('mongoose');

let userScheema = new mongoose.Schema({

    name: {
        type: String,
        require: true

    },
    email: {
        type: String,
        require: true

    },
    department: {
        type: String

    }
}, { timestamps: true })

module.exports = mongoose.model('users', userScheema)