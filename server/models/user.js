const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 6,
        maxlength: 128
    },
    profile: {
        name: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 128
        }
    }
});