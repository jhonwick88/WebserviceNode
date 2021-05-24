'use strict';
const { authJwt, verifySignUp } = require('../middlewares');
let todoList = require('../controllers/listController');
let campaign = require('../controllers/campaignController');
let category = require('../controllers/categoryController');
const register = require('../controllers/authController');
const userAccess = require('../controllers/userController');

module.exports = function(app){
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  //Authentication for test
  app.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    register.signup
  );
  app.post("/api/auth/signin", register.signin);

  //Authorization 
  app.get("/api/test/all", userAccess.allAccess);
  app.get("/api/test/user", [authJwt.verifyToken], userAccess.userBoard);
  app.get(
    "/api/test/mod",
    [authJwt.verifyToken, authJwt.isModerator],
    userAccess.moderatorBoard
  );

  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    userAccess.adminBoard
  );
  // end auth
  // category no token
  app.route('/api/category')
    .get(category.list_all_category)
    .post(category.create_a_category);

  app.use(authJwt.verifyToken);
    app.route('/').get((req, res) => res.end('Welcome to my api !'));
    app.route('/tasks')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task);
    //.post(todoList.create_a_many);
    app.route('/many/tasks').post(todoList.create_a_many);
    
  app.route('/tasks/:taskId')
  .get(todoList.read_a_task)
  .put(todoList.update_a_task)
  .delete(todoList.delete_a_task);
    app.get('/coba', (req, res)=>{
      res.json({ message: 'OKees' });
  });
 
  // campaign
  app.route('/api/campaign')
    .get(campaign.list_all_campaign);

  app.use([authJwt.verifyToken,authJwt.isAdmin]);
  app.route('/api/many/campaign').post(campaign.create_many_campaign);
  app.route('/api/many/category').post(category.create_many_category);


  app.get('*', (req, res)=>{
    res.status(404).send({url: req.originalUrl + ' not found'})
})
};