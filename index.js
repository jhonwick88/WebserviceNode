let express = require('express'),
app = express(),
port = process.env.PORT || 3000;
mongoose = require('mongoose'),
Task = require('./api/models/listModel'); //created model loading here
bodyParser = require('body-parser');
const uri = "mongodb+srv://admin:admin@cluster0.lz8m4.mongodb.net/Tododb?retryWrites=true&w=majority";
//const uri = "mongodb://localhost/Tododb";
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }); 
var db = mongoose.connection;
// Added check for DB connection
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

// const MongoClient = require('mongodb').MongoClient;
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// //client.connect();
// client.connect(err => {
//  // console.log('Connectedddddd');
//  //  var cursor = db.collection('tasks').find();
//  // cursor.each(function(err, doc) {
//  //     console.log(doc);
//  // });
//   const collection = client.db("Tododb").collection("tasks");
//   collection.find().toArray(function(err, items) {
//     if(err) throw err;    
//     console.log(items);            
// });
  //const collection = client.db("sample_airbnb").collection("listingsAndReviews");

//   collection.forEach(function(err, doc) {
//     console.log(doc);
// });
  // perform actions on the collection object
  //client.close();
//});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(function(req, res) {
//     res.status(404).send({url: req.originalUrl + ' not found'})
//   });


var routes = require('./api/routes/listRoutes'); //importing route
routes(app); //register the route
app.listen(port);
console.log('Server running on port '+port);