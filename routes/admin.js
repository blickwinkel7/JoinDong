"use strict"


const express = require("express")
const router = express.Router()
const Controller = require("../controllers")

router.get("/")
router.get("/add", Controller.getAddPlatform)
router.post("/add", Controller.postAddPlatform)
router.get("/update/:id", Controller.getUpdate)
router.get("/delete/:id", Controller.deletePlatform)

module.exports = router