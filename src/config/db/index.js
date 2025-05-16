const mongoose = require('mongoose');

async function connect (){
    try {
        await mongoose.connect('mongodb+srv://doantran26:Doan0806%40@doannode.vj31a.mongodb.net/f8_education_dev');      
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log('Fail');
        console.error('Failed to connect to MongoDB:', error.message);
    }
}
module.exports = {connect};