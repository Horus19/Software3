const { Router } = require('express');
const { check } = require('express-validator');
const Lang = require('../models/language');
const { postLanguage } = require('../controllers/lang');
const router = Router(); 

router.post('/newLang', [
    check('message', 'the message cannot be empty').not().isEmpty(),
    check('lang', 'the lang cannot be empty').not().isEmpty(),
], postLanguage);

module.exports = router;