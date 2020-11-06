const mongoose = require('mongoose');

const movieListSchema = new mongoose.Schema({
    name: {
        type: String
    },
    category: {
        type: String
    },
    movieID: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
    }, {
        timestamps: true
    }
);

module.exports = mongoose.model('MovieList', movieListSchema)