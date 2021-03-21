const express = require('express')
const router = express.Router()
const User = require('../model/User')

// VALIDATION
const Joi = require('joi')
const { valid } = require('joi')

const schema = Joi.object({
    name: Joi.string()
    .min(6)
    .required(),
    email: Joi.string()
    .min(6)
    .required()
    .email(),
    password: Joi.string()
    .min(6)
    .required()
})

router.post('/signup', async (req, res) => {

    // LETS VALIDATE DATA BEFORE MAKING USER
    const {error} = schema.validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.email
    })
    try{
        const savedUser = await user.save()
        res.status(200).send(savedUser)
    } catch(err){
        res.status(400).send(err)
    }
})

module.exports = router