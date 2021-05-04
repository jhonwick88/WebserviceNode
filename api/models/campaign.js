'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let CampaignSchema = new Schema({
    uuid: { type : String },
    name:{
        type: String,
        required: 'Name required'
    },
    description:{ type: String },
    url: { 
        type: String,
        required: 'Url required',
    },
    CampaignCreatorUuid: { type: String },
    CountryId: { type: Number },
    CampaignCreator: {
        name: {type : String},
        username: {type : String}
    },
    CampaignHit:{
        hit: { type: Number }
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    updateAt:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Campaigns', CampaignSchema);