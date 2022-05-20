const express = require("express")
const { movieCreate, getMovie } = require("../controller/movieontroller")

const router = express.Router()

router.route("/movie").post(movieCreate)
router.route("/movie/get").get(getMovie)




module.exports = router