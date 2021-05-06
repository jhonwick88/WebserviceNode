let express = require('express'),
app = express(),
port = process.env.PORT || 3000;
bodyParser = require('body-parser');
let cors = require("cors");
var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(bodyParser.json());

const dbConfig = require('./api/config/db.config.js');
const db = require('./api/models');
const Role = db.role;

let url = `mongodb+srv://${dbConfig.user}:${dbConfig.password}@${dbConfig.host}/${dbConfig.database}?retryWrites=true&w=majority`;

const createRole = () => {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "moderator"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
};

db.mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
    createRole();
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

var routes = require('./api/routes/listRoutes'); //importing route
routes(app); //register the route
app.listen(port);
console.log('Server running on port '+port);