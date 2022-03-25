"use strict"

const nodemailer = require("nodemailer")

const { Profile, Platform, Subscribe, User } = require("../models")
const bcrypt = require("bcryptjs")
const sendemail = require("../helper/nodemailer")

class Controller {

    static getAddForm(req, res) {
                res.render("registrasi")     
    };
    static postAddRegister(req, res) {
        const {username, email, password} = req.body
        const newUser = {
            username,
            email,
            password
        }
        User.create(newUser)
            .then(() => {
                sendemail(email, username, password)
                res.redirect("/user/login")
            })
            .catch((err) => {
                res.send(err)
            })
    };

    static userLogin(req, res) {
        User.findAll()
            .then(() => {
                res.render("login")
            })
            .catch((err) => {
                res.send(err)
            })
    };
    static postUserLogin(req, res) {
        const { email, password } = req.body
        console.log(req.body)

        User.findOne({ where: { email } })
            .then(user => {
                if (user) {
                    const isValidPassword = bcrypt.compareSync(password, user.password)
                    if(isValidPassword){
                        return res.redirect("/profile")
                    } else {
                        const error = "invalid username/password"
                        return res.redirect(`/user/login?error=${error}`)
                    }
                } else {
                    const error = "invalid username/password"
                    return res.redirect(`/user/login=${error}`)
                }

            })
            .catch(err => { res.send(err) })
    };

    static profileUser(req, res) {
    
        Profile.findAll({
            include: User,
            order: [['id', 'DESC']]
        })
            .then((data) => {
                res.render("profile", { data })
            })
            .catch((err) => { res.send(err) })

    };

    static postProfileUser(req, res) {

        const { fullName, phoneNumber, UserId } = req.body
        console.log(req.body)
        const newProfile = {
            fullName,
            phoneNumber,
            UserId
        }
        Profile.create(newProfile, {
            include:{
                model: User,
                where: {
                    id: UserId
                }
            }
        })
            .then(() => {
                res.redirect("/platform")
            })
            .catch((err) => { res.send(err) })
    };

    static showPlatform (req, res){
        console.log('masuk sini');

        Platform.findAll()
        .then((data) => {
            res.render("showPlatform", {data})
        })
        .catch(err => {
            res.send(err)
        })

    }


//================================================== for admin
    static getAddPlatform (req, res) {
        Platform.findAll()
        .then((data) => {
            res.render("admin-add", {data})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static postAddPlatform (req, res) {
        const {name, price} = req.body
        const newPlatform = {
            name,
            price
        }
        Platform.create(newPlatform)
        .then(() => {
            res.redirect("/platform")
        })
        .catch(err => {res.send(err)})
    }

    static deletePlatform(req, res) {
        const id = req.params.id
        Platform.destroy({
            where: {id : id}
        })
        .then(data => {
            res.redirect('/platform')
        })
        .catch(err => {
            res.send(err)
        })
    }

    static getUpdate(req, res) {
        const id = req.params.id
        Platform.findByPk({
            where: {id : id}
        })
        .then(data => {
            res.render('updatePlatform', {data})
        })
        .catch(err => {
            res.send(err)
        })
    }
//================================================== for admin




    // static detailSubscribe (req, res){
    //     const {id} = req.params
    //     Platform.findOne(id, {
    //     include : [User],
    //     where: {
    //         id:id
    //     }
    // })
    // .then((data1) => {
    //     console.log(data1)
    //     // res.render("subscribes", {data1})
    // })
  
    // .catch(err => {res.send(err)})
    // }
};

module.exports = Controller