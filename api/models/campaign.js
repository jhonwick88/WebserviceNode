'use strict';
module.exports = (mongoose, moongoPaginate) => {
    let CampaignSchema =  mongoose.Schema({
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
            type: String        
        },
        updateAt:{
            type: String        
        }
    });
    CampaignSchema.plugin(moongoPaginate);
    let campaign = mongoose.model('Campaigns', CampaignSchema);
    return campaign;
}