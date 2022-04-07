const mongoose = require('mongoose');
const { MONGODB_URI } = require('../config');

//Coneccion a Base de datos
module.exports = {
    connection: null,
    connect: function () {
        if (this.connection) return this.connection;
        return mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            autoIndex: false,
        }).then(connection => {
            this.connection = connection;
            console.log(`MongoDB is running on ${MONGODB_URI}`);
        }).catch(err => {
            console.error(err);
            console.log('MongoDB connection error.');
        });
    }
}