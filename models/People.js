const mongoose = require('mongoose');

const PeopleSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    },
    height : {
        type : Number,
        required : true
    },
    contact : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Contacts'
    }]
});

module.exports = mongoose.model('Peoples', PeopleSchema);