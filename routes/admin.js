"use strict"


const express = require("express")
const router = express.Router()
const Controller = require("../controllers")

router.get("/")
router.get("/add", Controller.getAddPlatform)
router.post("/add", Controller.postAddPlatform)

module.exports = router