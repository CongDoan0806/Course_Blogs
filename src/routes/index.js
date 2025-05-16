const newsRouter = require('./news');
const meRouter = require('./me');
const coursesRouter = require('./courses');
const siteRouter = require('./site');
const mailRouter = require('./mail');
const momoRouter = require('./momo');

function route(app){
      app.use('/news', newsRouter); // sử dụng router news để xử lý các request đến /news
      app.use('/courses', coursesRouter); // sử dụng router news để xử lý các request đến /news
      app.use('/mail', mailRouter); // sử dụng router news để xử lý các request đến /news
      app.use('/me', meRouter); // sử dụng router news để xử lý các request đến /me
      app.use('/momo', momoRouter); // sử dụng router news để xử lý các request đến /me
      app.use('/', siteRouter); // sử dụng router news để xử lý các request đến /news
      
      
}

module.exports = route;