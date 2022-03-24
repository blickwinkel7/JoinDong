"use strict"

const express = require("express")
const router = express.Router()
const adminRoute = require("./admin")
const userRoute = require("./user")

router.use("/admin", adminRoute)
router.use("/user", userRoute)

router.get("/", (req, res) => {
    res.render("home")
})


module.exports = router