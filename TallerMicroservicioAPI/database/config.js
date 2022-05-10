const mongoose = require('mongoose');  


const dbConection = async() => {  
        // create a new instance of the mongoose connection
        try {
                await mongoose.connect('mongodb+srv://horus19:NEHM1CzDs9Xavsis@soft3.xjbxh.mongodb.net/soft3');
                console.log('dbConection: OK');
        } catch (error) {
                throw new Error(error);
        }
}
module.exports = dbConection;