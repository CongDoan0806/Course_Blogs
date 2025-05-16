const Course = require('../models/Couses');
const {mongooseToObject} = require('../../../util/mongoose');
class CourseController {
    // GET, /course/:course
    show(req, res, next){
        Course.findOne({slug: req.params.slug})
            .then(course => {
                res.render('courses/show', {course: mongooseToObject(course)});
            })
            .catch(next)
    }
    create(req, res, next){
        res.render('courses/create')
    }
    store(req, res, next){
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${formData.video_id}/sddefault.jpg`;
        const course = new Course(formData);
        course.save()
            .then(() => res.redirect('/'))
            .catch(next)
    }
    edit(req, res, next){
        Course.findById(req.params.id)
           .then(course => {
                res.render('courses/edit', {course: mongooseToObject(course)});
            })
           .catch(next)
    }
    update(req, res, next){
        const formData = req.body;
        Course.findByIdAndUpdate(req.params.id, formData, {new: true})
           .then(course => res.redirect(`/me/stored/courses`))
           .catch(next)
    }
    destroy(req, res, next){
        Course.delete({ _id: req.params.id })
           .then(() => res.redirect('back'))
           .catch(next)
    }
}

module.exports = new CourseController; // exports cais gif thif khi require thì nhận được cái đấy