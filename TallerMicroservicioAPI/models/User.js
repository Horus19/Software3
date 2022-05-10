
const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    lang: {
        type: String,
        required: true,
    },
});

module.exports = model( 'Usuario', UsuarioSchema );