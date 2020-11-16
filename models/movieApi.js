const mongoose = require('mongoose');

const movieApiSchema = new mongoose.Schema({
    movie: {
        type: String 
    }

})

module.exports = mongoose.model('MovieApi', movieApiSchema)