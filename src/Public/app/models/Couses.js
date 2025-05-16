const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
var mongooseDelete = require('mongoose-delete');

const Couses = new Schema({
    name: { type: String, maxLength:255},
    description: { type: String, maxLength:600},
    video_id: { type: String, maxLength:600},
    level: { type: String, maxLength:600},
    image: { type: String, maxLength:255},
    slug: { type: String, slug: 'name', unique: true},
}, {timestamps: true});

mongoose.plugin(slug);
Couses.plugin(mongooseDelete, { deletedAt: true, overrideMethods: 'all' });
module.exports =  mongoose.model('Couses', Couses);