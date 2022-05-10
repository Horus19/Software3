const { response } = require('express');

const User = require('../models/User');
const Lang = require('../models/language');
const {validationResult} = require('express-validator');

const newUser = async (req, res= response) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    }
    const body = req.body;
    const user = new User({
        name: body.name,
        lang: body.lang
    });

    await user.save();

    res.status(200).json({
        message: "user created",
        user
    });
}   

const greetUser = async (req, res= response) => {
    const {user} = req.params;
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    }
    const userExist = await User.findOne({name: user});
    if(!userExist) {
        return res.status(400).json({
            ok: false,
            errors: {
                message: "the user doesn't exist"
            }
        });
    }
    const language = await Lang.findOne({lang: userExist.lang});

    res.status(200).json({
        message: `${language.message} ${userExist.name}`,
    })
}


module.exports = {
    greetUser,
    newUser
};