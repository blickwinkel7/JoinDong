"use strict"


const express = require("express")
const router = express.Router()
const Controller = require("../controllers")

router.get("/")
router.get("/add")

module.exports = router