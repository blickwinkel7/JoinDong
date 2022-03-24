"use strict"

const express = require("express")
const router = express.Router()
const Controller = require("../controllers")

router.get("/", Controller.profileUser)
router.post("/", Controller.postProfileUser)

module.exports = router