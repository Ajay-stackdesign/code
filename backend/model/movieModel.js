const mongoose = require("mongoose")


const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "please eneter the movie name"],
    },
    rating: {
        type: Number,
        required: [true, "Please eneter the rating"]
    },
    released_date: {
        type: Date,
        required: [true, "Please enter the released data"]
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = new mongoose.model("Movie", movieSchema)