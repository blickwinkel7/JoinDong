"use strict"

const express = require("express")
const router = express.Router()
const Controller = require("../controllers")

// router.get("/", Controller.register)
router.get("/", Controller.getAddForm)
router.post("/", Controller.postAddRegister)
router.get("/login", Controller.userLogin)
router.post("/login", Controller.postUserLogin)

module.exports = router