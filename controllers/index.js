"use strict"
const {Profile, Platform, Subscribe, User} = require("../models")
class Controller {

    static getAddForm (req, res) {
        User.findAll()
        .then(() => {
            res.render("registrasi")
        })
        .catch((err) => {
            res.send(err)
        })
    }
    static postAddRegister (req, res) {
        const{ email, password} = req.body
        const newUser = {
            email, 
            password
        }
        User.create(newUser)
        .then(() => {
            res.redirect("/login")
        })
        .catch((err) => {
            res.send(err)
        })
    }
    static showPlatform (req, res){

    }
    static showPlatform (req, res){

    }
    static showPlatform (req, res){

    }
    static showPlatform (req, res){

    }
    static showPlatform (req, res){

    }
};

module.exports = Controller