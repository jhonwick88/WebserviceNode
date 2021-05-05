const mongoose = require('mongoose'); //const dbConfig = require('../config/db.config.js');
const mongoPaginate = require('mongoose-paginate-v2');

mongoose.Promise = global.Promise;
const sendResponse = (res,code,msg,data) => {
    res.json({
        code : code,
        message: msg,
        data : data,
    });
}
const db = {};
db.mongoose = mongoose;
//db.url = "mongodb+srv://admin:admin@cluster0.lz8m4.mongodb.net/Tododb?retryWrites=true&w=majority",
db.campaign = require('./campaign.js')(mongoose,mongoPaginate);
db.task = require('./listModel')(mongoose,mongoPaginate);
db.category = require('./category')(mongoose);
db.user = require('./user')(mongoose);
db.role = require('./role')(mongoose);
db.ROLES = ["user","admin","moderator"];
db.sendJson = sendResponse;
module.exports = db;