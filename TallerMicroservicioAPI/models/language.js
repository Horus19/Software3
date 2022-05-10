const { Schema , model }  = require('mongoose');
const langSchema = Schema({
    lang: {
        type: String,
        required: true,
    },
    message : {
        type: String,
        required: true,
    }
});
module.exports = model('lang', langSchema);



