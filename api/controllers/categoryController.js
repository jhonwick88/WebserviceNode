const db = require('../models');
Category = db.category;

exports.list_all_category = (req, res) => {
    const { q } = req.query;
    var condition = q
    ? { name: { $regex: new RegExp(q), $options: "i" } }
    : {};

    Category.find(condition,(err,data) => {
        if (err)
        db.sendJson(res,-1,'error',err);
      
        db.sendJson(res,0,'Success',data);
    });
};

exports.create_many_category = (req, res) => {
    Category.insertMany(req.body, (err) => {
        if (err)
        db.sendJson(res,-1,'error',err);
      
        db.sendJson(res,0,'Task all saved','');
    });
};

exports.create_a_category = (req, res) => {
    Category.create(req.body, (err) => {
        if (err)
        db.sendJson(res,-1,'error',err);
      
        db.sendJson(res,0,'Task saved','');
    })
};