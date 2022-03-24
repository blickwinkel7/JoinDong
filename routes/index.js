"use strict"

const express = require("express")
const router = express.Router()
const adminRoute = require("./admin")
const userRoute = require("./user")
const profileRoute = require("./profile")
const platformRoute = require("./platform")

router.use("/user", userRoute)
router.use("/admin", adminRoute)
router.use("/profile", profileRoute)
router.use("/platform", platformRoute)

router.get("/", (req, res) => {
    res.render("first-page")
})


module.exports = router