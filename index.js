bodyParser = require('body-parser');
const db = require('./api/models');
let express = require('express'),
app = express(),
port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

var routes = require('./api/routes/listRoutes'); //importing route
routes(app); //register the route
app.listen(port);
console.log('Server running on port '+port);