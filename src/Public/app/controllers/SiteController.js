const Course = require('../models/Couses');
const {multipleMongooseToObject} = require('../../../util/mongoose');
class SiteController {
    // GET, news
    index(req, res, next){
        Course.find({})
            .then(courses => {
               
                res.render('home', {
                    courses: multipleMongooseToObject(courses)});
            })
            .catch(next);
    }
    search(req, res){
        res.render('search');
    }
}

module.exports = new SiteController; // exports cais gif thif khi require thì nhận được cái đấy