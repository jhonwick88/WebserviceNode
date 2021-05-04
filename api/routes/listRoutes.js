'use strict';
module.exports = function(app){
    let todoList = require('../controllers/listController');
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
  app.get('*', (req, res)=>{
    res.status(404).send({url: req.originalUrl + ' not found'})
})
};