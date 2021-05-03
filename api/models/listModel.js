'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let TaskSchema = new Schema({
    name:{
        type: String,
        required: 'Enter the name please'
    },
    Created_date:{
        type: Date,
        default: Date.now
    },
    status:{
        type:[
            {
                type: String,
                enum: ['pending','ongoing','complete']
            }
        ],
        default: ['pending']
    }
});

module.exports = mongoose.model('Tasks', TaskSchema);