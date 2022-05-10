const { response } = require('express');

const User = require('../models/User');
const Lang = require('../models/language');
const {validationResult} = require('express-validator');


postLanguage = async (req, res= response) => {
    const errors = validationResult(req);

    // Check if there are errors   
    if(!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    }

    // Get the body of the request
    const body = req.body;
    const lang = new Lang({
        lang: body.lang,
        message: body.message
    });

    // Save the new language
    await lang.save();
    res.status(200).json({
        message: 'Lenguaje creado',
        lang
    });
}


module.exports = {
    postLanguage
};