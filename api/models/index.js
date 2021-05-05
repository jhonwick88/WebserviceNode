const dbConfig = require('../config/db.config.js');
const mongoose = require('mongoose');
const mongoPaginate = require('mongoose-paginate-v2');

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.campaign = require('./campaign.js')(mongoose,mongoPaginate);
db.task = require('./listModel')(mongoose,mongoPaginate);
module.exports = db;