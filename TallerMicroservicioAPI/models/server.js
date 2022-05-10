const express = require("express");
var cors = require('cors');
const mongoose = require('mongoose');  // Mongoose para mongodb
const dbConection = require('../database/config');

class Server {

    constructor() {
        this.app = express();
        this.port = 3000;      
        this.conectarDB();      //Conectar a la base de datos                    
        this.middlewares();     //Cargar middlewares             
        this.routes();  //routes        
    }

    async conectarDB(){
        await dbConection();
    }

    middlewares() {
        this.app.use(cors());
        //Parsear el body de las peticiones
        this.app.use(express.json());
    }

    routes() {
        this.app.use('/api/v1/users', require('../routes/user'));
        this.app.use('/api/v1/lang', require('../routes/lang'));
    }

    listen() {
        this.app.listen(this.port);
    }
}

module.exports = Server;