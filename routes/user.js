"use strict"

const express = require("express")
const router = express.Router()
const Controller = require("../controllers")

// router.get("/", Controller.register)
router.get("/", Controller.getAddForm)
router.post("/", Controller.postAddRegister)

module.exports = router