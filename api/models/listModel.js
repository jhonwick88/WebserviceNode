'use strict';
module.exports = (mongoose, mongooPaginate) => { 
    let TaskSchema = mongoose.Schema({
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
    TaskSchema.plugin(mongooPaginate);
    let task = mongoose.model('Tasks', TaskSchema);
    return task;
}