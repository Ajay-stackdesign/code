
const Movies = require("../model/movieModel")

exports.movieCreate = async (req, res, next) => {
    try {
        const movie = await Movies.create(req.body)

        res.status(201).json({
            success: true,
            movie
        })
    } catch (err) {
        res.status(200).json(err)
    }
}


exports.getMovie = async (req, res, next) => {
    try {
        const movie = await Movies.find()

        res.status(201).json({
            success: true,
            movie
        })
    } catch (err) {
        res.status(200).json(err)
    }
}