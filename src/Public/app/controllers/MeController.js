const Course = require('../models/Couses');
const {multipleMongooseToObject} = require('../../../util/mongoose');
class MeController {
    // GET, Me
    storedCourses(req, res, next){
        Course.find({})
            .then(courses => {    
                res.render('me/stored-courses', {
                    courses: multipleMongooseToObject(courses)});
            })
            .catch(next);
    }
    trashCourses(req, res, next){
        Course.findDeleted()
            .then(courses => {    
                res.render('me/trash-courses', {
                    courses: multipleMongooseToObject(courses)});
            })
            .catch(next);
    }
}

module.exports = new MeController; // exports cais gif thif khi require thì nhận được cái đấy