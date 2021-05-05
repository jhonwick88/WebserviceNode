'use strict';

// var mongoose = require('mongoose'),
// Campaign = mongoose.model('Campaigns'); 

const db = require('../models');
const Campaign = db.campaign;
const getPagination = (page, size) => {
    const limit = size ? +size : 10;
    const offset = page ? page * limit : 0;
  
    return { limit, offset };
  };

function mainRes(data,res,code,msg){
    res.json({
        code : code,
        message: msg,
        data : data,
    });
}

// Handle index actions

exports.list_all_campaign = function(req, res) {
const { page, size, q } = req.query;
  var condition = q
    ? { name: { $regex: new RegExp(q), $options: "i" } }
    : {};

  const { limit, offset } = getPagination(page, size);

  Campaign.paginate(condition, { limit, offset })
  .then((data) => {
    res.send({
      current_page: data.page - 1,
      data: data.docs,
      last_page: data.totalPages - 1,
      per_page: limit,
      total: data.totalDocs
    });
  })
  .catch((err) => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving tutorials.",
    });
  });

    // Campaign.find({}, function(err, task) {
    //   if (err){
    //    mainRes(err,res,-1,'error');
    //    //res.send(err);
    //   }
        
    //     mainRes(task,res,0,'success');
    // });
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

