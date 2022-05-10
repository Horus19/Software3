const { Router } = require('express');
const { check } = require('express-validator');
const Lang = require('../models/language');
const { 
    newUser,
    greetUser
 } = require('../controllers/user');
const router = Router(); 


router.post('/user', [
    check('name', 'the name cannot be empty').not().isEmpty(),
    check('lang', 'the lang cannot be empty').not().isEmpty(),
    // valida si el lang existe en la base de datos
    check('lang').custom( async (lang = '') => {
        const langExist = await Lang.findOne({lang});
        if(!langExist) {
            throw new Error('the lang must be a valid lang');
        }
    })
],newUser);

router.get('/greeting/:user', [
    check('user', 'the user cannot be empty').not().isEmpty(),
], greetUser);

module.exports = router;