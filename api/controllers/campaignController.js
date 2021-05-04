'use strict';

var mongoose = require('mongoose'),
Campaign = mongoose.model('Campaigns'); 

function mainRes(data,res,code,msg){
    res.json({
        code : code,
        message: msg,
        data : data,
    });
}

// Handle index actions

exports.list_all_campaign = function(req, res) {
    Campaign.find({}, function(err, task) {
      if (err){
       mainRes(err,res,-1,'error');
       //res.send(err);
      }
        
        mainRes(task,res,0,'success');
    });
};
exports.create_many_campaign = function(req, res){
    Campaign.insertMany(req.body, function(err){
        if (err)
        mainRes(err,res,-1,'error');

      res.json({ message: 'Task successfully saved' });
        // if (err){
        //     mainRes(err,res,-1,'error');
        //      // res.send(err);
        //     }
              
              //mainRes(task,res,0,'success');
    });
  };

